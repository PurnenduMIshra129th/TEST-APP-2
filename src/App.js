import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Data from "./Component/Data";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />


      <div
        className="container text-center  min-vw-100 "
        style={{ height: "300px", marginTop: "74px" }}
      >
        <div className="row   min-vw-100  h-40 w-100 ">
          <Data name="comments" />
          <Data name="photos" />
        </div>
        <div className="row  min-vw-100 h-40 w-100">
          <Data name="todos" />
          <Data name="posts" />
        </div>
      </div>
      

      <Footer />
    </>
  );
}

export default App;
