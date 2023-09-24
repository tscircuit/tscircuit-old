import React from "react"

export const Reg5V = () => {
  return (
    <>
      {/* If you're actually reading this react code, this version has a lot of
        explicit connections and manual layout, there is a lot of fancy syntax
        that will be available in the future to avoid listing a million traces
        and setting positions manually! */}
      <netalias net="vin" cx={1} cy={-1}></netalias>
      <netalias net="5v" cx={5} cy={-1}></netalias>
      <netalias net="gnd" rotation="180deg" cx={3} cy={2}></netalias>
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
          "1": "in",
          "2": "gnd",
          "3": "out1",
          "4": "out2",
        }}
      >
        <smtpad name="1" x={0} y={0} width={10} height={10} shape="rect" />
      </bug>
      <diode cx={8} cy={1} rotation="90deg" name="PWR_GREEN" />
      <resistor name="RP1C" resistance="1kohm" cx={6} cy={0} />
      <capacitor name="C8" cx={5} cy={1.5} rotation="90deg" capacitance="1uF" />

      <trace path={[".vin", ".LM117 > .in"]} />
      <trace path={[".5v", ".LM117 > .out1", ".LM117 > .out2"]} />
      <trace path={[".gnd", ".LM117 > .gnd"]} />
      <trace path={[".gnd", ".C8 > .right"]} />
      <trace path={[".5v", ".C8 > .left", ".RP1C > .left"]} />
      <trace path={[".RP1C > .right", ".PWR_GREEN > .left"]} />
      <trace path={[".gnd", ".PWR_GREEN > .right"]} />
    </>
  )
}
