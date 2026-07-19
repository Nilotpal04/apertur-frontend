function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-[var(--bone-paper)] flex items-center justify-center">
      {children}
    </main>
  );
}

export default AuthLayout;