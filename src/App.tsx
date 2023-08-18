import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ChartAndMapsPage from "./pages/ChartsAndMapsPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header text="Contact Page" />
      <div className="flex">
        <div className="basis-[12%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[88%]">
          <Routes>
            <Route path="/">
              <Route index={true} element={<ContactPage />} />
              <Route path="charts" element={<ChartAndMapsPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
