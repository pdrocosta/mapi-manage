import { AuthProvider } from "./authProvider";
import { ClientProvider } from "./clientProvider";
import { OrderProvider } from "./orderProvider";

const Providers = ({ children }) => (
  <AuthProvider>
    <ClientProvider>
      <OrderProvider>
        {children}
      </OrderProvider>
    </ClientProvider>
  </AuthProvider>
);

export default Providers;
