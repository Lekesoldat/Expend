import React, { useState } from "react";
import { Home as HomeIcon, List, PieChart, Plus, X } from "react-feather";
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
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import { Modal } from "./Modal";
import Toast from "./Toast";

const Container = styled.div`
  /* Layout */
  flex: 1;
  background: ${({ theme }) => theme.background.default};

  /* Flex */
  display: flex;
  flex-direction: column;

  transition: 0.25s transform ease-in-out, 0.25s border-radius ease-in-out;
  border-radius: ${({ scale }) => (scale ? "0.5rem" : "0")};

  transform: ${({ scale }) => (scale ? "scale(0.95)" : "none")};
  transform-origin: bottom;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.overlay};

  /* iPhone X */
  padding-top: env(safe-area-inset-top);
`;

const Main = styled.main`
  flex: 1;

  padding: 1rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
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
        text-decoration: none;
        padding: 1.25rem 1.5rem;
        color: ${({ theme }) => theme.text.primary};

        &.active {
          color: ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`;

const Clickable = styled.div`
  width: fit-content;
  cursor: pointer;
`;

const App = () => {
  const [waiting, skipWaiting] = useServiceWorker();
  const [show, setShow] = useState(false);
  return (
    <ThemeProvider theme={Themes["dark"]}>
      <>
        <GlobalStyle />

        <Toast
          show={waiting}
          onClick={skipWaiting}
          title="Expend has been updated"
          description="Press to reload!"
        />

        <Router>
          <Container scale={show}>
            {/* HEADER */}
            <Header>
              <h3>
                <Switch>
                  <Route path="/" exact>
                    Home
                  </Route>
                  <Route path="/subscriptions">Subscriptions</Route>
                  <Route path="/display">Display</Route>
                  <Route path="/add">Add</Route>
                </Switch>
              </h3>
            </Header>

            <Modal show={show}>
              <Clickable>
                <X color="white" onClick={() => setShow(false)} />
              </Clickable>
            </Modal>

            {/* MAIN */}
            <Main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/subscriptions" component={ActiveSubscriptions} />
                <Route path="/display" component={Display} />
                <Route path="/add" component={AddSubscription} />
              </Switch>
            </Main>

            {/* NAVIGATION */}
            <Nav>
              <div className="container">
                <ul>
                  <li>
                    <Clickable>
                      <NavLink exact to="/" onClick={() => setShow(true)}>
                        <HomeIcon />
                      </NavLink>
                    </Clickable>
                  </li>
                  <li>
                    <NavLink to="/subscriptions">
                      <List />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/display">
                      <PieChart />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/add">
                      <Plus />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Nav>
          </Container>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
