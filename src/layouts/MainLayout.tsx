import Footer from "../components/Footer";
import Header from "../components/Hedear";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="mt-16">
          <Outlet />
        </div>
        <div className="mb-16">
          <Footer />
        </div>
      </div>
    </>
  );
}
