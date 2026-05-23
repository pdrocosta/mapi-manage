import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import ClientsFilters from "../components/clients/ClientsFilters";
import ClientsGrid from "../components/clients/ClientsGrid";
import ClientModal from "../components/clients/ClientModal";
import { useClient } from "../providers/ClientProvider";
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

const Clients = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { clients, getClients } = useClient();

  const [search, setSearch] = useState("");
  const [filterActive, setFilterActive] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    if (user?.companyId) {
      getClients(user.companyId);
    }
  }, [user?.companyId]);

  const filtered = clients.filter(c => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchActive =
      filterActive === "all" ||
      (filterActive === "active" && c.active) ||
      (filterActive === "inactive" && !c.active);
    return matchSearch && matchActive;
  });

  return (
    <PageWrapper>

      <MainContent>
        <FadeUp>
          <PageHeader>
            <PageTitleGroup>
              <BackButton onClick={() => navigate("/dashboard")}>
                ← Dashboard
              </BackButton>
              <h1>Clientes</h1>
              <PageSubtitle>{filtered.length} clientes encontrados</PageSubtitle>
            </PageTitleGroup>

            <ButtonPrimary onClick={() => navigate("/clientes/novo")}>
              + Novo cliente
            </ButtonPrimary>
          </PageHeader>

          <ClientsFilters
            search={search}
            onSearch={setSearch}
            filterActive={filterActive}
            onFilterActive={setFilterActive}
          />

          <ClientsGrid
            clients={filtered}
            onClientClick={setSelectedClient}
          />
        </FadeUp>
      </MainContent>

      <ClientModal
        client={selectedClient}
        onClose={() => setSelectedClient(null)}
      />

      <Footer />
    </PageWrapper>
  );
};

export default Clients;
