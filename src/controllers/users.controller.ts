import { Request, Response } from "express";
import quizService from "../services/users.service";

class QuizController {
  async createQuestion(req: Request, res: Response) {
    try {
      const questionData = req.body;
      const question = await quizService.createQuestion(questionData);
      res.status(201).json(question);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  async getQuestions(req: Request, res: Response) {
    try {
      const questions = await quizService.getQuestions();
      res.status(200).json(questions);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new QuizController();
