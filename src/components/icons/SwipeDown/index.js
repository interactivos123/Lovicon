import * as React from 'react'

const SwipeDown = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={64}
      height={64}
      viewBox='0 0 99 99'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__a'
          x1={1.697}
          y1={1.637}
          x2={-0.087}
          y2={0.744}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#9b2def' />
          <stop offset={0.517} stopColor='#2defe8' />
          <stop offset={1} stopColor='#2d78ef' />
        </linearGradient>
      </defs>
      <g transform='translate(-502 -328)'>
        <circle
          data-name='Ellipse 2'
          cx={49.5}
          cy={49.5}
          r={49.5}
          transform='translate(502 328)'
          fill='url(#prefix__a)'
        />
        <circle
          data-name='Ellipse 3'
          cx={44}
          cy={44}
          r={44}
          transform='translate(507 333)'
          fill='#fff'
        />
        <path
          data-name='Line 31'
          fill='none'
          stroke='#224fb4'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2.5}
          d='M531 380l19 19'
        />
        <path
          data-name='Line 32'
          fill='none'
          stroke='#224fb4'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2.5}
          d='M550 357v42'
        />
        <path
          data-name='Line 33'
          fill='none'
          stroke='#224fb4'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2.5}
          d='M573 380l-23 19'
        />
      </g>
    </svg>
  )
}

export default SwipeDown
