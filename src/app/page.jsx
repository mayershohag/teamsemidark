import HeroSection from "@/sections/heroSection";
import TextAnimation from "@/components/react-bits/text";
import Cursor from "@/components/react-bits/cursor";
export default function Home() {
     return (
          <main>
               <HeroSection />
               <div className="bg-black">
                    <TextAnimation />
               </div>
               <Cursor />
          </main>
     );
}
