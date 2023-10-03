import { Link } from "react-router-dom";


export default function Header() {
  return (
     <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
         <Link to="/heroreg">Hero Regidter</Link>
    </div>
  )
}
