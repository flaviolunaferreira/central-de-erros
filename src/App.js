import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { 
  Home, Comments, AboutUs, AboutProject, Login, CentralErrors, Register
 } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <Route exact path="/" component={Home}/>
          <Route path="/comments" component={Comments} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/aboutproject" component={AboutProject}/>
          <Route path="/login" component={Login}/>
          <Route path="/centralerrors" component={CentralErrors}/>
          <Route path="/register" component={Register}/>
        </ChakraProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
