import React from "react"

export default ({ height = 20, width = 20, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M7.07865 9.38732L6.19531 12.9232L9.73031 12.039L15.0336 6.73565L12.382 4.08398L7.07865 9.38732Z"
      stroke="#78757A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.1258 3.64258L19.0092 4.52591C19.1253 4.642 19.2175 4.77983 19.2803 4.93154C19.3432 5.08325 19.3756 5.24586 19.3756 5.41008C19.3756 5.5743 19.3432 5.73691 19.2803 5.88862C19.2175 6.04033 19.1253 6.17816 19.0092 6.29424L16.25 9.05258"
      stroke="#78757A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0306 6.73598L18.1247 3.64265C18.3591 3.40824 18.4907 3.09035 18.4907 2.7589C18.4907 2.42744 18.3591 2.10956 18.1247 1.87515L17.2406 0.990983C17.0062 0.756644 16.6883 0.625 16.3568 0.625C16.0254 0.625 15.7075 0.756644 15.4731 0.990983L12.3789 4.08348"
      stroke="#78757A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.625 11.875V18.125C15.625 18.4565 15.4933 18.7745 15.2589 19.0089C15.0245 19.2433 14.7065 19.375 14.375 19.375H1.875C1.54348 19.375 1.22554 19.2433 0.991117 19.0089C0.756696 18.7745 0.625 18.4565 0.625 18.125V5.625C0.625 5.29348 0.756696 4.97554 0.991117 4.74112C1.22554 4.5067 1.54348 4.375 1.875 4.375H8.125"
      stroke="#78757A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
