import { Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import Pokemon from "./pages/pokemon";
import Header from "./components/header";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
