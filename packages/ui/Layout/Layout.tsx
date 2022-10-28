export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto w-full h-full min-h-screen bg-slate-300">
        {children}
      </main>
    </>
  );
}
