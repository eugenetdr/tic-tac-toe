import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { makeAMove } from "../../features/tictactoe/tictactoeSlice";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

export function TicTacToeCell(props) {
  const board = useSelector((state) => state.tictactoe.board);
  const dispatch = useDispatch();
  const styles = {
    button: {
      width: "100%",
      height: "100%",
      padding: "0px",
    },
    icon: {
      fontSize: 256,
      p: 0,
    },
  };
  const rowIndex = Math.floor(props.id / 3);
  const colIndex = props.id % 3;


  return (
    <Button
      disabled={!(board[rowIndex][colIndex] === 0)}
      style={styles.button}
      onMouseUp={() => dispatch(makeAMove({rowIndex, colIndex}))}
    >
      {board[rowIndex][colIndex] === 1 ? (
        <PanoramaFishEyeIcon sx={styles.icon} />
      ) : board[rowIndex][colIndex] === -1 ? (
        <CloseIcon sx={styles.icon} />
      ) : (
        <></>
      )}
    </Button>
  );
}
