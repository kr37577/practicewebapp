import { Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SNSPage from "./components/SNSPage";
import { Layout } from 'antd';
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

const { Content } = Layout;


function App() {
  return (
    <Router>
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/SNS" element={<SNSPage />}/>
      </Routes>
      <AppFooter />
    </div>
    </Router>
  );
}

export default App;

