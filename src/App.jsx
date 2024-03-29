import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/country-react" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
