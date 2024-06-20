// import Khachhang from "./components/Khachhang";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <Khachhang/>
    // </div>
    <div className="wrapper">
      <Sidebar />
      <MainPanel />
    </div>
  );
}

export default App;
