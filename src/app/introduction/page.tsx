import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Introduction aux Obligations</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Définition</h3>
              <p className="text-blue-800">
                Une obligation est un titre de créance émise par une société privée, l&apos;État, ou une collectivité locale.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Double perspective des obligations</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Target className="h-6 w-6 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-2">Pour l&apos;entreprise</h3>
                <p className="text-green-800">
                  Un moyen de financement qui représente un coût pour celle-ci.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <Target className="h-6 w-6 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Pour l&apos;investisseur</h3>
                <p className="text-purple-800">
                  Un moyen de placement qui attend de la rentabilité en fonction du risque.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Le marché obligataire</h2>
            <p className="text-gray-700 mb-6">
              Les obligations s&apos;échangent sur le marché obligataire, permettant aux investisseurs d&apos;acheter et de vendre ces titres.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Types d&apos;obligations</h3>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>Obligations classiques</strong> : versement de coupons réguliers</li>
                <li>• <strong>Obligations convertibles (OCA)</strong> : convertibles en actions</li>
                <li>• <strong>Obligations remboursables (ORA)</strong> : remboursables en actions</li>
                <li>• <strong>OCEANE</strong> : convertibles en actions nouvelles ou existantes</li>
                <li>• <strong>Obligations à coupon zéro</strong> : pas de coupon, rémunération par prime de remboursement</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">🔍 Focus : Obligations à coupon zéro</h3>
              <div className="text-orange-800 space-y-3">
                <p>Les obligations à coupon zéro présentent des caractéristiques particulières :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Aucun versement de coupon</strong> pendant la durée de vie</li>
                  <li><strong>Émission en-dessous du pair</strong> (prix d&apos;émission &lt; valeur nominale)</li>
                  <li><strong>Remboursement au pair</strong> à l&apos;échéance</li>
                  <li><strong>Rémunération</strong> = différence entre prix de remboursement et prix d&apos;émission</li>
                </ul>
                <div className="bg-white p-4 rounded border-l-4 border-orange-400 mt-3">
                  <p><strong>Exemple :</strong></p>
                  <p>• Émission : 85 € • Remboursement : 100 € • Gain : 15 €</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900">Moyen mnémotechnique</h3>
              </div>
              <p className="text-yellow-800">
                <strong>OCEAN</strong> : <strong>O</strong>bligations <strong>C</strong>lassiques, <strong>E</strong>changes en <strong>A</strong>ctions, <strong>N</strong>ouvelles possibilités
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <div></div>
            <Link 
              href="/section-1" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Section I - Marché Primaire →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}