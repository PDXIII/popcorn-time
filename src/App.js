import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container mx-auto h-full w-2/3 px-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
