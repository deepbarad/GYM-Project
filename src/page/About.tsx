import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getAllAbout } from "../apis/getApi";

function About() {
  const [Data, setData] = useState<any>();
  const getAbout = async () => {
    const res = await getAllAbout();
    const FindData = res?.data.find((obj: any) => obj.isActive === true);
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
            src={
              import.meta.env.VITE_SERVER_URL +
              "/aboutContainImage/" +
              Data?.aboutImage
            }
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
