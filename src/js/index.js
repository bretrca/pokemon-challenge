import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from "../components/Home/home";
import DetailCard from "../components/DetailCard/DetailCard";
import Logo from "../assets/images/logo.png";
const Index = () => {
  return (
    <>
      <div className="title"></div>

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
