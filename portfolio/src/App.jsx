import Nav from "./components/nav";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="overflow-x-hidden text-slate-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-4">
        <Nav />
        <Hero />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
