import './reset.css';
import packageJson from './../package.json'
import React from "react";
import {Flex, Box } from 'rebass'
import Text from './components/Text'
import NavBar from './components/NavBar'
import NavLink from './components/NavLink'
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import ApiDemoPage from './pages/ApiDemo'
import BrandStormerPage from './pages/BrandStormer'

class App extends React.Component {


  render() {

    return (
      <Router>
        <Flex flexDirection="column" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
          <Box flex="0 0 auto">
            <NavBar>
              <Flex alignItems="center" >
                <Box>
                  <a href={packageJson.repository.url}>
                    <Text pl={3} pr={3} color="white" fontFamily="mono" is="h1" fontSize={4} fontWeight="bold">{`<LaneLayout/>`}</Text>
                  </a>
                </Box>
                <Box>
                  <NavLink exact to="/">API Demo</NavLink>
                </Box>
                <Box>
                  <NavLink to="/brand-stormer">Brand Stormer</NavLink>
                </Box>
              </Flex>
            </NavBar>
          </Box>
          <Box flex="1 1 auto" style={{position: 'relative'}}>
            <div>
              <Route exact path="/" component={ApiDemoPage} />
              <Route path="/brand-stormer" component={BrandStormerPage} />
            </div>
          </Box>
        </Flex>
      </Router>
    );
  }
}

export default App;
