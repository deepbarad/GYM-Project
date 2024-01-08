import { Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";
import Image01 from "../assets/Image/01-Image.avif";
import Image02 from "../assets/Image/weight lifting.jpg";
import Image03 from "../assets/Image/03-cardio.webp";
import bgImage from "../assets/Image/bg-image.jpg";
import HomeCard from "../components/HomeCard";
import WeekTable from "../components/table";
import {
  FriColumn,
  MonColumn,
  SatColumn,
  ThuColumn,
  TueColumn,
  WedColumn,
} from "../components/tableObject";
import {
  getAllHomeContain,
  getAllJoinTable,
  getAllTrainers,
} from "../apis/getApi";
import { useEffect, useState } from "react";
import CarouselBanner from "../utils/carousel";

const Home = () => {
  const [Data, setData] = useState<any>();
  const [ImageData, setImageData] = useState<any>();
  const [tableData, setTableData] = useState<any>();

  const tabs = [
    {
      id: "monday",
      label: "Monday",
      content: <WeekTable column={MonColumn} data={tableData} />,
    },
    {
      id: "tuesday",
      label: "Tuesday",
      content: <WeekTable column={TueColumn} data={tableData} />,
    },
    {
      id: "wednesday",
      label: "WednesDay",
      content: <WeekTable column={WedColumn} data={tableData} />,
    },
    {
      id: "thursday",
      label: "Thursday",
      content: <WeekTable column={ThuColumn} data={tableData} />,
    },
    {
      id: "friday",
      label: "Friday",
      content: <WeekTable column={FriColumn} data={tableData} />,
    },
    {
      id: "saturday",
      label: "Saturday",
      content: <WeekTable column={SatColumn} data={tableData} />,
    },
  ];

  const getHomeContain = async () => {
    const res = await getAllHomeContain();
    res?.data?.map((item: any) => {
      setData(item);
    });
  };
  const getTrainers = async () => {
    const res = await getAllTrainers();
    setImageData(res?.data);
  };

  const getJoinTable = async (day: any) => {
    const res = await getAllJoinTable(day);
    setTableData(res?.data);
  };

  useEffect(() => {
    getHomeContain();
    getTrainers();
  }, []);

  return (
    <>
      {/*-- carousel-- */}
      <div>
        <CarouselBanner />
      </div>
      <div
        className="absolute 2xl:mt-[500px] xl:block xl:w-44 xl:mt-[800px]  2xl:w-64 hidden 2xl:block "
        style={{ transform: "rotate(270deg)" }}
      >
        <span className="xl:text-[150px] 2xl:text-[200px] text-red-700 font-bold">
          FITNESS
        </span>
      </div>

      <section>
        <div className="flex justify-center ">
          <Card className="bg-transparent w-unit-9xl shadow-none">
            <CardBody className="text-center">
              <h5
                className="text-3xl font-bold"
                style={{ fontFamily: "initial" }}
              >
                {Data?.bannerContainTitle}
              </h5>
              <p className="font-bold text-md text-gray-500">
                {Data?.bannerContain}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* --01-- */}
      <HomeCard
        img={Image01}
        contain={Data?.firstContain}
        no="01"
        title={Data?.firstContainTitle}
        imgOrder="order-2"
        noOrder="order-1"
        noText="text-end"
        noClass="text-red-600 text-7xl font-semibold top-[0px] z-10 right-3 absolute lg:relative lg:text-9xl lg:font-normal 2xl:text-9xl 2xl:relative 2xl:font-normal 2xl:top-0 "
        h5DivClass="mt-5 text-center 2xl:text-start flex-row justify-center 2xl:w-[800px] lg:text-start lg:w-unit-8xl"
        BtnClass="flex justify-center 2xl:justify-start"
        imgClass="2xl:h-[500px] 2xl:w-[350px] lg:h-[580px] lg:w-[400px] object-cover"
      />

      {/* --02-- */}
      <HomeCard
        img={Image02}
        no="02"
        contain={Data?.secondContain}
        title={Data?.secondContainTitle}
        imgOrder="order-1"
        noOrder="order-2"
        noText="text-start"
        noClass="text-red-600 text-7xl font-semibold top-[0px] z-10 left-3 absolute lg:font-normal lg:text-9xl lg:relative 2xl:text-9xl 2xl:relative 2xl:font-normal 2xl:top-0 "
        h5DivClass="mt-5 text-center 2xl:ml-4 lg:ml-4 lg:text-start 2xl:text-start flex-row justify-center 2xl:w-unit-9xl lg:w-unit-8xl"
        BtnClass="flex justify-center 2xl:justify-start 2xl:ml-4"
        imgClass="2xl:h-[500px] 2xl:w-[350px] md:w-[900px] object-cover lg:w-[400px] lg:h-[580px]"
      />

      {/* --03-- */}
      <HomeCard
        img={Image03}
        no="03"
        contain={Data?.thirdContain}
        title={Data?.thirdContainTitle}
        imgOrder="order-2"
        noOrder="order-1"
        noText="text-end"
        noClass="text-red-600 text-7xl font-semibold top-[0px] z-10 right-3 absolute lg:relative lg:text-9xl lg:font-normal 2xl:text-9xl 2xl:relative 2xl:font-normal 2xl:top-0 "
        h5DivClass="mt-5 text-center 2xl:text-start flex-row justify-center 2xl:w-unit-9xl lg:text-start lg:w-unit-8xl"
        BtnClass="flex justify-center 2xl:justify-start"
        imgClass="2xl:h-[500px] 2xl:w-[350px] md:w-[900px] object-cover lg:w-[400px] lg:h-[580px]"
      />
      <div
        className="2xl:w-60 absolute 2xl:ml-[1550px] 2xl:mt-[-280px] xl:mt-[-550px] hidden 2xl:block xl:block xl:w-52 xl:ml-[1070px]"
        style={{ transform: "rotate(270deg)" }}
      >
        <span className="2xl:text-[200px] xl:text-[150px] text-red-700 font-bold">
          FITNESS
        </span>
      </div>

      <section>
        <div className="flex justify-center">
          <Image
            src={bgImage}
            radius="none"
            alt="bgImage"
            className="hidden object-cover blur-sm brightness-50 2xl:w-[1550px] xl:h-[780px] lg:h-[800px] 2xl:h-[780px] 2xl:block xl:block lg:block "
          />
        </div>
        <div className="flex justify-center mt-[50px] 2xl:mt-[-720px] xl:mt-[-750px] lg:mt-[-730px]">
          <div className="text-5xl absolute z-10 -mt-8 font-bold text-center">
            <span>OUR TRAINERS</span>
          </div>
          <div className="gap-4 mt-10 grid 2xl:grid-cols-3 lg:grid-cols-3 lg:w-[60%] xl:grid-cols-3 sm:grid-cols-2 2xl:w-[35%] xl:w-[45%] sm:w-[70%] md:w-[80%]">
            {ImageData?.map((item: any, index: any) => {
              return (
                <Card shadow="sm" key={index}>
                  <CardBody className="overflow-visible p-0 ">
                    <div className="flex justify-center">
                      <Image
                        shadow="sm"
                        radius="none"
                        alt={item.trainerName}
                        className="w-full object-cover h-[250px]"
                        src={
                          import.meta.env.VITE_SERVER_URL +
                          "/trainersImage/" +
                          item?.trainersImage
                        }
                      />
                    </div>
                    <div className=" z-10 p-2 top-60 text-center font-extrabold text-white bg-black">
                      <span>{item.trainerName}</span>
                      <p>Age: {item.age}</p>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/*  tab */}
      <section>
        <div className="flex w-full flex-col mt-20 ">
          <Tabs
            aria-label="Dynamic tabs"
            className="flex justify-center"
            color="warning"
            radius="full"
            items={tabs}
            onSelectionChange={(key) => getJoinTable(key)}
          >
            {(item) => (
              <Tab
                key={item.id}
                title={item.label}
                className="flex justify-center "
              >
                {item.content}
              </Tab>
            )}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Home;
