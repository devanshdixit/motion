import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Base from "./components/base_template/Base";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Base} />
            </Switch>
        </Router>
    );
}
export default Routes;