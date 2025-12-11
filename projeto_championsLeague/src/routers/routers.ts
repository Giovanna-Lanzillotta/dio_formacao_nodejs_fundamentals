// Gerenciador de rotas do proprio express
import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, UpdatePlayer } from "../controllers/players-controller";
import { getClubs } from "../controllers/clubs-controller";

const router = Router();

// rota para ver todos os jogadores 
router.get("/players",getPlayer);

//rota para ver od jogadores por id
router.get("/players/:id",getPlayerById);  //: é router param

// rota para deletar um jogador
router.delete("/players/:id", deletePlayer);

// rota para adicionar jogador
router.post("/players",postPlayer);

// rota para atualizar jogador
router.patch("/players/:id",UpdatePlayer);


//rota para listar os clubes
router.get("/clubs",getClubs);

export default router;