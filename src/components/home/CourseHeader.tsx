import { TrendingUp, Clock, BookOpen, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl mb-8">
      <div className="flex items-start gap-6">
        <div className="bg-white/20 p-4 rounded-xl">
          <TrendingUp className="h-12 w-12 text-white" />
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            Valeur des Obligations
          </h1>
          <p className="text-blue-100 text-lg mb-4">
            Maîtrisez l&apos;évaluation et la gestion des obligations sur les marchés financiers
          </p>
          
          <div className="flex flex-wrap gap-3">
            <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Expert</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">4h 15min</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}