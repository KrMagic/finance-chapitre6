import { Target, Rocket, BarChart3, TrendingUp, Users, Brain, FileText } from 'lucide-react';
import SectionBlock from './SectionBlock';

export default function CoursePlan() {
  const sections = [
    {
      title: "Introduction",
      description: "Concepts de base et définitions des obligations",
      href: "/introduction",
      icon: Rocket,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Section I - Marché Primaire",
      description: "Caractéristiques et émission des obligations",
      href: "/section-1",
      icon: BarChart3,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Section II - Marché Secondaire",
      description: "Cotation et évaluation des obligations",
      href: "/section-2",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Section III - Risques et Stratégies",
      description: "Duration, sensibilité et gestion des risques",
      href: "/section-3",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Quiz",
      description: "Évaluation interactive de vos connaissances",
      href: "/quiz",
      icon: Brain,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Cas pratiques",
      description: "Exercices pratiques et cas d application",
      href: "/questions-dscg",
      icon: FileText,
      color: "text-violet-600",
      bgColor: "bg-violet-100"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-0">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
          Suivez ce parcours structuré pour maîtriser la valeur des obligations
        </p>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <SectionBlock key={index} {...section} />
        ))}
      </div>
    </div>
  );
}