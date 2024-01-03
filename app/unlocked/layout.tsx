import { Open_Sans } from "next/font/google";
import FooterComponent from "../components/Footer";
import { MusicProvider } from "../context/Context";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MusicProvider>
        <div className={openSans.className}>
          <main>{children}</main>
          <FooterComponent />
        </div>
      </MusicProvider>
    </>
  );
}
