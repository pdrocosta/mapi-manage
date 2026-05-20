import Header from "../components/header";

const Dashboard = ({}) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <div>
                <h1>Mapi Manager</h1>
                <div>
                    <p>Bem vindo ao Mapi Manager</p>
                </div>
                <button>Logout</button>
                <button>Pedidos</button>
                <button>Aprovacoes</button>
                <button>Clientes</button>
            </div>
        </>
    )
}

export default Dashboard;
