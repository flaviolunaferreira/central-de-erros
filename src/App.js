import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Home,
  Comments,
  AboutUs,
  AboutProject,
  Login,
  CentralErrors,
  SearchDate,
  Type,
  Origin,
  Level,
  Custom,
  Description,
  Register
} from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <Route exact path="/" component={Home} />
          <Route path="/comments" component={Comments} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/aboutproject" component={AboutProject} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>

          <Route path="/centralerrors" component={CentralErrors} />
          <Route path="/date" component={SearchDate} />
          <Route path="/origin" component={Origin} />
          <Route path="/level" component={Level} />
          <Route path="/description" component={Description} />
          <Route path="/custom" component={Custom} />
        </ChakraProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
