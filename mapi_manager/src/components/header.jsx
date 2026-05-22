import logout from "./providers"

const Header = () => {

    const logoutAction = logout()
    return (
        <header>
            <h1>Mapi Manager</h1>
            <div>
                <button onClick={logoutAction}>Logout</button>
            </div>
        </header>
    );
};

export default Header;
