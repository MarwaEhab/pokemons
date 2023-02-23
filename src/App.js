import { Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import Pokemon from "./pages/pokemon";
import Header from "./components/header";
import NotFound from "./pages/notFound";
import SearchResult from "./pages/searchResult";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/searchResluts/:query" element={<SearchResult />} />
        <Route path="/searchResluts/" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
