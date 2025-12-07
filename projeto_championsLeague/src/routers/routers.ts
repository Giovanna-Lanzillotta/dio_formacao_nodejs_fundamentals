// Gerenciador de rotas do proprio express
import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer } from "../controllers/players-controller";

const router = Router();

// rota para ver todos os jogadores 
router.get("/players",getPlayer);

//rota para ver od jogadores por id
router.get("/players/:id",getPlayerById);  //: é router param

// rota para deletar um jogador
router.delete("/players/:id", deletePlayer);

// rota para adicionar jogador
router.post("/players",postPlayer);

export default router;