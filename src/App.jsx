import Dashboard from "./pages/Dashboard";
import NavBar from "./sharedComponent/NavBar";
import SideBar from "./sharedComponent/SideBar/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Dashboard />
      <p className="mt-5 text-center lg:text-right mx-2 mb-1">
        &copy; <span className="ml-2">Growth Hub - shakil 2024</span>
      </p>
    </>
  );
}

export default App;
