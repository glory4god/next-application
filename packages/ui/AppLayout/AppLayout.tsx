export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto max-w-xl min-h-screen p-8 bg-slate-100">
        {children}
      </main>
    </>
  );
}
