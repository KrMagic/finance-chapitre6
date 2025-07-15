import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, Calculator, Calendar, Euro, TrendingUp, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Section I - Marché Primaire</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Le marché primaire</h3>
              <p className="text-green-800">
                L&apos;émission de l&apos;obligation se réalise sur le marché primaire qui permet la rencontre entre l&apos;emprunteur (l&apos;entreprise, l&apos;État...) et les investisseurs.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Caractéristiques principales</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Euro className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Valeur nominale</h3>
                <p className="text-blue-800">
                  Valeur faciale sur laquelle se calcule le coupon (les intérêts)
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <Calculator className="h-6 w-6 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Taux facial</h3>
                <p className="text-purple-800">
                  Taux nominal ou taux du coupon qui sert au calcul des intérêts
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Prix d&apos;émission</h3>
                <p className="text-orange-800">
                  Prix auquel l&apos;obligation est mise en vente. Peut être inférieur (en-dessous du pair) ou égal à la valeur nominale (au pair)
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <Calendar className="h-6 w-6 text-red-600 mb-3" />
                <h3 className="text-lg font-semibold text-red-900 mb-2">Date d&apos;échéance</h3>
                <p className="text-red-800">
                  Date à laquelle l&apos;emprunt est totalement remboursé
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Primes et remboursement</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Prime d&apos;émission</h3>
                <p className="text-yellow-800 mb-2">
                  Pour attirer les investisseurs, les obligations peuvent être émises en-dessous du pair.
                </p>
                <div className="bg-white p-3 rounded border">
                  <strong>Prime d&apos;émission = Valeur nominale - Prix d&apos;émission</strong>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Prime de remboursement</h3>
                <p className="text-indigo-800 mb-2">
                  Différence entre le prix de remboursement et la valeur nominale lorsque le remboursement se fait au-dessus du pair.
                </p>
                <div className="bg-white p-3 rounded border">
                  <strong>Prime de remboursement = Prix de remboursement - Valeur nominale</strong>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Modes d&apos;amortissement</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Remboursement in fine</h4>
                <p className="text-gray-700">Forme la plus répandue pour les emprunts obligataires. Remboursement total à l&apos;échéance.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Remboursement par tranches égales</h4>
                <p className="text-gray-700">Amortissement constant avec tirage au sort pour déterminer les obligations remboursées.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Remboursement par annuités constantes</h4>
                <p className="text-gray-700">Annuité arrondie pour correspondre à un nombre d&apos;obligations.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Le coupon</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Calcul du coupon</h3>
              <div className="bg-white p-4 rounded border text-center">
                <strong className="text-xl">Coupon annuel = Taux facial × Valeur nominale</strong>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types de taux</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Taux fixe</h4>
                <p className="text-green-800 text-sm">Intérêts déterminés de manière fixe. Représente plus de 3/4 des obligations émises.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Taux variable</h4>
                <p className="text-blue-800 text-sm">Indexé sur un taux du marché (ex: Euribor).</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Taux indexé</h4>
                <p className="text-purple-800 text-sm">Indexé sur un indice, prix, taux d&apos;inflation...</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">📊 Exemple pratique : Calcul des primes</h3>
              <div className="text-blue-800 space-y-3">
                <p><strong>Données :</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Valeur nominale : 100 €</li>
                  <li>Prix d&apos;émission : 98 € (émission en-dessous du pair)</li>
                  <li>Prix de remboursement : 110 € (remboursement au-dessus du pair)</li>
                </ul>
                <p><strong>Calculs :</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Prime d&apos;émission = 100 - 98 = <strong>2 €</strong></li>
                  <li>Prime de remboursement = 110 - 100 = <strong>10 €</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>VENTE</strong> : <strong>V</strong>aleur nominale, <strong>E</strong>mission, <strong>N</strong>ominal (taux), <strong>T</strong>emps (durée), <strong>E</strong>chéance
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900">Moyen mnémotechnique</h3>
              </div>
              <p className="text-yellow-800">
                <strong>FIV</strong> : <strong>F</strong>ixe (sécurité), <strong>I</strong>ndexé (inflation), <strong>V</strong>ariable (marché)
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link 
              href="/introduction" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              ← Introduction
            </Link>
            <Link 
              href="/section-2" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Section II - Marché Secondaire →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}