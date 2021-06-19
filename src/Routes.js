import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Base from "./components/base_template/Base";
import Signin from './components/login/login';
import Register from "./components/register/Register";
const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Base} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Signin} />
            </Switch>
        </Router>
    );
}
export default Routes;