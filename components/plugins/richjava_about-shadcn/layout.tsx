import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
  layoutComps?: any[];
  page?: any;
}

export default function Layout({ children, layoutComps = [], page }: LayoutProps) {
  if (!page) return null;

  return (
    <>
      {page &&
        layoutComps?.length > 0 &&
        layoutComps.map((Section: any, i: number) => {
          return (
            <div key={i}>
              <Section content={page.layout.sections[i].content} />
              {i === page.layout.contentIndex - 1 && (
                <main id="main">{children}</main>
              )}
            </div>
          );
        })}
    </>
  );
}