import Menu from '../nav_bar/Navbar'
import { Container } from 'react-bootstrap'
import {
	FirebaseAuthConsumer
  } from "@react-firebase/auth";
const  Dashboard = (props) => {
   return  <FirebaseAuthConsumer>
  {({ user }) => {
    return(
        <>
        <Menu />
        <Container>
        <h2>Welcome, {user.displayName}</h2>
        </Container>
        </>
    )
  }}
  </FirebaseAuthConsumer>
}

export default Dashboard