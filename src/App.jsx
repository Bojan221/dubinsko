import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="h-[3000px]">
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default App;
