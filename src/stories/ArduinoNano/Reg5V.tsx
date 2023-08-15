import React from "react"

export const Reg5V = () => {
  return (
    <>
      {/* <powersource name="5v" voltage="5volt" cx={0} cy={0} /> */}
      <netalias name="5v" cx={0} cy={0} />
      <bug
        sch_x={3}
        sch_y={0}
        name="LM117"
        // label="LM117IMPX-5.0"
        port_arrangement={{
          bottom_size: 1,
          left_size: 1,
          right_size: 2,
          top_size: 0,
        }}
        // pin_order={[3, 1, 2, 4]}
        port_labels={{
          "1": "vout",
          "2": "gnd",
          "3": "vin",
        }}
      >
        <smtpad pin="1" x={0} y={0} width={10} height={10} shape="rect" />
      </bug>
      {/* <trace path={[".5v > .5v", ".LM117 > .vout"]} /> */}
    </>
  )
}
