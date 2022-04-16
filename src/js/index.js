import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeComponent from "../components/Home/home";
import DetailCard from "../components/DetailCard/DetailCard";

const Index = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
          <Route path="/pokemon/:id" component={DetailCard}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Index;
