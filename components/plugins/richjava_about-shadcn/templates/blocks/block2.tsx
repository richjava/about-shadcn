import { Check } from 'lucide-react'

interface Feature {
  title: string;
  description: string;
}

interface AboutContentProps {
  content?: {
    data?: {
      heading?: string;
      mission?: string;
      featuresHeading?: string;
    };
    collections?: {
      features?: Feature[];
    };
  };
}

export default function AboutContent({ content }: AboutContentProps) {
  const heading = content?.data?.heading || 'Our Mission'
  const mission = content?.data?.mission || 'Our business is built on the belief that beautiful, accessible, and performant web applications should be easy to create. We provide a collection of reusable components that you can copy and paste into your apps, eliminating the complexity of building UI components from scratch while maintaining full control over your codebase.'
  const featuresHeading = content?.data?.featuresHeading || 'Key Features'
  
  const features = content?.collections?.features || [
    {
      title: "Zero-Install Components",
      description: "Simply copy and paste beautifully designed components directly into your project. No package installation or complex setup required."
    },
    {
      title: "Accessibility First",
      description: "Every component follows WAI-ARIA guidelines and includes keyboard navigation, focus management, and proper ARIA attributes."
    },
    {
      title: "Infinite Customization",
      description: "Built on Radix UI primitives and styled with Tailwind CSS, allowing for complete control over styling and behavior."
    },
    {
      title: "Dark Mode Ready",
      description: "Seamlessly switch between light and dark themes with our pre-configured color schemes and CSS variables."
    },
    {
      title: "TypeScript Powered",
      description: "Fully typed components for better developer experience and catch errors before they reach production."
    },
    {
      title: "Open Source Freedom",
      description: "MIT licensed and free to use in personal and commercial projects, with an active community of contributors."
    }
  ]

  return (
    <section  id="block2" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 prose prose-lg">
            <h2 className="mb-6 text-3xl font-bold">{heading}</h2>
            <p className="text-lg leading-relaxed text-gray-600">{mission}</p>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-center">{featuresHeading}</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="p-6 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">{feature.title}</h4>
                      <p className="leading-relaxed text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}