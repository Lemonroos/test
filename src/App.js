import "./App.css";
import Navigation from "./components/Navigation";
import Players from "./components/Players";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail"
import Contact from "./components/Contact"

// function App() { BAI 5 6 7 8 9 10 11
//   return (
//     <div className="App">
//       <Navigation />
//       <Players /> BAI 9
//       <Main />
//       {/* <Counter/> */}
//       {/* BAI VI DU VE USESTATE */}
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navigation/>
     
      <Routes>
        <Route path="/" element={<Players />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
