import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    return (
    <nav className="navbar">

<input type="text" placeholder="search for movies" />
<button onClick={()=>navigate("/Signin")}>
    Signin
</button>
    </nav>
    )
}
export default Navbar;