import "./App.css";
import Navigation from "./components/Navigation";
import Players from "./components/Players";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Players/> BAI 9 */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
