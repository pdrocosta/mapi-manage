import express from "express";
import authRouter    from "./routes/authRouter.js";
import clientsRouter from "./routes/clientsRouter.js";
import ordersRouter  from "./routes/ordersRouter.js";

const app = express();

app.use(express.json());

app.use("/api/auth",   authRouter);
app.use("/api/client", clientsRouter);
app.use("/api/order",  ordersRouter);

export default app;
