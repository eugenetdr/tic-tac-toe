import { Box } from "@mui/material";
import { TicTacToe } from './TicTacToe';
import '../App.css';
import Typography from '@mui/material/Typography';
import TagIcon from '@mui/icons-material/Tag';
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <header className="App-header">
                <Box sx={{ display: "flex", alignItems: "center"}} onClick={()=>navigate("/tictactoe")} >
                    <TagIcon sx={{ fontSize: 96, p: 0 }}/>
                    <Typography variant="h1">
                        Tic Tac Toe
                    </Typography>
                </Box>
            </header>
        </div>
    )
};
  