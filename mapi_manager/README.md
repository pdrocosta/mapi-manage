# Mapi Manager

Plataforma de gerenciamento de pedidos e clientes por empresa.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React + Vite |
| Estilização | Styled Components |
| Formulários | React Hook Form + Yup |
| Backend | Node.js + Express |
| Banco de dados | PostgreSQL |
| Autenticação | JWT + Bcrypt |

---

## Estrutura do projeto

```
mapi-manager/
├── client/                  # Frontend React
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── clients/
│   │   │   └── orders/
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── providers/       # Contextos React (Auth, Client, Order)
│   │   ├── routes/          # Rotas do React Router
│   │   ├── schemas/         # Validações Yup
│   │   └── styles/          # Styled Components e tema global
│   └── vite.config.js
│
├── server/                  # Backend Express
│   ├── controllers/         # Lógica de cada rota
│   ├── middleware/          # authMiddleware (JWT)
│   ├── routes/              # Routers Express
│   ├── db.js                # Pool de conexão PostgreSQL
│   ├── app.js               # Configuração do Express
│   └── server.js            # Ponto de entrada
│
├── .env                     # Variáveis de ambiente (não sobe pro git)
└── .gitignore
```

---

## Configuração local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/mapi-manager.git
cd mapi-manager
```

### 2. Instale as dependências

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta `server/`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mapi_manager
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_SSL=false

JWT_SECRET=sua_chave_secreta
PORT=3000
```

### 4. Rode o projeto

```bash
# Backend (pasta server/)
npm run dev

# Frontend (pasta client/)
npm run dev
```

Frontend disponível em `http://localhost:5173`
Backend disponível em `http://localhost:3000`

---

## Rotas da API

### Auth
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/api/auth/login` | Login do usuário | ✗ |
| GET | `/api/auth/me` | Dados do usuário logado | ✓ |

### Clientes
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/api/client?empresa=x` | Lista clientes da empresa | ✓ |
| GET | `/api/client/:id` | Busca cliente por ID | ✓ |
| POST | `/api/client` | Cria novo cliente | ✓ |
| PUT | `/api/client/:id` | Atualiza cliente | ✓ |
| DELETE | `/api/client/:id` | Remove cliente | ✓ |

### Pedidos
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/api/order?empresa=x` | Lista pedidos da empresa | ✓ |
| GET | `/api/order/:id` | Busca pedido por ID | ✓ |
| POST | `/api/order` | Cria novo pedido | ✓ |
| PUT | `/api/order/:id` | Atualiza pedido | ✓ |
| DELETE | `/api/order/:id` | Remove pedido | ✓ |

---

## Fluxo de autenticação

```
Login → JWT gerado → salvo no localStorage
     → enviado em toda requisição via Authorization: Bearer <token>
     → middleware valida o token antes de cada rota protegida
```

---

## Scripts disponíveis

```bash
npm run dev      # inicia em modo desenvolvimento (nodemon)
npm start        # inicia em produção
```
