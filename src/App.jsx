import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="h-750">
      <HeaderComponent />
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
