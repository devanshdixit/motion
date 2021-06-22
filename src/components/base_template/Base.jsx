import Menu from "../nav_bar/Navbar";
import { Button} from "react-bootstrap";
import {
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import "firebase/auth";
const Base = (props) => {
  function checkUser(isSignedIn) {
		try {
      if (isSignedIn === false) {
        props.history.replace('/signin')
      } else {
        props.history.replace('/dashboard')
      }
		
		} catch(error) {
			alert(error.message)
		}
	}
  return (
    <div>
      <Menu />
      <div className="container-fluid mt-4">
        <div className="" style={{ textAlign: "center" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/multitasking-concept-illustration-character_23-2148403716.jpg.png`}
            className="img-fluid"
            alt=""
          />
          <h1 className="" style={{fontSize:"74px",color:"black"}}>All-in-one workspace</h1>
          <h2 className="text-muted">Write, plan, and get organized.</h2>
           <FirebaseAuthConsumer>
        {({ isSignedIn }) => {
          return <Button variant="dark" onClick={()=>{checkUser(isSignedIn)}}  className="mt-2" size="lg" style={{borderRadius:"50px"}}>Let's Start</Button>
          // if (isSignedIn === true) {
          //   return "Signed in";
          // } else {
          //   return "Not signed in";
          // }
        }}
      </FirebaseAuthConsumer>
         
        </div>
      </div>
    </div>
  );
};

export default Base;
