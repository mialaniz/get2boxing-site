import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/boxing-4.png" alt="Get2Boxing Logo" width={150} height={100} />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-secondary transition-colors text-blue-600">Home</Link></li>
              <li><Link href="/store" className="hover:text-secondary transition-colors text-blue-600">Store</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
