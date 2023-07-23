import React from "react"
import { CircuitEditor } from "."

export const Test1 = () => {
  return (
    <CircuitEditor>
      <resistor
        resistance="10kohm"
        footprint="0805"
        sch_x={0}
        sch_y={0}
        pcb_x={0}
        pcb_y={0}
        name="R1"
      />
    </CircuitEditor>
  )
}

export default {
  title: "CircuitEditor",
  component: CircuitEditor,
}
