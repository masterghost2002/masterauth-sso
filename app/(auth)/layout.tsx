
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
    className="h-screen flex flex-col items-center justify-center gap-5"
  >
    <h1
      className="text-3xl font-bold"
    >
      Master- 
      <span
        className="text-blue-500"
      >
        Auth
      </span>
    </h1>
    {children}
  </div>
  )
}
