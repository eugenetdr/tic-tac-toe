import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import "../App.css";
import { reset } from "../features/tictactoe/tictactoeSlice";
import { TicTacToeCell } from "./Components/TicTacToeCell";
import { useDispatch, useSelector } from "react-redux";

export function TicTacToe() {
  const styles = {
    main: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    gridContainer: {
      flexGrow: 1,
      maxHeight: "900px",
      maxWidth: "900px",
      aspectRatio: "1/1",
    },
    gridItem: {
      maxHeight: "300px",
      maxWidth: "300px",
      aspectRatio: "1/1",
    },
    top: {
      borderBottom: "10px solid",
    },
    left: {
      borderRight: "10px solid",
    },
    center: {
      border: "10px solid",
    },
    right: {
      borderLeft: "10px solid",
    },
    bottom: {
      borderTop: "10px solid",
    },
  };
  const board = useSelector((state) => state.tictactoe.board);
  const dispatch = useDispatch();

  function checkWin() {
    let zeroCount = 0
    const diagonalWins = [0, 0]
    for (let i=0; i<3; i++) {
      zeroCount += board[i].filter(item => item === 0).length
      const rowWin = board[i].reduce((sum, item) => sum + item, 0) 
      const colWin = board.reduce((sum, item) => sum + item[i], 0)
      if (rowWin === 3 || colWin === 3) {
        return('P1 Wins!');
      } else if (rowWin === -3 || colWin === -3) {
        return('P2 Wins!');
      }
      diagonalWins[0] += board[i][i]
      diagonalWins[1] += board[i][2 - i]
    }
    diagonalWins.forEach(diagonal => {
      if (diagonal === 3) {
        return('P1 Wins!');
      } else if (diagonal === -3) {
        return('P2 Wins!');
      }
    })
    if (zeroCount === 0) {
      return('DRAW')
    }
  }

  useEffect(() => {
    const gameResult = checkWin()
    if (gameResult) {
      
      alert(gameResult)
    }
  }, [board]);

  return (
    <div style={styles.main}>
      <Grid container spacing={0} sx={styles.gridContainer}>
        <Grid item xs={4} sx={{ ...styles.top, ...styles.left, ...styles.gridItem }}>
          <TicTacToeCell id={0}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.top, ...styles.gridItem }}>
          <TicTacToeCell id={1}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.top, ...styles.right, ...styles.gridItem }}>
          <TicTacToeCell id={2}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.left, ...styles.gridItem }}>
          <TicTacToeCell id={3}/>
        </Grid>
        <Grid item xs={4} sx={styles.gridItem} >
          <TicTacToeCell id={4}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.right, ...styles.gridItem }}>
          <TicTacToeCell id={5}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.bottom, ...styles.left, ...styles.gridItem }}>
          <TicTacToeCell id={6}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.bottom, ...styles.gridItem }}>
          <TicTacToeCell id={7}/>
        </Grid>
        <Grid item xs={4} sx={{ ...styles.bottom, ...styles.right, ...styles.gridItem }}>
          <TicTacToeCell id={8}/>
        </Grid>
        <Grid item xs={6} sx={{ maxWidth: "450px", }}>
          <Button style={{ width: "100%", height: "100%" }} onClick={()=>dispatch(reset())} >RESET</Button>
        </Grid>
      </Grid>
    </div>
  );
}
