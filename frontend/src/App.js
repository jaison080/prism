import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import JobCreationPage from "./pages/JobCreationPage/JobCreationPage";
import JobsPage from "./pages/JobsPage/JobsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/create" element={<JobCreationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
