import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Container } from "./component/Container";
import { DashboardContainer } from "./component/DashboardContainer";
import { NavBar } from "./component/NavBar";
import { SpeseContainer } from "./component/SpeseContainer";
import { EntrateContainer } from "./component/EntrateContainer";


function App() {
  return (
    <>
      <BrowserRouter>

      <Container>
          <NavBar/>
          <Routes>
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/spese" element={<SpeseContainer />} />
            <Route path="/entrate" element={<EntrateContainer />} />
            
          </Routes>
        </Container>

        
      </BrowserRouter>
    </>
  );
}

export default App;
