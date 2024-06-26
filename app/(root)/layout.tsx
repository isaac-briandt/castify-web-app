import LeftSideBar from "@/components/LeftSideBar";
import MobileNav from "@/components/MobileNav";
import RightSideBar from "@/components/RightSideBar";
import { Logo } from "@/constants/assets";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSideBar />

        <section className="flex flex-col px-4 sm:px-14 flex-1">
          <div className="mx-auto w-full max-w-5xl flex flex-col max-sm:px-4">
            <div className="flex h-16 justify-between md:hidden">
              <Image src={Logo} alt="logo" width={30} height={30} />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              Toaster
              {children}
            </div>
          </div>
        </section>

        <RightSideBar />
      </main>
    </div>
  );
}
