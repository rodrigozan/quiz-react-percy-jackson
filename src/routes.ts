import { Router } from "express";
import quizController from "./controllers/users.controller";

const router = Router();

router.post("/", quizController.createQuestion);
router.get("/", quizController.getQuestions);

export default router;
