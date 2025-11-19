// Gerenciador de rotas do proprio express
import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer } from "../controllers/players-controller";

const router = Router();

router.get("/players",getPlayer);
router.get("/players/:id",getPlayerById);  //: é router param

router.post("/players",postPlayer);

export default router;