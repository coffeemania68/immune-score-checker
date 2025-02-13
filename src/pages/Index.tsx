
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { questions } from "../data/questions";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const navigate = useNavigate();
  const isQuizStarted = currentQuestion > -1;
  
  const handleStart = () => setCurrentQuestion(0);
  
  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(prev => prev + 1);
    } else {
      const totalScore = Math.floor(
        (newAnswers.reduce((a, b) => a + b, 0) / (questions.length * 10)) * 100
      );
      navigate("/result", { state: { score: totalScore } });
    }
  };

  if (!isQuizStarted) {
    return (
      <div className="min-h-screen bg-neutral-light p-6 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto space-y-8 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-6">
            <div className="flex justify-center">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-neutral-dark">
              당신의 면역력 점수는?
            </h1>
            <p className="text-neutral">
              12개의 간단한 질문으로 알아보는 나의 면역력 상태
            </p>
            <button
              onClick={handleStart}
              className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
            >
              <span>시작하기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-neutral-light p-6">
      <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
          <div className="w-full bg-neutral-light rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-primary-light text-primary text-sm rounded-full">
              질문 {currentQuestion + 1}/{questions.length}
            </div>
            <h2 className="text-2xl font-bold text-neutral-dark">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.score)}
                className="w-full p-4 text-left border-2 border-neutral-light rounded-xl hover:border-primary hover:bg-primary-light/10 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
