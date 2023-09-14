import mongoose, { Schema, Document } from "mongoose";

export interface IQuizQuestion extends Document {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

const QuizSchema: Schema = new Schema({
  question: String,
  answers: [String],
  correctAnswerIndex: Number,
});

export default mongoose.model<IQuizQuestion>("QuizQuestion", QuizSchema);
