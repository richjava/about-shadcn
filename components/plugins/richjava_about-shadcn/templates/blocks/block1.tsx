import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface AboutTeaserProps {
  content?: {
    data?: {
      heading?: string;
      blurb?: string;
    };
  };
}

export default function AboutTeaser({ content }: AboutTeaserProps) {
  const heading = content?.data?.heading || 'Why Choose ShadCN?'
  const blurb = content?.data?.blurb || 'ShadCN provides beautifully designed components that you can copy and paste into your apps. Accessible, customizable and open source.'

  return (
    <section id="block1" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">{heading}</h2>
          <p className="text-gray-600 mb-8 text-center">{blurb}</p>
          <div className="text-center">
            <Link 
              href="/about"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}