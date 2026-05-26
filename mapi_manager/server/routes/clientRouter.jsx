import { Router } from "express";
import {
  getClients,
  getClientById,
  newClient,
  updateClient,
  deleteClient,
} from "../controllers/clientsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const clientsRouter = Router();

clientsRouter.get("/",     authMiddleware, getClients);
clientsRouter.get("/:id",  authMiddleware, getClientById);
clientsRouter.post("/",    authMiddleware, newClient);
clientsRouter.put("/:id",  authMiddleware, updateClient);
clientsRouter.delete("/:id", authMiddleware, deleteClient);

export default clientsRouter;
