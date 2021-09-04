import "./App.css";
import Admin from "./components/pages/Admin";
import Footer from "./components/UI/Footer";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="app bg-light">
      {/* <Main /> */}

      <Admin />
      <Footer />
    </div>
  );
}

export default App;
