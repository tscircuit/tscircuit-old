import React from "react"
import Tooltip from "@mui/material/Tooltip"
import { Box } from "@mui/system"
import QFP16 from "../QFP16Icon"

export const SidebarElement = ({ label, selected, onClick }) => {
  const firstLettersOfEachWord = label
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()

  let svgElm

  if (label === "Schematic Viewer") {
    svgElm = (
      <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="20" height="12" fill="white" />
        <line x1="0" y1="18" x2="8" y2="18" stroke="white" strokeWidth="2" />
        <line x1="28" y1="18" x2="36" y2="18" stroke="white" strokeWidth="2" />
      </svg>
    )
  }

  if (label === "PCB Viewer") {
    svgElm = <QFP16 />
  }

  return (
    <Box
      sx={{
        padding: "8px",
        paddingBottom: 0,
      }}
    >
      <Tooltip title={label} placement="right">
        <Box
          onClick={onClick}
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1,
            backgroundColor: selected ? "#444" : "#222",
            fontFamily: "sans-serif",
            fontSize: 18,
            fontWeight: "bold",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            color: selected ? "#fff" : "#999",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#444",
            },
          }}
        >
          {svgElm ?? firstLettersOfEachWord}
        </Box>
      </Tooltip>
    </Box>
  )
}
