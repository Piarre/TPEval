import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import NavBar from "@/components/Nav/Navbar";
import Main from "@/components/Main";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Nav/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="absolute top-[-4rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#cdb4db]"></div>
      <div className="absolute top-[14rem] -z-10 right-[0rem] h-[40.25rem] w-[40rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#a2d2ff]"></div>
      <div className="absolute top-[0rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:rightF-[-5rem] bg-[#ffafcc]"></div>
      <div className="absolute top-[20rem] -z-10 right-[0rem] h-[40.25rem] w-[40rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] bg-[#8187dc]"></div>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <NavBar />
            <Main />

            {/* <Footer /> */}

            {/* <Toaster position="top-right" /> */}
            {/* <ThemeSwitch /> */}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
}
