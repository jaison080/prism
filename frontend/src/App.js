import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import JobCreationPage from "./pages/JobCreationPage/JobCreationPage";
import JobsPage from "./pages/JobsPage/JobsPage";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins",
        textTransform: "none",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/create" element={<JobCreationPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
