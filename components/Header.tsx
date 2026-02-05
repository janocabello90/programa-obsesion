import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white w-full py-4 px-4 md:px-8 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Image 
          src="/logo.png" 
          alt="ACTIVA Logo" 
          width={320} 
          height={128} 
          priority 
          className="h-28 md:h-32 w-auto"
        />
        <div className="flex gap-3">
          <a 
            href="#acceso" 
            className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Solicitar plaza
          </a>
          <a 
            href="#beca" 
            className="border border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            Aplicar a la beca
          </a>
        </div>
      </div>
    </header>
  )
}
