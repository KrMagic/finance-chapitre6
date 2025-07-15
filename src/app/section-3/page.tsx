import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Users, Shield, TrendingDown, TrendingUp, AlertTriangle, Lightbulb, Calculator, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Section III - Risques et Stratégies</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. La Duration</h2>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Définition</h3>
              <p className="text-indigo-800">
                La duration mesure la durée de vie moyenne d&apos;une obligation, pondérée par les flux de trésorerie actualisés.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">Formule de la duration</h3>
              <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                <p className="font-mono text-sm text-center">
                  Duration = Σ (i × Fi × (1+t)^-i) / Valeur de l&apos;obligation
                </p>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  où i = période, Fi = flux, t = taux du marché
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">📊 Exemple de calcul de duration</h3>
              <div className="text-blue-800 space-y-3">
                <p><strong>Obligation A :</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Valeur nominale : 1000 €</li>
                  <li>Taux nominal : 2%</li>
                  <li>Remboursement au pair dans 5 ans</li>
                  <li>Taux du marché : 2,5%</li>
                </ul>
                <div className="bg-white p-4 rounded border-l-4 border-blue-400 mt-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Année</th>
                          <th className="text-left p-2">Flux</th>
                          <th className="text-left p-2">Flux actualisé</th>
                          <th className="text-left p-2">Durée pondérée</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2">1</td><td className="p-2">20</td><td className="p-2">19,51</td><td className="p-2">19,51</td></tr>
                        <tr><td className="p-2">2</td><td className="p-2">20</td><td className="p-2">19,04</td><td className="p-2">38,07</td></tr>
                        <tr><td className="p-2">3</td><td className="p-2">20</td><td className="p-2">18,57</td><td className="p-2">55,72</td></tr>
                        <tr><td className="p-2">4</td><td className="p-2">20</td><td className="p-2">18,12</td><td className="p-2">72,48</td></tr>
                        <tr><td className="p-2">5</td><td className="p-2">1020</td><td className="p-2">901,53</td><td className="p-2">4507,66</td></tr>
                        <tr className="border-t font-bold"><td className="p-2">Total</td><td className="p-2">1100</td><td className="p-2">976,77</td><td className="p-2">4693,43</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3"><strong>Duration = 4693,43 / 976,77 = 4,80 années</strong></p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Facteurs influençant la duration</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Duration plus faible</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Maturité courte</li>
                  <li>• Taux de coupon élevé</li>
                  <li>• Taux du marché élevé</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Duration plus élevée</h4>
                <ul className="text-red-800 space-y-1">
                  <li>• Maturité longue</li>
                  <li>• Taux de coupon faible</li>
                  <li>• Taux du marché faible</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. La Sensibilité</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Calcul de la sensibilité</h3>
              <div className="bg-white p-4 rounded border text-center mb-3">
                <strong>Sensibilité = - Duration / (1 + taux du marché)</strong>
              </div>
              <p className="text-yellow-800">
                La sensibilité mesure la variation de la valeur de l&apos;obligation pour une variation de 1 point du taux du marché.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types de risques</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">Risque de taux</h3>
                </div>
                <p className="text-red-800">
                  Si le taux du marché progresse, la valeur de l&apos;obligation diminue.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-orange-900">Risque de liquidité</h3>
                </div>
                <p className="text-orange-800">
                  Si les acheteurs se font rares, difficultés à vendre sur le marché secondaire.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-900">Risque de défaut</h3>
                </div>
                <p className="text-purple-800">
                  Difficultés financières de l&apos;émetteur qui ne peut plus payer les intérêts ou rembourser.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Stratégies d&apos;investissement</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">Anticipation hausse des taux</h3>
                </div>
                <p className="text-red-800 mb-3">
                  Choisir des obligations à <strong>faible duration</strong> et sensibilité pour limiter les pertes.
                </p>
                <div className="bg-white p-3 rounded border">
                  <strong>Stratégie :</strong> Maturité courte, taux de coupon élevé
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Anticipation baisse des taux</h3>
                </div>
                <p className="text-green-800 mb-3">
                  Choisir des obligations à <strong>forte duration</strong> et sensibilité pour maximiser les gains.
                </p>
                <div className="bg-white p-3 rounded border">
                  <strong>Stratégie :</strong> Maturité longue, taux de coupon faible
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Profils d&apos;investisseurs</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Investisseur prudent</h3>
                <p className="text-blue-800">
                  Conserve ses obligations jusqu&apos;à l&apos;échéance. Court uniquement le risque de défaut de l&apos;émetteur.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Investisseur spéculatif</h3>
                <p className="text-purple-800">
                  Cède ses obligations avant l&apos;échéance pour réaliser des plus-values. Choisit selon ses anticipations sur les taux.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900">Moyens mnémotechniques</h3>
              </div>
              <div className="space-y-2 text-yellow-800">
                <p><strong>DURATION</strong> : Plus c&apos;est long, plus ça <strong>DURE</strong> (sensible aux taux)</p>
                <p><strong>STRATÉGIE</strong> : <strong>H</strong>ausse → <strong>C</strong>ourt, <strong>B</strong>aisse → <strong>L</strong>ong (HC-BL)</p>
                <p><strong>RISQUES</strong> : <strong>TLD</strong> - <strong>T</strong>aux, <strong>L</strong>iquidité, <strong>D</strong>éfaut</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link 
              href="/section-2" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              ← Section II
            </Link>
            <Link 
              href="/questions-dscg" 
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
            >
              <FileText className="h-5 w-5" />
              Cas pratiques
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}