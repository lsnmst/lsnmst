import ReactDOM from 'react-dom';
import {  HashRouter, Routes, Route,} from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import reportWebVitals from './reportWebVitals';


export default function App() {
  return (
    < HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
         {/*  <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </ HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
