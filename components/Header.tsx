import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white w-full py-4 px-4 md:px-8 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Image 
          src="/logo-activa.png" 
          alt="ACTIVA Logo" 
          width={320} 
          height={128} 
          priority 
          className="h-14 md:h-16 w-auto"
        />
      </div>
    </header>
  )
}
