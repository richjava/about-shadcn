import Link from 'next/link'
import Image from 'next/image'
import { FileText } from 'lucide-react'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'

interface HeaderProps {
  content?: {
    global?: {
      name?: string;
      logo?: {
        url: string;
        width: number;
        height: number;
      };
    };
    collections?: {
      primaryMenuItems?: Array<{
        label: string;
        url: string;
      }>;
    };
  };
}

export default function Header({ content }: HeaderProps) {
  const siteName = content?.global?.name || 'About Us'
  const logo = content?.global?.logo
  const menuItems = content?.collections?.primaryMenuItems || [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' }
  ]

  return (
    <header  id="header1" className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {logo ? (
            <Image
              src={logo.url}
              width={widthForImage(logo)}
              height={heightForImage(logo)}
              alt={siteName}
            />
          ) : (
            <FileText className="h-6 w-6" />
          )}
          <span className="font-bold text-xl">{siteName}</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.url}>
                <Link 
                  href={item.url} 
                  className="hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}