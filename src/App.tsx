import { BrowserRouter as Router } from "react-router-dom";
import Routes from "pages/routes";
import Header from "components/Header";
import styled from "@emotion/styled";

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Routes />
      </StyledApp>
    </Router>
  );
}

export default App;

const StyledApp = styled.div`
  padding-top: 6rem;
  background: #282828;
  text-align: center;
  min-height: 100vh;
  color: white;
`;
