import React, { useRef } from "react"
import { toCamelCase } from "@modules/data/utils/transformName"
import { generateId } from "../../../../utils"

let ID = 0

function NetlifyIcon({
  height = 16,
  width = 16,
  title = `Netlify logo`,
  ...rest
}) {
  const idRef = useRef(ID++)
  const titleId = `${toCamelCase(title)}SvgTitle_${generateId(3)}`

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      <path
        fill={`url(#paint${idRef.current}_radial)`}
        fillRule="evenodd"
        d="M6.834 4.178a698.44 698.44 0 00-2.162-.918c-.005-.004-.008-.006-.002-.017 0-.007 0-.013.006-.02L7.916.007C7.917 0 7.924 0 7.93 0h.006l.008.007 1.395 1.379a.02.02 0 010 .027L7.658 4.017c-.007.007-.014.013-.02.013H7.63a.829.829 0 00-.776.141c-.007.007-.007.007-.014.007h-.007zm1.341.552a.868.868 0 00-.136-.384c-.007-.006-.007-.02 0-.033L9.68 1.77c0-.007.007-.014.014-.014H9.7l.008.007 1.457 1.446c.006.007.006.014.006.02l-.38 2.362c0 .014-.008.02-.014.02a.723.723 0 00-.239.122c0 .006-.007.006-.013.006h-.007L8.189 4.75c-.007-.007-.014-.013-.014-.02zm3.315 1.083a.677.677 0 00-.204-.154c-.004 0-.009-.006-.013-.012l-.007-.009.32-1.958c0-.013.006-.02.013-.02h.007s.007 0 .014.007l1.463 1.447c.007.006.007.013.007.02 0 .006-.007.013-.014.02l-1.565.666H11.498l-.008-.007zm4.5 2.174L13.492 5.51c-.007-.006-.014-.006-.014-.006h-.007l-1.695.72c-.007.006-.013.013-.013.02 0 .007.006.02.013.02l4.18 1.77h.007c.006 0 .013 0 .013-.007l.014-.014c.013 0 .013-.02 0-.026zm-4.425-1.292l4.01 1.695c.006.007.006.014.006.02 0 .007 0 .014-.007.02l-2.219 2.2c0 .008-.007.008-.013.008h-.007l-2.424-.505c-.013 0-.02-.007-.02-.02a.674.674 0 00-.259-.471c-.006-.007-.006-.014-.006-.02l.429-2.631c0-.014.013-.02.02-.02a.683.683 0 00.463-.27c.007-.006.013-.006.02-.006h.007zm-1.3-.552l-2.192-.929h-.007c-.006 0-.013.007-.02.014a.802.802 0 01-.674.363c-.036 0-.071-.005-.111-.01l-.018-.003h-.007c-.007 0-.014.007-.02.013L5.412 8.384a.02.02 0 000 .026c.006.007.013.007.02.007h.007l4.813-2.052c.006-.007.013-.013.013-.02v-.061c0-.04.007-.08.014-.114 0-.014-.007-.02-.014-.027zm.51 4.448l2.131.437c.007 0 .014.006.014.027 0 .006 0 .013-.007.02L9.96 14.002c0 .006-.007.006-.014.006h-.013c-.007-.006-.014-.013-.014-.026l.51-3.136c0-.007.007-.02.014-.02a.733.733 0 00.306-.229c.004 0 .007-.002.01-.003a.024.024 0 01.01-.003h.008zm-.843.222a.695.695 0 01-.409-.472c0-.006-.007-.013-.02-.02l-3.948-.814h-.007c-.007 0-.014.007-.02.014l-.017.028a.555.555 0 01-.038.06.02.02 0 000 .026l3.594 5.194c.004.004.006.006.008.006a.02.02 0 00.006.001c.007 0 .013 0 .013-.007l.218-.215c0-.003.002-.005.004-.007.001-.001.003-.003.003-.006l.613-3.768c.013 0 .013-.014 0-.02zM5.657 9.05c-.014 0-.02-.007-.02-.02 0-.035-.006-.068-.012-.1a1.078 1.078 0 01-.01-.055c0-.014 0-.02.014-.027l4.84-2.066h.007s.007 0 .014.007a.747.747 0 00.088.074c.014 0 .014.013.014.02l-.422 2.59c0 .014-.007.02-.02.02a.684.684 0 00-.552.35c-.007.007-.014.014-.02.014H9.57L5.657 9.05zm-1.661.632a.98.98 0 01-.062-.087c-.007-.007-.013-.014-.02-.014h-.007l-1.688.72c-.007 0-.014.007-.014.014 0 .006 0 .013.007.02l.824.814a.021.021 0 00.013.007c.007 0 .014-.007.02-.014l.933-1.446s0-.007-.006-.014zm1.096.25c.006 0 .013.006.02.013l3.608 5.234a.02.02 0 010 .027l-.79.787c0 .007-.007.007-.014.007 0 0-.006 0-.013-.007l-4.506-4.46a.02.02 0 010-.027l.006-.007.98-1.52c.007-.008.014-.014.021-.014h.007a.928.928 0 00.674-.034h.007zm-.613-1.744c.007.007.014.014.02.014h.007c.068-.014.143-.027.211-.027.075 0 .157.013.232.034h.007c.006 0 .013-.007.02-.014L6.8 5.37a.02.02 0 000-.027.791.791 0 01-.204-.733c0-.014-.007-.02-.014-.027l-.92-.39a118.38 118.38 0 01-1.36-.579h-.007c-.007 0-.013 0-.013.007L2.546 5.342a.02.02 0 000 .027l1.933 2.82zm-.606.492c.007 0 .014-.007.02-.014.041-.08.103-.155.164-.222a.02.02 0 000-.027c-.02-.027-1.865-2.691-1.865-2.698-.007-.007-.007-.007-.02-.013-.007 0-.014 0-.014.006L.007 7.84C0 7.845 0 7.852 0 7.859c0 .006.007.013.02.013l3.853.808zm-.197.444c.014 0 .02.006.02.02 0 .007-.006.013-.02.027l-1.852.787h-.006s-.007 0-.014-.007l-1.49-1.48C.305 8.464.3 8.451.305 8.444c.007-.007.014-.013.02-.013h.008l3.342.693z"
        clipRule="evenodd"
      ></path>
      <defs>
        <radialGradient
          id={`paint${idRef.current}_radial`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(16 0 0 16 8 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20C6B7"></stop>
          <stop offset="1" stopColor="#4D9ABF"></stop>
        </radialGradient>
      </defs>
    </svg>
  )
}

export default NetlifyIcon
