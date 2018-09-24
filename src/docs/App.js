import './reset.css';
import packageJson from './../../package.json'
import React from "react";
import {Flex, Box} from 'rebass'
import Text from './components/Text'
import NavBar from './components/NavBar'
import NavLink from './components/NavLink'
import {HashRouter as Router, Route} from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import theme from './theme';
import HomeScreen from './components/HomeScreen';

// Demos
import ApiDemoDemo from './demos/ApiDemo'
import MinimalSetupDemo from './demos/MinimalExample'
import BrandStormerDemo from './demos/BrandStormer'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Flex flexDirection="column" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <Box flex="0 0 auto">
          <NavBar>
            <Flex alignItems="center">
              <Box>
                <a href={packageJson.repository.url}>
                  <Text pl={3} pr={3} color="white" fontFamily="mono" is="h1" fontSize={4}
                        fontWeight="bold">{`<LaneLayout/>`}</Text>
                </a>
              </Box>
              <Box>
                <NavLink exact to="/">Home</NavLink>
              </Box>
              <Box>
                <NavLink to="/api-demo">API Demo</NavLink>
              </Box>
              <Box>
                <NavLink to="/minimal-example">Minimal Example</NavLink>
              </Box>
              <Box>
                <NavLink to="/brand-stormer">Brand Stormer</NavLink>
              </Box>
            </Flex>
          </NavBar>
        </Box>
        <Box flex="1 1 auto" style={{position: 'relative'}}>
          <div>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/api-demo" component={ApiDemoDemo}/>
            <Route path="/minimal-example" component={MinimalSetupDemo}/>
            <Route path="/brand-stormer" component={BrandStormerDemo}/>
          </div>
        </Box>
      </Flex>
    </Router>
  </ThemeProvider>
);

export default App;
