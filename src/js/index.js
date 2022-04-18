import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import DetailCard from "../components/DetailCard/DetailCard";

const Index = () => {
  return (
    <>
      <div className="title"></div>

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/pokemon/:id" component={DetailCard}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Index;
