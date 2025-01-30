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
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">{heading}</h2>
          <p className="mb-8 text-center text-gray-600">{blurb}</p>
          <div className="text-center">
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 space-x-2 text-white transition-colors rounded-md bg-primary hover:bg-gray-800"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}