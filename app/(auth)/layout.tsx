import { Background_Image } from "@/constants/assets";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src={Background_Image}
          alt="Background Image"
          fill
          className="size-full"
        />
      </div>
      {children}
    </main>
  );
}
