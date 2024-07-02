import Dashboard from "./pages/Dashboard";
import NavBar from "./sharedComponent/NavBar";
import SideBar from "./sharedComponent/SideBar/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Dashboard />
    </>
  );
}

export default App;
