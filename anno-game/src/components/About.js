import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function About(){
    return(
        <Box
        sx={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container-lg center">
            <Typography variant="h3" gutterBottom>About Moco Game</Typography>
        </div>
    </Box>
    )
}