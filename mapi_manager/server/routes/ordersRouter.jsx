import { Router } from "express";
import {
  getOrders,
  getOrderById,
  newOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/ordersController.js";
import { authMiddleware } from "../../client/middleware/authMiddleware.js";
const ordersRouter = Router();

ordersRouter.get("/",      authMiddleware, getOrders);
ordersRouter.get("/:id",   authMiddleware, getOrderById);
ordersRouter.post("/",     authMiddleware, newOrder);
ordersRouter.put("/:id",   authMiddleware, updateOrder);
ordersRouter.delete("/:id", authMiddleware, deleteOrder);

export default ordersRouter;
