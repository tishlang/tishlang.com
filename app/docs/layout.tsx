import { getAllDocs } from "@/lib/docs";
import { getExampleNavItems } from "@/lib/docs-examples";
import { Sidebar } from "@/components/docs/sidebar";
import { Navbar } from "@/components/landing/navbar";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allDocs = await getAllDocs();
  const exampleNav = getExampleNavItems();

  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-5xl gap-8 px-6 pt-[73px] pb-16">
        <aside className="hidden w-52 shrink-0 py-8 lg:block">
          <div className="sticky top-[89px] max-h-[calc(100vh-89px)] overflow-y-auto pr-2 scrollbar-thin">
            <Sidebar allDocs={allDocs} exampleNav={exampleNav} />
          </div>
        </aside>
        <main className="min-w-0 flex-1 py-8">{children}</main>
      </div>
    </>
  );
}
