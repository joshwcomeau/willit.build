import React from "react"

export default ({ height = 25, width = 25, inverted, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill={inverted ? "#fff" : "black"}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M1.36947 11.1969H34.6303C35.2787 11.1969 35.8043 11.7258 35.8043 12.3782V24.5849C35.8043 25.2373 35.2787 25.7662 34.6303 25.7662H1.36947C0.721135 25.7662 0.195557 25.2373 0.195557 24.5849V12.3782C0.195557 11.7258 0.721135 11.1969 1.36947 11.1969Z"
      fill="white"
    />
    <path
      d="M1.36957 11H34.6304C35.3868 11 36 11.617 36 12.3782V24.5849C36 25.3461 35.3868 25.9631 34.6304 25.9631H1.36957C0.613175 25.9631 0 25.3461 0 24.5849V12.3782C0 11.617 0.613175 11 1.36957 11ZM1.36957 11.3938C0.829287 11.3938 0.391304 11.8345 0.391304 12.3782V24.5849C0.391304 25.1286 0.829287 25.5693 1.36957 25.5693H34.6304C35.1707 25.5693 35.6087 25.1286 35.6087 24.5849V12.3782C35.6087 11.8345 35.1707 11.3938 34.6304 11.3938H1.36957Z"
      fill="#EAEAEA"
    />
    <path
      d="M19.1739 13.8446L19.1738 19.8513L21.3664 17.6453L22.4732 18.7591L18.4202 22.8373L14.3162 18.7074L15.4229 17.5936L17.6086 19.793L17.6087 13.8446H19.1739Z"
      fill="black"
    />
    <path
      d="M5.07401 22.5315V17.8796L7.9044 20.728L10.7563 17.8584V22.4845H12.3215V14.0561L7.90448 18.5005L3.50879 14.0769V22.5315H5.07401Z"
      fill="black"
    />
    <path
      d="M31.4893 13.5932L32.5961 14.707L29.2809 18.0429L32.4941 21.2764L31.3873 22.3902L28.174 19.1567L24.9607 22.3902L23.854 21.2764L27.0669 18.0429L23.752 14.707L24.8587 13.5932L28.174 16.9291L31.4893 13.5932Z"
      fill="#F9AC00"
    />
  </svg>
)
