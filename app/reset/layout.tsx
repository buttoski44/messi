export default function ResetFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full flex justify-center items-center">
      {children}
    </main>
  );
}
