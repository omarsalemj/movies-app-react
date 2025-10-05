import { Box, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import 'react-nice-scroll/dist/styles.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar"
import { darkTheme, lightTheme } from "./theme/theme";


function App() {


  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <div className="App">
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Box bgcolor="background.body" minHeight="100vh" sx={{paddingTop: '100px'}}>
              <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <Container>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<MoviesList />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                  </Routes>
                </BrowserRouter>
              </Container>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
