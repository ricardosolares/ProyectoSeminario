import { Router } from "express";
import { methods as languajeController } from "./../Controllers/lenguage.controller";

const router = Router();

router.get("/", languajeController.getUsuario );
router.get("/:id", languajeController.getUsuariobyId );
router.post("/", languajeController.addUsuario);
router.put("/:id", languajeController.putUsuario);

export default router;