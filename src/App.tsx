import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Hedear";
import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import JoinForm from "./page/JoinForm";
import About from "./page/About";
import Gallery from "./page/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/JoinForm" element={<JoinForm />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
