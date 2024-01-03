import { Image } from "@nextui-org/react";
import aboutImage from "../assets/Image/about.jpg";
import { useEffect, useState } from "react";
import { getAllAbout } from "../apis/getApi";

function About() {
  const [Data, setData] = useState();
  const getAbout = async () => {
    const res = await getAllAbout();
    const FindData = res?.data.find((obj) => obj.isActive === true);
    setData(FindData);
  };
  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center">
          <Image
            src={"http://localhost:8000/aboutContainImage/" + Data?.aboutImage}
            className="xl:h-[600px] "
          />
        </div>
        <div className="flex justify-center mt-10">
          <span className="text-4xl font-bold text-red-600">
            {Data?.aboutContainTitle}
          </span>
        </div>
        <div className=" mt-5 flex justify-center">
          <div className="xl:w-[1200px] p-3">
            <p>{Data?.aboutContain}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
