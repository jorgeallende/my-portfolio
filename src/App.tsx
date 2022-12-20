import "./App.css";


import AboutComponent from "./components/AboutComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  function SpinShape() {
    let min = Math.ceil(1);
    let max = Math.floor(8);
    let picked = Math.floor(Math.random() * (max - min) + min);
    console.log(picked);

    document.querySelector(`.shape${picked}`)?.classList.add("spinner");
    let controller = setInterval(() => {
      document.querySelector(`.shape${picked}`)?.classList.remove("spinner");
      clearInterval(controller);
    }, 4900);
  }

  let animateController = window.setInterval(function () {
    SpinShape();
  }, 5000);

  return (
    <div className="App bg-base-cream-400 px-4 sm:px-8 xl:px-[148px] pt-9 overscroll-x-none flex flex-col gap-16 relative">
      
      <Header />
      <Hero />
      <AboutComponent />
      <Projects />
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
