export default function ResetFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full w-full flex justify-center items-center">
      {children}
    </section>
  );
}
