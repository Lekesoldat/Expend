import React from "react";
import { Home as HomeIcon, List, PieChart, Plus } from "react-feather";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Themes from "../styles/themes/themes";
import { Categories } from "./Categories";
import Display from "./Display";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./Home";

const Nav = styled.nav`
  top: 0;
  background: ${({ theme }) => theme.background.default};
  font-weight: 600;
  z-index: 1;

  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & li {
      list-style: none;
      display: inline-block;

      & a {
        display: inline-block;
        color: ${({ theme }) => theme.text.primary};
        text-decoration: none;
        padding: 1.25rem 1.5rem;

        &.active {
          border-bottom: 2px solid ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`;

const Main = styled.main`
  flex: 1;
`;

const App = () => {
  return (
    <ThemeProvider theme={Themes["dark"]}>
      <>
        <GlobalStyles />
        <Router>
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Categories" component={Categories} />
              <Route path="/Display" component={Display} />
            </Switch>
          </Main>
          <Nav>
            <div className="container">
              <ul>
                <li>
                  <NavLink exact to="/">
                    <HomeIcon />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Categories">
                    <List />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Display">
                    <PieChart />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Reload"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.reload();
                    }}
                  >
                    <Plus />
                  </NavLink>
                </li>
              </ul>
            </div>
          </Nav>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
