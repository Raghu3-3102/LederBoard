import "./App.css";
import NavBar from "./Component/NavBar";
import Ranked from "./Component/Ranked";
import About from "./Component/About";
import Contect from "./Component/Contect";

import Add from "./Component/Add";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
    <Provider store={store}>

    <Ranked />
    <Footer />
      
      
    </Provider>
      

      
    </>
  );
}

export default App;
