import "./App.css";
import Navbar from "./Components/Navbar";
// import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar
        title="TextUtlis"
        HomeText="Home"
        AboutText="About Us"
        ServiceText="Services "
      />
      {/* <div className="container my-3">
        <Textform heading="Enter text here to analyze" />
      </div> */}
    </>
  );
}

export default App;
