import React from "react"

import SocialShareLink from "./SocialShareLink"
// import SocialCopyLink from "./SocialCopyLink"
import TwitterIcon from "../assets/Twitter"
import LinkedInIcon from "../assets/LinkedIn"
import LinkIcon from "../assets/Link"

const wrapperCss = () => ({
  display: `flex`,
  alignItems: `flex-end`,
})

const spacerCss = theme => ({
  width: theme.space[4],
  height: theme.space[4],
})

const genericShareText = `Check out Will It Build, a Gatsby.js project.`

const cmsTwitterMap = {
  datocms: `datocms`,
  contentful: `contentful`,
  cosmicjs: `cosmicjs`,
  drupal: `drupal`,
  mdx: `mdx_js`,
  wordpress: `WordPress`,
}

const SocialLinks = ({ location }) => {
  const { href, pathname } = location

  const pathnameElements = pathname.split(`/`).filter(Boolean)
  const isCalculatorPage = pathnameElements[0] === `calculator`

  let cms
  let pageCount

  if (isCalculatorPage) {
    cms = pathnameElements[4]
    pageCount = pathnameElements[6]
  }

  const twitterShareText = isCalculatorPage
    ? `Check out the benchmarks for building a ${pageCount} page @${cmsTwitterMap[cms]} site on @gatsbyjs Cloud.`
    : genericShareText

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${href}/&text=${encodeURIComponent(
    twitterShareText
  )}`

  // LinkedIn has apparently all but killed their query param share function
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=https://build-9622a0e6-d640-473b-9db0-b76165ee8ecb.gtsb.io/calculator/type/blog/source/drupal/page-count/512`

  return (
    <div css={wrapperCss}>
      <SocialShareLink
        Icon={TwitterIcon}
        url={twitterShareUrl}
        label="Share Gatsby Cloud benchmarks on Twitter"
      />
      <div css={spacerCss} />
      <SocialShareLink
        Icon={LinkedInIcon}
        url={linkedinShareUrl}
        label="Share Gatsby Cloud benchmarks on LinkedIn"
      />
      <div css={spacerCss} />
      <LinkIcon />
    </div>
  )
}

export default SocialLinks
