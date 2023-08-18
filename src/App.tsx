import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ChartAndMapsPage from "./pages/ChartsAndMapsPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route index={true} element={<ContactPage />} />
          <Route path="charts" element={<ChartAndMapsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
