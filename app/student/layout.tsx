import Navigation from "./navigation";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full p-4 bg-bla pattern1 relative md:px-20 lg:px-40">
      {/* <Navigation /> */}
      {children}
    </main>
  );
}
