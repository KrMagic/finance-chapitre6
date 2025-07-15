import BackToPlanButton from '@/components/content/BackToPlanButton';
import { TrendingUp, Calculator, Calendar, AlertTriangle, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Section II - Marché Secondaire</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Le marché secondaire</h3>
              <p className="text-purple-800">
                Une fois émises, les obligations sont cotées sur le marché secondaire. Ce marché permet la rencontre entre les investisseurs qui s&apos;échangent les obligations au prix du marché.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Caractéristiques de cotation</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Calculator className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Cotation</h3>
                <p className="text-blue-800">
                  Les obligations sont cotées en % du nominal et au pied du coupon (sans tenir compte des intérêts écoulés)
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-2">Coupon couru</h3>
                <p className="text-green-800">
                  Intérêts entre la date du dernier paiement du coupon et la date du jour + 3 jours ouvrés
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Calculs essentiels</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Coupon couru</h3>
                <div className="bg-white p-4 rounded border text-center mb-3">
                  <strong>Coupon couru = Taux facial × VN × (n + 3) / 365</strong>
                </div>
                <p className="text-yellow-800 text-sm">
                  n = nombre de jours depuis le dernier versement + 3 jours ouvrés de traitement
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Valeur totale</h3>
                <div className="bg-white p-4 rounded border text-center">
                  <strong>Valeur totale = (% cotation + % coupon couru) × VN</strong>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Exemple pratique détaillé</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">Calcul du coupon couru</h3>
              <div className="text-blue-800 space-y-3">
                <p><strong>Données :</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Obligation émise le 15/06/N-2</li>
                  <li>Valeur nominale : 1000 €</li>
                  <li>Taux nominal : 5% payé chaque 15/06</li>
                  <li>Cotation le 15/10/N : 105%</li>
                </ul>
                <p><strong>Questions :</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Déterminer le coupon couru le 15/10/N</li>
                  <li>Déterminer la valeur à décaisser pour un investisseur</li>
                </ol>
                <p><strong>Solutions :</strong></p>
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <p><strong>1. Coupon couru :</strong></p>
                  <p>• Du 15/06 au 15/10 = 122 jours</p>
                  <p>• Avec 3 jours ouvrés : 122 + 3 = 125 jours</p>
                  <p>• Coupon couru = 5% × 1000 × 125/365 = <strong>17,12 €</strong></p>
                  <p className="mt-2"><strong>2. Valeur totale :</strong></p>
                  <p>• Cotation : 105% × 1000 = 1050 €</p>
                  <p>• Coupon couru : 17,12 €</p>
                  <p>• <strong>Valeur totale = 1050 + 17,12 = 1067,12 €</strong></p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Évaluation d&apos;une obligation</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Principe fondamental</h3>
              <p className="text-blue-800 mb-3">
                La valeur d&apos;une obligation est égale à la somme des flux futurs attendus, actualisés au taux d&apos;intérêt du marché.
              </p>
              <div className="bg-white p-4 rounded border text-center">
                <strong>Valeur = Σ (Coupons actualisés) + Capital actualisé</strong>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-green-900 mb-3">📊 Exemple d&apos;évaluation</h3>
              <div className="text-green-800 space-y-3">
                <p><strong>Données :</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Valeur nominale : 100 000 €</li>
                  <li>Remboursement au pair in fine dans 3 ans</li>
                  <li>Taux facial : 2%</li>
                  <li>Taux du marché : 3%</li>
                </ul>
                <p><strong>Calcul de la valeur théorique :</strong></p>
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <p>• Coupons annuels : 2% × 100 000 = 2 000 €</p>
                  <p>• VA des coupons : 2000 × [(1-(1,03)^-3)/0,03] = 5 657 €</p>
                  <p>• VA du capital : 100 000 / (1,03)^3 = 91 514 €</p>
                  <p>• <strong>Valeur théorique = 5 657 + 91 514 = 97 171 €</strong></p>
                  <p className="mt-2 text-red-600">L&apos;obligation vaut moins que sa valeur nominale car le taux du marché (3%) est supérieur au taux facial (2%)</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Risque de taux</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-semibold text-red-900">Relation inverse</h3>
              </div>
              <p className="text-red-800">
                La valeur d&apos;une obligation varie en sens contraire de la variation du taux du marché.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Taux de Rendement Actuariel Brut (TRAB)</h2>
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-900 mb-3">📊 Exemple de calcul du TRAB à l&apos;émission</h3>
              <div className="text-purple-800 space-y-3">
                <p><strong>Données :</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Valeur nominale : 100 €</li>
                  <li>Émission en-dessous du pair : 98 €</li>
                  <li>Taux du coupon : 3%</li>
                  <li>Remboursement in fine dans 4 ans, au pair</li>
                </ul>
                <p><strong>Équation à résoudre :</strong></p>
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <p className="font-mono text-sm">98 = 3/(1+t) + 3/(1+t)² + 3/(1+t)³ + 103/(1+t)⁴</p>
                  <p className="mt-2"><strong>Solution : TRAB ≈ 3,60%</strong></p>
                  <p className="text-sm text-gray-600 mt-2">
                    Le TRAB (3,60%) est supérieur au taux facial (3%) car l&apos;obligation est émise en-dessous du pair
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Taux ↗</h3>
                <p className="text-red-800">
                  Si le taux du marché augmente → valeur de l&apos;obligation diminue
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Taux ↘</h3>
                <p className="text-green-800">
                  Si le taux du marché diminue → valeur de l&apos;obligation augmente
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900">Moyen mnémotechnique</h3>
              </div>
              <p className="text-yellow-800">
                <strong>INVERSE</strong> : Taux et prix d&apos;obligation évoluent toujours en sens <strong>INVERSE</strong>
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link 
              href="/section-1" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              ← Section I
            </Link>
            <Link 
              href="/section-3" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Section III - Risques et Stratégies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}