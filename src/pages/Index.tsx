import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowRight, Hospital, Pill } from "lucide-react";
import { questions } from "../data/questions";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto space-y-8 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 text-center space-y-6">
            <div className="flex justify-center">
              <Shield className="w-20 h-20 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-blue-900">
              당신의 면역력 점수는?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              간단한 질문으로 알아보는<br />
              나의 실제 건강나이와 면역력 상태
            </p>
            <button
              onClick={handleStart}
              className="w-full py-5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg shadow-md"
            >
              <span>면역력 측정하기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a
                href="https://pcy.daily4senior.com/172"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center space-x-2 p-4 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors border border-orange-200 whitespace-nowrap"
              >
                <Hospital className="w-5 h-5 flex-shrink-0" />
                <span>우리동네병원비교</span>
              </a>
              
              <a
                href="https://agewell.tistory.com/308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center space-x-2 p-4 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-colors border border-purple-200 whitespace-nowrap"
              >
                <Pill className="w-5 h-5 flex-shrink-0" />
                <span>겨울철 영양제 정보</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 space-y-6">
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-lg rounded-full font-medium">
              질문 {currentQuestion + 1}/{questions.length}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.score)}
                className="w-full p-5 text-left border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors text-lg font-medium text-gray-700"
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
