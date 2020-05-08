import React from "react";
import { Home as HomeIcon, List, PieChart, Plus } from "react-feather";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import useServiceWorker from "../hooks/useServiceWorker";
import Themes from "../styles/themes/themes";
import ActiveSubscriptions from "./ActiveSubscriptions";
import AddSubscription from "./AddSubscription";
import Display from "./Display";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Toast from "./Toast";

const Nav = styled.nav`
  top: 0;
  background: ${({ theme }) => theme.overlay};
  padding-bottom: env(safe-area-inset-bottom);
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
          color: ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`;

const Header = styled.div`
  background: ${({ theme }) => theme.overlay};

  /* iPhone X */
  padding-top: env(safe-area-inset-top);

  & div {
    display: flex;
    justify-content: center;
    padding: 1.25rem 1.5rem;
    font-weight: bold;

    & h3 {
      margin: 0;
    }
  }
`;

const Content = styled.main`
  padding: 1rem;
  overflow: auto;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [waiting, skipWaiting] = useServiceWorker();
  return (
    <ThemeProvider theme={Themes["dark"]}>
      <>
        <GlobalStyles />
        <Toast
          show={waiting}
          onClick={skipWaiting}
          title="Expend has been updated"
          description="Press to reload!"
        />

        <Router>
          <Header>
            <div>
              <h3>
                <Switch>
                  <Route path="/" exact>
                    Home
                  </Route>
                  <Route path="/Subscriptions">Subscriptions</Route>
                  <Route path="/Display">Display</Route>
                  <Route path="/Add">Add</Route>
                </Switch>
              </h3>
            </div>
          </Header>

          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Subscriptions" component={ActiveSubscriptions} />
              <Route path="/Display" component={Display} />
              <Route path="/Add" component={AddSubscription} />
            </Switch>
          </Content>
          <Nav>
            <div className="container">
              <ul>
                <li>
                  <NavLink exact to="/">
                    <HomeIcon />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Subscriptions">
                    <List />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Display">
                    <PieChart />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Add">
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
