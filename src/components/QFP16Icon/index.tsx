import React from "react"

const QFP16 = () => {
  const pinLength = 5 // Shorten pin length to 2
  const pinSpace = 5
  const pinsPerSide = 4
  const squareSize = 16
  const squareStart = (36 - squareSize) / 2
  const squareEnd = squareStart + squareSize
  const pinSquareDist = 3

  const positions = Array.from(
    { length: pinsPerSide },
    (_, i) => squareStart + i * pinSpace,
  )

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={squareStart}
        y={squareStart}
        width={squareSize}
        height={squareSize}
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      {positions.map((pos) => (
        <>
          <line
            x1={squareStart - pinLength - pinSquareDist}
            y1={pos}
            x2={squareStart - pinSquareDist}
            y2={pos}
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1={squareEnd + pinSquareDist}
            y1={pos}
            x2={squareEnd + pinLength + pinSquareDist}
            y2={pos}
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1={pos}
            y1={squareStart - pinLength - pinSquareDist}
            x2={pos}
            y2={squareStart - pinSquareDist}
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1={pos}
            y1={squareEnd + pinSquareDist}
            x2={pos}
            y2={squareEnd + pinLength + pinSquareDist}
            stroke="white"
            strokeWidth="2"
          />
        </>
      ))}
    </svg>
  )
}

export default QFP16
