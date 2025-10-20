import React from "react";
import TextType from "../TextType";
import { Sparkles } from "lucide-react";

function Page1() {
  return (
    <div className="border flex justify-center items-center border-black bg-amber-300 h-screen w-full">
       <TextType
  text={['Zeenath Foundation 💫✨', "Join Us & Help Other To Make Our Nation Greater & Better.", "Carrers Opportunities. ","Strong & Well Core Volunters."]}
  typingSpeed={50}
  pauseDuration={2000}
  showCursor={true}
  cursorCharacter="|"
  cursorClassName="text-blue-400"
 className="text-5xl text-center md:text-6xl lg:text-9xl font-extrabold tracking-tight capitalize bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
/>
    </div>
  );
}

export default Page1;
