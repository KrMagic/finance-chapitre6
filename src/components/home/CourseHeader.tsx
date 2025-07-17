import { TrendingUp, Clock, BookOpen, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="bg-white/20 p-3 sm:p-4 rounded-xl mx-auto sm:mx-0">
          <TrendingUp className="h-8 w-8 sm:h-10 md:h-12 sm:w-10 md:w-12 text-white" />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Valeur des Obligations
          </h1>
          <p className="text-blue-100 text-base sm:text-lg mb-4">
            Maîtrisez l&apos;évaluation et la gestion des obligations sur les marchés financiers
          </p>
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            <div className="bg-white/20 px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 sm:gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Expert</span>
            </div>
            <div className="bg-white/20 px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 sm:gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">4h 15min</span>
            </div>
            <div className="bg-white/20 px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 sm:gap-2">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}