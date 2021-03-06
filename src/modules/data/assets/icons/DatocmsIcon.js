import React from "react"
import { toCamelCase } from "@modules/data/utils/transformName"
import { generateId } from "../../../../utils"

export default ({
  height = 25,
  width = 25,
  inverted,
  title = `DatoCMS logo`,
  ...rest
}) => {
  const titleId = `${toCamelCase(title)}SvgTitle_${generateId(3)}`
  const gradientId = `DatoCMSLogoGradient_${generateId(3)}`

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.652 95.261"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      <defs>
        <linearGradient
          id={gradientId}
          y1="47.631"
          x2="94.652"
          y2="47.631"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff593d" />
          <stop offset="1" stopColor="#ff7751" />
        </linearGradient>
      </defs>
      <path
        d="M47.326,0H0V95.261H47.326c23.67,0,47.326-21.326,47.326-47.624S71,0,47.326,0Zm0,69.274a21.644,21.644,0,1,1,21.65-21.637A21.635,21.635,0,0,1,47.326,69.274Z"
        fill={inverted ? `#ffffff` : `url(#${gradientId})`}
      />
    </svg>
  )
}
