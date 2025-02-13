
import { useLocation, useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Share2, Hospital, Pill } from "lucide-react";
import { getResult } from "../data/questions";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const result = getResult(score);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: '면역력 점수 결과',
        text: `나의 면역력 점수는 ${score}점! 🏥\n\n${result.grade}\n${result.description}`,
        url: window.location.href
      });
    } catch (error) {
      console.log('공유하기가 지원되지 않는 환경입니다.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light p-6">
      <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-neutral-dark hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            처음으로
          </button>
          <button
            onClick={handleShare}
            className="flex items-center bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition-colors"
          >
            <Share2 className="w-5 h-5 mr-2" />
            공유하기
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 animate-slideUp">
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-3xl font-bold text-neutral-dark">
              면역력 점수 결과
            </h1>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 bg-primary-light text-primary rounded-full text-sm">
              {result.grade}
            </div>
            <div className="text-5xl font-bold text-primary">
              {score}점
            </div>
            <p className="text-xl text-neutral-dark">
              {result.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-dark">
              개선 추천사항
            </h2>
            <ul className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-neutral-dark"
                >
                  <span className="inline-block w-6 h-6 bg-primary-light text-primary rounded-full flex-shrink-0 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

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
};

export default Result;
