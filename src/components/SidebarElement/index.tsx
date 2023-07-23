import React from "react"
import Tooltip from "@mui/material/Tooltip"
import { Box } from "@mui/system"

export const SidebarElement = ({ label, selected, onClick }) => {
  const firstLettersOfEachWord = label
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()

  return (
    <Tooltip title={label} placement="right">
      <Box
        onClick={onClick}
        sx={{
          width: 50,
          height: 50,
          backgroundColor: selected ? "#333" : "#000",
          fontFamily: "sans-serif",
          fontSize: 24,
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
        {firstLettersOfEachWord}
      </Box>
    </Tooltip>
  )
}
