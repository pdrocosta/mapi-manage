import { useNavigate } from "react-router";

const Header = () => {
    const  navigate = useNavigate();
  return (
    <header>
        <h1>Mapi Manager</h1>
        <div>
            <button onClick={navigate("/login")}>Logout</button>
        </div>
    </header>
    )
}

export default Header;