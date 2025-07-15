'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une obligation ?",
    options: [
      "Un titre de propriété d'une entreprise",
      "Un titre de créance émis par une société, l'État ou une collectivité",
      "Un contrat d'assurance",
      "Un produit dérivé"
    ],
    correct: 1,
    explanation: "Une obligation est un titre de créance qui représente un prêt accordé à l'émetteur."
  },
  {
    id: 2,
    question: "Comment calcule-t-on le coupon annuel d'une obligation ?",
    options: [
      "Taux facial × Prix d'émission",
      "Taux facial × Valeur nominale",
      "Taux du marché × Valeur nominale",
      "Prix de remboursement × Taux facial"
    ],
    correct: 1,
    explanation: "Le coupon annuel = Taux facial × Valeur nominale de l'obligation."
  },
  {
    id: 3,
    question: "Que se passe-t-il quand le taux du marché augmente ?",
    options: [
      "La valeur de l'obligation augmente",
      "La valeur de l'obligation diminue",
      "La valeur de l'obligation reste stable",
      "Le coupon augmente"
    ],
    correct: 1,
    explanation: "Il existe une relation inverse entre le taux du marché et la valeur de l'obligation."
  },
  {
    id: 4,
    question: "Qu'est-ce que la duration d'une obligation ?",
    options: [
      "La durée jusqu'à l'échéance",
      "La durée de vie moyenne pondérée par les flux actualisés",
      "Le nombre de coupons restants",
      "La période de souscription"
    ],
    correct: 1,
    explanation: "La duration mesure la durée de vie moyenne d'une obligation, pondérée par les flux de trésorerie actualisés."
  },
  {
    id: 5,
    question: "Si un investisseur anticipe une hausse des taux, quelle stratégie doit-il adopter ?",
    options: [
      "Choisir des obligations à forte duration",
      "Choisir des obligations à faible duration",
      "Augmenter le montant investi",
      "Attendre la baisse des taux"
    ],
    correct: 1,
    explanation: "Pour limiter les pertes lors d'une hausse des taux, il faut choisir des obligations peu sensibles (faible duration)."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const finalScore = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez bien le sujet.';
    if (percentage >= 60) return 'Bien ! Quelques révisions seraient bénéfiques.';
    return 'Il serait bon de revoir le cours avant de continuer.';
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Brain className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Résultats du Quiz</h1>
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-700 mb-6">{getScoreMessage()}</p>
            </div>
            
            <div className="space-y-6 mb-8">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <div key={question.id} className="border rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600 mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        <p className="text-gray-700 mb-2">
                          <strong>Votre réponse:</strong> {question.options[userAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-gray-700 mb-2">
                            <strong>Bonne réponse:</strong> {question.options[question.correct]}
                          </p>
                        )}
                        <p className="text-gray-600 text-sm">
                          <strong>Explication:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              
              <Link 
                href="/questions-dscg" 
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Cas pratiques →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-8 w-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Quiz - Valeur des Obligations</h1>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}