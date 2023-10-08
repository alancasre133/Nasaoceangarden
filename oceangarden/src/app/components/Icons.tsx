export function HeadphonesOff({ size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill="#E2E2E2"
        d="m18.8 20.6-3.025-3.025a8.302 8.302 0 0 1-1.325.688c-.467.191-.95.345-1.45.462v-2.05c.233-.083.463-.167.688-.25.224-.083.437-.183.637-.3L11 12.8V18l-5-5H2V7h3.2L.4 2.2 1.8.8l18.4 18.4-1.4 1.4Zm-.2-5.8-1.45-1.45a6.787 6.787 0 0 0 .638-1.625c.141-.567.212-1.15.212-1.75 0-1.567-.458-2.967-1.375-4.2S14.5 3.708 13 3.275v-2.05c2.067.467 3.75 1.512 5.05 3.137C19.35 5.987 20 7.858 20 9.976c0 .883-.12 1.733-.363 2.55A8.8 8.8 0 0 1 18.6 14.8Zm-3.35-3.35L13 9.2V5.95a4.15 4.15 0 0 1 1.838 1.65c.441.733.662 1.533.662 2.4a4.33 4.33 0 0 1-.25 1.45ZM11 7.2 8.4 4.6 11 2v5.2Zm-2 5.95V10.8L7.2 9H4v2h2.85L9 13.15Z"
      />
    </svg>
  )
}

export function Headphones({ size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <mask
        id="a"
        width={size}
        height={size}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#E2E2E2"
          d="M14 20.725v-2.05c1.5-.433 2.708-1.267 3.625-2.5.917-1.233 1.375-2.633 1.375-4.2 0-1.567-.458-2.967-1.375-4.2S15.5 5.708 14 5.275v-2.05c2.067.467 3.75 1.512 5.05 3.137C20.35 7.987 21 9.858 21 11.976c0 2.117-.65 3.988-1.95 5.612-1.3 1.625-2.983 2.671-5.05 3.138ZM3 15V9h4l5-5v16l-5-5H3Zm11 1V7.95a4.151 4.151 0 0 1 1.838 1.65c.441.733.662 1.533.662 2.4 0 .85-.22 1.637-.662 2.363A4.174 4.174 0 0 1 14 16Zm-4-7.15L7.85 11H5v2h2.85L10 15.15v-6.3Z"
        />
      </g>
    </svg>
  )
}

export function CloseIcon({ size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="m12 2 .324.001.318.004.616.017.299.013.579.034.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553-.034-.579a28.058 28.058 0 0 1-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324.004-.318.017-.616.013-.299.034-.579.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005zm-1.489 7.14a1 1 0 0 0-1.218 1.567L10.585 12l-1.292 1.293-.083.094a1 1 0 0 0 1.497 1.32L12 13.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L13.415 12l1.292-1.293.083-.094a1 1 0 0 0-1.497-1.32L12 10.585l-1.293-1.292-.094-.083z"
      />
    </svg>
  )
}

export function RightArrowIcon({ size = 32 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
      <mask
        id="a"
        width={size}
        height={size}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h40v40H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#E4E4E4"
          d="M28.042 21.389H6.667V18.61h21.375l-10-10L20 6.667 33.333 20 20 33.333l-1.958-1.944 10-10Z"
        />
      </g>
    </svg>
  )
}
