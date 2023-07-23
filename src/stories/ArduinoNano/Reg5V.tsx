export const Reg5V = () => {
  return (
    <>
      <powersource voltage="5volt" cx={0} cy={0} />
      <bug
        cx={3}
        cy={0}
        name="LM117IMPX-5.0"
        port_arrangement={{
          bottom_size: 1,
          left_size: 1,
          right_size: 1,
          top_sizew: 0,
        }}
      />
    </>
  )
}
