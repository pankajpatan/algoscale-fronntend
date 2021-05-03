import './navbar.css'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
    return ( <>  <nav class="navbar">
    <a href="https://freecodecamp.org" class="logo">
      <img src="https://camo.githubusercontent.com/634d520b083dfe26ca8087de646a4b131291a47dfc7df83227b05934d1d63de3/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f686f746a61722e737667" alt="algoscale"></img>
    </a>
    <ul class="nav-links">
      <li class="nav-item"><NavLink to='/contact'>Contact Form</NavLink></li>
      <li class="nav-item"><NavLink to='/analytics'>Chart</NavLink></li>
     
    </ul>
  </nav> </>);
}
 
export default Navbar;