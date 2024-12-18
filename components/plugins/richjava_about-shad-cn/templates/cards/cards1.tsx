import Image from 'next/image'
import Link from 'next/link'
import { widthForImage, heightForImage, collectionSlug, entrySlug } from '@/lib/builtjs-utils'

interface Profile {
  title: string;
  excerpt: string;
  position: string;
  profileImage: {
    url: string;
    width: number;
    height: number;
  };
}

interface TeamMember {
  _type: string;
  slug: string;
  fullName: string;
  profile: Profile;
}

interface TeamSectionProps {
  content?: {
    data?: {
      heading?: string;
    };
    collections?: {
      teamMember?: TeamMember[];
    };
  };
}

export default function TeamSection({ content }: TeamSectionProps) {
  console.log({content})
  const heading = content?.data?.heading || 'Meet Our Team'
  const team = content?.collections?.teamMember || []

  return (
    <section id="cards1" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">{heading}</h2>
        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {team.map((member) => (
            <Link 
              key={member.slug} 
              href={`/${collectionSlug(member)}/${entrySlug(member)}`}
              className="block overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              {member.profile.profileImage && (
                <Image 
                  src={member.profile.profileImage.url}
                  width={widthForImage(member.profile.profileImage)}
                  height={heightForImage(member.profile.profileImage)}
                  alt={member.fullName}
                  className="object-cover w-full h-64"
                />
              )}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{member.fullName}</h3>
                <p className="mb-2 text-gray-600">{member.profile.position}</p>
                <p className="text-sm text-gray-500">{member.profile.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}