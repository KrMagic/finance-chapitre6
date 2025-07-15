import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export default function SectionBlock({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  color, 
  bgColor 
}: SectionBlockProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`${bgColor} p-3 rounded-full`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        
        <Link
          href={href}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Commencer
        </Link>
      </div>
    </div>
  );
}