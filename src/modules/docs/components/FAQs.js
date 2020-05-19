import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MdAdd, MdRemove, MdArrowForward } from "react-icons/md"
import { Link } from "gatsby-interface"
import marked from "marked"
import { useLocation } from "@reach/router"

import {
  wrapperStyles,
  questionWrapper,
  questionRowStyles,
  answerStyles,
  expandCollapseButtonStyles,
  titleStyles,
  headerSectionStyles,
  headerTextStyles,
  faqIconStyles,
  contactLinkStyles,
  expandCollapseRowStyles,
} from "./FAQs.styles"

const Question = ({ id, title, answer, isExpanded, handleToggle }) => {
  const location = useLocation()
  const linkedQuestionId = location.hash.replace(/^#/, "")

  const elem = React.useRef()

  /**
   * HACK
   * We were seeing an issue in production where FAQ answers weren't showing
   * up. We figured out that this is likely due to a mismatch between client
   * and server values for the HTML generated by `marked`. During rehydration,
   * React was throwing the stuff away, for unknown reasons.
   *
   * To get around this, we start by rendering null during SSR (this is OK
   * since the FAQs really don't work until JS is loaded on the client anyway).
   * After mount we generate the HTML from the markdown answer, and set state,
   * triggering a re-render and properly rendering it.
   */
  const [processedAnswer, setProcessedAnswer] = React.useState(null)

  React.useEffect(() => {
    setProcessedAnswer(marked(answer))
  }, [answer])

  React.useEffect(() => {
    if (!elem.current) {
      return
    }

    if (linkedQuestionId === id) {
      elem.current.scrollIntoView()
      // This is funky on mobile so I need to override the whatever with some
      // things. This way, the UX is 📈📈📈
      handleToggle()
    }
  }, [id, linkedQuestionId])

  return (
    <div css={questionWrapper} ref={elem}>
      {/*
        If the page links to a specific question, this is our anchor for it
        to scroll to:
      */}
      <h3 id={id}>
        <button
          css={questionRowStyles}
          onClick={handleToggle}
          aria-expanded={isExpanded}
        >
          <span css={titleStyles}>{title}</span>

          <span>
            {isExpanded ? (
              <MdRemove css={faqIconStyles} />
            ) : (
              <MdAdd css={faqIconStyles} />
            )}
          </span>
        </button>
      </h3>

      <p
        css={theme => [
          answerStyles(theme),
          !isExpanded && {
            display: `none`,
          },
        ]}
        dangerouslySetInnerHTML={{ __html: processedAnswer }}
      />
    </div>
  )
}

const FAQs = () => {
  const { allContentfulFaq } = useStaticQuery(graphql`
    {
      allContentfulFaq(sort: { order: ASC, fields: createdAt }) {
        edges {
          node {
            id
            contentfulid
            question
            answer {
              answer
            }
          }
        }
      }
    }
  `)

  const questions = allContentfulFaq.edges
  const [expandedQuestions, setExpandedQuestions] = React.useState({})

  const areAllQuestionsExpanded =
    Object.values(expandedQuestions).filter(shown => shown).length ===
    questions.length

  const toggleExpandAll = () => {
    if (areAllQuestionsExpanded) {
      setExpandedQuestions({})
    } else {
      const allExpandedQuestions = questions.reduce((acc, question) => {
        return {
          ...acc,
          [question.node.id]: true,
        }
      }, {})

      setExpandedQuestions(allExpandedQuestions)
    }
  }

  return (
    <>
      <header>
        <h2 css={headerTextStyles}>Frequently asked questions</h2>
        <div css={headerSectionStyles}>
          <div>
            Can&apos;t find the answer to your question?{" "}
            <Link
              href="https://www.gatsbyjs.com/contact-us/"
              target="_blank"
              css={contactLinkStyles}
            >
              Talk to us{" "}
              <MdArrowForward css={theme => ({ marginLeft: theme.space[2] })} />
            </Link>
          </div>
          <div css={expandCollapseRowStyles}>
            <button
              css={expandCollapseButtonStyles}
              onClick={toggleExpandAll}
              aria-expanded={!!areAllQuestionsExpanded}
            >
              {areAllQuestionsExpanded ? "Collapse all" : "Expand all"}
            </button>
          </div>
        </div>
      </header>

      <div css={wrapperStyles}>
        {questions.map(({ node }) => {
          return (
            <Question
              key={node.id}
              id={node.contentfulid || node.id}
              title={node.question}
              answer={node.answer.answer}
              isExpanded={!!expandedQuestions[node.id]}
              handleToggle={() =>
                setExpandedQuestions({
                  ...expandedQuestions,
                  [node.id]: !expandedQuestions[node.id],
                })
              }
            />
          )
        })}
      </div>
    </>
  )
}

export default FAQs
