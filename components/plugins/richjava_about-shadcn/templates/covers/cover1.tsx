import Image from 'next/image'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'

interface AboutHeroProps {
  content?: {
    data?: {
      heading?: string;
      blurb?: string;
      image?: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export default function AboutHero({ content }: AboutHeroProps) {
  const heading = content?.data?.heading || 'About Us'
  const blurb = content?.data?.blurb || 'Discover the power and flexibility of our components for building beautiful web applications.'
  const image = content?.data?.image

  return (
    <section id="cover1" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold">{heading}</h1>
          <p className="text-xl text-gray-600">{blurb}</p>
          {image && (
            <div className="mt-8">
              <Image
                src={image.url}
                width={widthForImage(image)}
                height={heightForImage(image)}
                alt={heading}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}