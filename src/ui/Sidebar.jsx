import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: red;
  padding: 3.2rem 2.2rem;
  grid-row: 1/-1;

  gap: 3.2rem;
`;

function Sidebar() {
  return <StyledSidebar>sidebar</StyledSidebar>;
}

export default Sidebar;
