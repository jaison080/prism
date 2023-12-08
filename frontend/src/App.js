import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import JobCreationPage from "./pages/JobCreationPage/JobCreationPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jobs/create" element={<JobCreationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
