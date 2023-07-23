import React from "react"
import { CircuitEditor } from "../components/CircuitEditor"

export const ArduinoNano = () => {
  return (
    <CircuitEditor>
      <resistor
        name="R1"
        sch_x={0}
        sch_y={0}
        footprint="0805"
        resistance="10kohm"
      />
    </CircuitEditor>
  )
}

export default {
  title: "ArduinoNano",
  component: ArduinoNano,
}
