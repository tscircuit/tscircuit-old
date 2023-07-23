import React, { useState } from "react"
import { DebugViewer } from "@tscircuit/debug-viewer"
import { useRenderedElements } from "@tscircuit/react-fiber"
import { Schematic } from "@tscircuit/schematic-viewer"
import { SidebarElement } from "../SidebarElement"
import { PCBViewer } from "@tscircuit/pcb-viewer"

const SIDEBAR_CONTENT = {
  schematic_viewer: "Schematic Viewer",
  pcb_viewer: "PCB Viewer",
  pcb_debugger: "PCB Debugger",
  schematic_debugger: "Schematic Debugger",
}
type ViewName = keyof typeof SIDEBAR_CONTENT
const VIEWS = Object.keys(SIDEBAR_CONTENT) as ViewName[]

export const CircuitEditor = ({ children }: any) => {
  const { elements, loading } = useRenderedElements(children)
  const [selectedView, setSelectedView] = useState<ViewName>("pcb_viewer")

  if (loading) return null

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid rgba(0,0,0,0.1)",
        minHeight: 600,
        position: "relative",
        display: "flex",
      }}
    >
      <div style={{ color: "white", backgroundColor: "black", width: 50 }}>
        {VIEWS.map((viewName) => (
          <SidebarElement
            key={viewName}
            selected={selectedView === viewName}
            label={SIDEBAR_CONTENT[viewName]}
            onClick={() => setSelectedView(viewName)}
          />
        ))}
      </div>
      <div style={{ color: "#000", flexGrow: 1 }}>
        {selectedView === "schematic_debugger" && (
          <DebugViewer soup={elements} schematic />
        )}
        {selectedView === "schematic_viewer" && (
          <Schematic style={{ height: 600 }} soup={elements} />
        )}
        {selectedView === "pcb_debugger" && <DebugViewer soup={elements} pcb />}
        {selectedView === "pcb_viewer" && (
          <div
            style={{ width: "100%", minHeight: 600, backgroundColor: "#111" }}
          >
            <PCBViewer soup={elements} />
          </div>
        )}
      </div>
    </div>
  )
}
