import "./App.css";
import LikedImages from "./Components/LikedImages";
import AllImages from "./Components/AllImages";
import MenuContainer from "./Components/MenuContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MenuContainer />}>
          <Route index element={<AllImages />} />
          <Route path="liked" element={<LikedImages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
