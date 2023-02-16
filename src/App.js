import "./App.css";
import { useRef } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Process from "./Components/Process";
import Trustworthy from "./Components/Trustworthy";
import Result from "./Components/Result";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import Register from "./Components/Register";
import ScrolltoTop from "./Components/ScrolltoTop";
import Footer from "./Components/Footer";

import Responsive from "./Components/Responsive";
import theme from "./Components/Styles/ThemeProvider";


function App() {

 

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <Features />
        <Process />
        <Trustworthy />
        <Result />
        <Testimonials />
        <Pricing  />
        <Register />
        <ScrolltoTop/>
        <Footer/>
        {/* <Responsive/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
