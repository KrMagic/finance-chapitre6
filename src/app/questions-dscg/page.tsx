'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { FileText, Calculator, Eye, EyeOff, Lightbulb, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

interface Exercise {
  id: number;
  title: string;
  statement: string;
  data: string[];
  questions: string[];
  solution: string[];
  methodology: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calcul du coupon couru",
    statement: "Une obligation a été émise le 15 mars N-1 avec les caractéristiques suivantes :",
    data: [
      "Valeur nominale : 1 000 €",
      "Taux nominal : 4% payé annuellement le 15 mars",
      "Date d'évaluation : 15 septembre N"
    ],
    questions: [
      "1. Calculer le coupon couru au 15 septembre N",
      "2. Si l'obligation cote 102%, quelle est la valeur totale à payer ?"
    ],
    solution: [
      "1. Calcul du coupon couru :",
      "   - Du 15 mars au 15 septembre = 184 jours",
      "   - Coupon couru = 4% × 1000 × (184 + 3) / 365",
      "   - Coupon couru = 40 × 187 / 365 = 20,49 €",
      "",
      "2. Valeur totale :",
      "   - Cotation : 102% × 1000 = 1020 €",
      "   - Coupon couru : 20,49 €",
      "   - Valeur totale = 1020 + 20,49 = 1040,49 €"
    ],
    methodology: [
      "Identifier la période écoulée depuis le dernier coupon",
      "Ajouter 3 jours ouvrés pour le délai de règlement",
      "Appliquer la formule : Taux × VN × jours / 365",
      "Additionner cotation et coupon couru"
    ]
  },
  {
    id: 2,
    title: "Évaluation d'une obligation",
    statement: "Évaluer une obligation au 1er janvier N+1 avec les données suivantes :",
    data: [
      "Valeur nominale : 100 000 €",
      "Taux facial : 3% annuel",
      "Remboursement au pair in fine dans 4 ans",
      "Taux du marché : 5%"
    ],
    questions: [
      "1. Calculer la valeur théorique de l'obligation",
      "2. L'obligation est-elle surévaluée ou sous-évaluée si elle cote 95% ?"
    ],
    solution: [
      "1. Valeur théorique :",
      "   - Coupons annuels : 3% × 100 000 = 3 000 €",
      "   - VA des coupons : 3000 × [(1-(1,05)^-4)/0,05] = 10 636 €",
      "   - VA du capital : 100 000 / (1,05)^4 = 82 270 €",
      "   - Valeur théorique = 10 636 + 82 270 = 92 906 €",
      "",
      "2. Comparaison :",
      "   - Cotation : 95% × 100 000 = 95 000 €",
      "   - L'obligation est surévaluée (95 000 > 92 906)"
    ],
    methodology: [
      "Calculer la valeur actuelle de tous les coupons futurs",
      "Calculer la valeur actuelle du remboursement",
      "Additionner les deux valeurs actuelles",
      "Comparer avec le prix de marché"
    ]
  },
  {
    id: 3,
    title: "Duration et sensibilité",
    statement: "Pour une obligation avec les caractéristiques suivantes :",
    data: [
      "Valeur nominale : 1 000 €",
      "Taux facial : 6% annuel",
      "Maturité : 3 ans",
      "Taux du marché : 4%"
    ],
    questions: [
      "1. Calculer la duration de l'obligation",
      "2. Calculer la sensibilité",
      "3. Quelle sera la variation de prix si le taux passe à 5% ?"
    ],
    solution: [
      "1. Calcul de la duration :",
      "   - Flux année 1 : 60 € actualisé à 57,69 €",
      "   - Flux année 2 : 60 € actualisé à 55,47 €",
      "   - Flux année 3 : 1060 € actualisé à 942,32 €",
      "   - Valeur totale : 1055,48 €",
      "   - Duration = (1×57,69 + 2×55,47 + 3×942,32) / 1055,48 = 2,83 ans",
      "",
      "2. Sensibilité :",
      "   - Sensibilité = -2,83 / (1 + 0,04) = -2,72",
      "",
      "3. Variation de prix :",
      "   - Variation = -2,72 × (5% - 4%) = -2,72%",
      "   - Nouveau prix ≈ 1055,48 × (1 - 0,0272) = 1026,78 €"
    ],
    methodology: [
      "Actualiser tous les flux futurs",
      "Pondérer chaque flux par sa période",
      "Diviser par la valeur totale de l'obligation",
      "Calculer la sensibilité avec la formule"
    ]
  },
  {
    id: 4,
    title: "Calcul du TRAB (Taux de Rendement Actuariel Brut)",
    statement: "Une obligation émise le 01/06/N présente les caractéristiques suivantes :",
    data: [
      "Valeur nominale : 100 €",
      "Taux nominal : 3%",
      "Remboursement in fine, échéance : 31/05/N+6",
      "Prix de remboursement : 110 €",
      "Cotation le 01/06/N+3 : 102%"
    ],
    questions: [
      "1. Calculer le TRAB le 01/06/N+3",
      "2. Pourquoi est-il différent du taux nominal ?"
    ],
    solution: [
      "1. Calcul du TRAB :",
      "   - Durée restante : 3 ans",
      "   - Coupons annuels : 3 €",
      "   - Prix d'achat : 102 €",
      "   - Prix de remboursement : 110 €",
      "   - Équation : 102 = 3/(1+t) + 3/(1+t)² + 113/(1+t)³",
      "   - TRAB ≈ 4,85%",
      "",
      "2. Différence avec le taux nominal :",
      "   - Le taux nominal (3%) ne tient compte que du coupon",
      "   - Le TRAB (4,85%) intègre la plus-value de remboursement",
      "   - Prime de remboursement : 110 - 100 = 10 €",
      "   - Cette prime augmente la rentabilité réelle"
    ],
    methodology: [
      "Identifier les flux futurs (coupons + remboursement)",
      "Poser l'équation d'équivalence actuarielle",
      "Résoudre par approximations successives ou calculatrice financière",
      "Comparer avec le taux nominal pour analyser l'écart"
    ]
  }
];

export default function QuestionsDSCG() {
  const [visibleSolutions, setVisibleSolutions] = useState<number[]>([]);
  const [visibleMethodology, setVisibleMethodology] = useState<number[]>([]);

  const toggleSolution = (exerciseId: number) => {
    setVisibleSolutions(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const toggleMethodology = (exerciseId: number) => {
    setVisibleMethodology(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-violet-600" />
            <h1 className="text-3xl font-bold text-gray-900">Cas pratiques</h1>
          </div>
          
          <div className="bg-violet-50 border-l-4 border-violet-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-violet-900 mb-2">Exercices pratiques</h2>
            <p className="text-violet-800">
              Exercices pratiques pour maîtriser les calculs d&apos;obligations. 
              Travaillez d&apos;abord sans regarder les solutions, puis vérifiez vos réponses.
            </p>
          </div>
          
          <div className="space-y-8">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="border rounded-xl p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Exercice {exercise.id} : {exercise.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-700 mb-3">{exercise.statement}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Données :</h4>
                    <ul className="text-blue-800 space-y-1">
                      {exercise.data.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-900 mb-2">Questions :</h4>
                    <div className="text-green-800 space-y-1">
                      {exercise.questions.map((question, index) => (
                        <p key={index}>{question}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mb-4">
                  <button
                    onClick={() => toggleMethodology(exercise.id)}
                    className="flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    <Lightbulb className="h-4 w-4" />
                    {visibleMethodology.includes(exercise.id) ? (
                      <><EyeOff className="h-4 w-4" /> Masquer méthodologie</>
                    ) : (
                      <><Eye className="h-4 w-4" /> Voir méthodologie</>
                    )}
                  </button>
                  
                  <button
                    onClick={() => toggleSolution(exercise.id)}
                    className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    <Calculator className="h-4 w-4" />
                    {visibleSolutions.includes(exercise.id) ? (
                      <><EyeOff className="h-4 w-4" /> Masquer solution</>
                    ) : (
                      <><Eye className="h-4 w-4" /> Voir solution</>
                    )}
                  </button>
                </div>
                
                {visibleMethodology.includes(exercise.id) && (
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Méthodologie :</h4>
                    <ol className="text-yellow-800 space-y-1">
                      {exercise.methodology.map((step, index) => (
                        <li key={index}>{index + 1}. {step}</li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {visibleSolutions.includes(exercise.id) && (
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-violet-900 mb-2">Solution détaillée :</h4>
                    <div className="text-violet-800 space-y-1 font-mono text-sm">
                      {exercise.solution.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Conseils pour l&apos;examen</h3>
            <ul className="text-green-800 space-y-2">
              <li>• <strong>Lisez attentivement</strong> l&apos;énoncé et identifiez les données clés</li>
              <li>• <strong>Structurez votre réponse</strong> en suivant l&apos;ordre des questions</li>
              <li>• <strong>Montrez vos calculs</strong> étape par étape</li>
              <li>• <strong>Vérifiez la cohérence</strong> de vos résultats</li>
              <li>• <strong>Gérez votre temps</strong> : ne restez pas bloqué sur une question</li>
            </ul>
          </div>
          
          <div className="flex justify-between items-center">
            <Link 
              href="/quiz" 
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au Quiz
            </Link>
            
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
            >
              <Home className="h-5 w-5" />
              Plan du cours
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}