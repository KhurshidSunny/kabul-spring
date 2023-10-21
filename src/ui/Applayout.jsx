import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledApplayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: yellow;
  padding: 4rem 4.6rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  gap: 3.2rem;
`;

function Applayout() {
  return (
    <StyledApplayout>
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledApplayout>
  );
}

export default Applayout;
