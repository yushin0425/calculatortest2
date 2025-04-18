'use client';

import Image from "next/image";
import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      <div className="flex items-center gap-8">
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/winter-outfit.png"
            alt="Winter outfit photo"
            fill
            className="object-cover hover:opacity-90 transition-opacity"
            priority
            style={{ objectPosition: 'center top' }}
          />
        </div>
        
        <div className="z-10">
          <Calculator />
        </div>
        
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/siblings.png"
            alt="Siblings photo"
            fill
            className="object-cover hover:opacity-90 transition-opacity"
            priority
            style={{ objectPosition: 'center top' }}
          />
        </div>
      </div>
    </main>
  );
}
