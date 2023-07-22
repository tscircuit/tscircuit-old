import React from "react"
import { DebugViewer } from "@tscircuit/debug-viewer"
import { useRenderedElements } from "@tscircuit/react-fiber"
import { Schematic } from "@tscircuit/schematic-viewer"

export const CircuitEditor = ({ children }: any) => {
  // return <Schematic>{children}</Schematic>
  const { elements, loading } = useRenderedElements(children)

  if (loading) return null

  return <DebugViewer soup={elements} schematic />
}
