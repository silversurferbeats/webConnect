import ButtonGradient from "./assets/svg/ButtonGradient";
import Form from "./components/Form";
import Header from "./components/Header";
import Landing from "./components/Landing";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Footer from "./components/Footer";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Services from "./components/Services";
import {Routes ,Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        {/* <Hero /> */}
        
        {/* others elements: */}
        {/* <Benefits /> */}
        {/* <Collaboration /> */}
        {/* <Services /> */}
        
        {/* <Roadmap />
        <Pricing />
        <Footer /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </div>

      <ButtonGradient />

    </>
  );
};

export default App;
