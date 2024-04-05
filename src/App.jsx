import { BrowserRouter } from "react-router-dom";
import Router from "./configuration/Router.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
  return (
   <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Router />
        </div>
        <Footer />
      </div>
      </BrowserRouter>
  );
};

export default App;
