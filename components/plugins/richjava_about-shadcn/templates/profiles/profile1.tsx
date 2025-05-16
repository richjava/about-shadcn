import Head from "next/head";
import Image from 'next/image'
import { PortableText } from "@portabletext/react"
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'

interface TeamMemberProfileProps {
  content?: {
    entry?: {
      fullName?: string;
      profile?: {
        title?: string;
        position?: string;
        bio?: string;
        profileImage?: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

export default function TeamMemberProfileArticle({ content }: TeamMemberProfileProps) {
  if (!content) return <></>;
  const { entry: member = null } = { ...content };
  if (!member) return <></>;
  

  return (
    <>
      <Head>
        {member && (
          <>
            <title>{member.fullName} | Team Member | About ShadCN Built.js Plugin</title>
            <meta property="og:title" content={member.fullName} />
            <meta name="twitter:title" content={member.fullName} />
          </>
        )}
        {member && member.profile?.profileImage?.url && (
          <>
            <meta property="og:image" content={member.profile.profileImage.url} />
            <meta name="twitter:image" content={member.profile.profileImage.url} />
            <meta name="image" content={member.profile.profileImage.url} />
          </>
        )}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <section id="profile1" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12">
            <div>
              {member.profile?.profileImage && (
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={member.profile.profileImage.url}
                    width={widthForImage(member.profile.profileImage)}
                    height={heightForImage(member.profile.profileImage)}
                    alt={member.fullName || ''}
                    className="w-full"
                  />
                </div>
              )}
            </div>
            <div>
              <h1 className="mb-2 text-4xl font-bold">{member.fullName}</h1>
              <p className="mb-6 text-xl text-gray-600">{member.profile?.position}</p>
              <div className="prose prose-lg">
              {typeof member.profile?.bio === "string" ? (
                  <p>{member.profile.bio}</p>
                ) : (
                  member.profile?.bio && <PortableText value={member.profile?.bio} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}