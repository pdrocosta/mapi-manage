import { useNavigate } from "react-router";

const Header = () => {
    const  navigate = useNavigate();
    const logout = () =>{
        
localStorage.removeItem("userInfos");
        localStorage.removeItem("token")
        navigate("/login")

  return (
    <header>
        <h1>Mapi Manager</h1>
        <div>
            <button onClick=() => {logout}>Logout</button>
        </div>
    </header>
    )
}

export default Header;
