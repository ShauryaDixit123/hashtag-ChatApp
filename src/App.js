import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      {/* {header component} */}
      <Header />
      <div className="app-body">
        <SideBar />
      </div>
      {/* {React router for chat system} */}
    </div>
  );
}

export default App;
