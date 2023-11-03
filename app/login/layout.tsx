export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full w-full flex justify-center items-center pattern2">
      {children}
    </section>
  );
}
