import QuizQuestion, { IQuizQuestion } from "../models/users.model";

class QuizService {
  async createQuestion(questionData: IQuizQuestion): Promise<IQuizQuestion> {
    return QuizQuestion.create(questionData);
  }

  async getQuestions(): Promise<IQuizQuestion[]> {
    return QuizQuestion.find().exec();
  }
}

export default new QuizService();
