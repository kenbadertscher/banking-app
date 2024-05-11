import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="ml-24 my-24">
          <Image 
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={1000}
            height={1000}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}