import Menu from "../nav_bar/Navbar";
import { Button} from "react-bootstrap";
const Base = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid mt-4">
        <div class="" style={{ textAlign: "center" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/multitasking-concept-illustration-character_23-2148403716.jpg.png`}
            className="img-fluid"
            alt=""
          />
          <h1 className="" style={{fontSize:"74px",color:"black"}}>All-in-one workspace</h1>
          <h2 className="text-muted">Write, plan, and get organized.</h2>
          <Button variant="dark"  className="mt-2" size="lg" style={{borderRadius:"50px"}}>Let's Start</Button>
        </div>
      </div>
    </div>
  );
};

export default Base;
