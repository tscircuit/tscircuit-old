import React from "react"
import { DebugViewer } from "@tscircuit/debug-viewer"
import { useRenderedElements } from "@tscircuit/react-fiber"
import { Schematic } from "@tscircuit/schematic-viewer"

export const CircuitEditor = ({ children }: any) => {
  // return <Schematic>{children}</Schematic>
  const { elements, loading } = useRenderedElements(children)

  if (loading) return null

  return (
    <div
      style={{
        width: "100%",
        minHeight: 600,
        backgroundColor: "#000",
        position: "relative",
        display: "flex",
      }}
    >
      <div style={{ color: "white" }}>sidebar</div>
      <div style={{ flexGrow: 1 }}>
        <DebugViewer soup={elements} schematic />
      </div>
    </div>
  )
}
