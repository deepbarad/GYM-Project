import { Image } from "@nextui-org/react";
import aboutImage from "../assets/Image/about.jpg";

function About() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <Image src={aboutImage} className="xl:h-[600px] " />
        </div>
        <div className="flex justify-center mt-10">
          <span className="text-4xl font-bold text-red-600">About THE GYM</span>
        </div>
      </div>
    </>
  );
}

export default About;
