import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
const Dashboard = () => {
    const navigate = useNavigate();
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
                <div>
                <button onClick={() => { navigate("/pedidos"); }}>Pedidos</button>
                <button onClick={() => { navigate("/aprovacoes"); }}>Aprovacoes</button>
                <button onClick={() => { navigate("/clientes"); }}>Clientes</button>

                    </div>                
                    <button onClick={() => { navigate("/login"); }}>Logout</button>
                    <h4>
                        Mapi Manager é uma plataforma de gerenciamento de pedidos e aprovações para empresas. Com ele, você pode acompanhar o status dos seus pedidos, aprovar ou rejeitar solicitações e gerenciar seus clientes de forma eficiente.
                    </h4>
                    <h5>
                        Com uma interface intuitiva e fácil de usar, o Mapi Manager é a solução ideal para empresas que buscam otimizar seus processos de gerenciamento de pedidos e aprovações. Experimente agora e veja como o Mapi Manager pode ajudar a sua empresa a crescer!
                    </h5>
            </div>
             <Footer/>
        </>
       
    )
}

export default Dashboard;