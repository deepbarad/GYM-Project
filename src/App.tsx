import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Hedear";
import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import JoinForm from "./page/JoinForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/JoinForm" element={<JoinForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
