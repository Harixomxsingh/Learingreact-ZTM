// import "/category.style.scss";
// import "./category.style.scss";
import { Routes, Route } from "react-router-dom";
import { Hello } from "./components/hello";
import Navbar from "./components/navbar/navbar";
import { Home } from "./routes/home/home.component";
function Shop() {
  return <div>this is home/shope page</div>;
}
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
