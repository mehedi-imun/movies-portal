import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MovieLists from "./component/cine/MovieLists";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`h-full w-full ${darkMode ? "dark":""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Header></Header>
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar></Sidebar>
              <MovieLists></MovieLists>
            </div>
          </main>
          <Footer></Footer>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
