import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette:{
        mode: "light",
        background:{
            header: "#24dfd3d3",
            body: "#fff",
        },
    },
});

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        background:{
            header: "#24dfd3d3",
            body: "#1a242f",
        },
    },
});
