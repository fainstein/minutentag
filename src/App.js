import Header from "./Components/Header";
import "./App.css";
import Solutions from "./Components/Solutions";
import Footer from "./Components/Footer";
import People from "./Components/People";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Solutions />
        <People />
      </div>
      <Footer />
    </div>
  );
}

export default App;
