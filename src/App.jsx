import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent/>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
