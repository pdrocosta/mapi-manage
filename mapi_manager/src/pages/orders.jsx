import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import OrdersFilters from "../components/orders/OrdersFilters";
import OrdersTable from "../components/orders/OrdersTable";
import OrdersSummary from "../components/orders/OrdersSummary";
import OrderModal from "../components/orders/OrderModal";
import { useOrder, loading } from "../providers/OrderProvider";
import { useAuth } from "../providers/AuthProvider";
import {
  PageWrapper,
  MainContent,
  PageHeader,
  PageTitleGroup,
  PageSubtitle,
  BackButton,
  ButtonPrimary,
  FadeUp,
} from "../styles/shared";

const Orders = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { orders, getOrders } = useOrder();

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (user?.companyId) {
      getOrders(user.companyId);
    }
  }, [user?.companyId]);

  const filtered = orders.filter(o => {
    const matchSearch =
      o.client.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toString().includes(search) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <PageWrapper>
      <Header />

      <MainContent>
        <FadeUp>
          <PageHeader>
            <PageTitleGroup>
              <BackButton onClick={() => navigate("/dashboard")}>
                ← Dashboard
              </BackButton>
              <h1>Pedidos</h1>
              <PageSubtitle>{filtered.length} pedidos encontrados</PageSubtitle>
            </PageTitleGroup>

            <ButtonPrimary onClick={() => navigate("/pedidos/novo")}>
              + Novo pedido
            </ButtonPrimary>
          </PageHeader>

          <OrdersFilters
            search={search}
            onSearch={setSearch}
            filterStatus={filterStatus}
            onFilterStatus={setFilterStatus}
          />
          {loading ? <p>Carregando...</p> : <OrdersTable orders={filtered} onView={setSelectedOrder} />}

          <OrdersSummary orders={orders} />
        </FadeUp>
      </MainContent>

      <OrderModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />

      <Footer />
    </PageWrapper>
  );
};

export default Orders;
