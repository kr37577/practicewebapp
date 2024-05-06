import { Routes } from "react-router-dom";
import "./App.css";
import BlogPage from "./components/BlogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SNSPage from "./components/SNSPage";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/SNS" element={<SNSPage />}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

