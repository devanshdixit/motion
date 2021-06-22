import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Base from "./components/base_template/Base";
import Signin from './components/login/login';
import Register from "./components/register/Register";
import {
  FirebaseAuthProvider, IfFirebaseAuthed,
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import  config  from "./credentials";
import Dashboard from "./components/daskboard/Dashboard";
const Routes = () => {
    return(
            <FirebaseAuthProvider {...config} firebase={firebase}>
     
    
        <Router>
            <Switch>
                <Route path="/" exact component={Base} />
                <Route path="/register" exact component={Register} />
                <Route path="/signin" exact component={Signin} />
                <IfFirebaseAuthed>
                    <Route path='/dashboard' exact component={Dashboard} />
                </IfFirebaseAuthed>
            </Switch>
   
        </Router>
    </FirebaseAuthProvider> 
    );
}
export default Routes;