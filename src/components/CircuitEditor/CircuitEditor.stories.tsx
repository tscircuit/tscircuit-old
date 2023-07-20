import React from "react"
import { CircuitEditor } from "."

export const Test1 = () => {
  return (
    <CircuitEditor>
      <resistor resistance="10ohm" footprint="0805" sch_x={0} sch_y={0} />
    </CircuitEditor>
  )
}

export default {
  title: "CircuitEditor",
  component: CircuitEditor,
}
