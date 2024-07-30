import styled from "styled-components";
import {MainButton} from "./styles/buttons.styles";
 
const App = () => {
  return (
    <>
      <NavBar>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Work</NavItem>
      </NavBar>
 
      <HeroSection>
        <h1>TITLE</h1>
        <p>Some text</p>
        <div>
          <h3 className="nestedTitle">Nested h3 tag</h3>
        </div>
      </HeroSection>
 
      <MainButton $bgCol="green">Save</MainButton>
      <MainButton $bgCol="yellow">Edit</MainButton>
      <MainButton $bgCol="red">Delete</MainButton>
    </>
  );
};
 
export default App;
 
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: navy;
  padding: 20px;
`;
 
const NavItem = styled.a`
  color: white;
  margin: 0 15px;
  padding: 10px 20px;
 
  &:hover{
    background-color: blue;
  }
`;
 
const HeroSection = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 400px;
 
  h1{
    background-color: red;
  }
 
  .nestedTitle{
    background-color: pink;
  }
`;