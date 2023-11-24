import cardio from "../assets/Image/cardio.jpg";
import man from "../assets/Image/man.jpg";
import back from "../assets/Image/back.jpg";
import dumbell from "../assets/Image/g-5.jpg";
import tredmil from "../assets/Image/leg.jpg";
import { Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";
import Image01 from "../assets/Image/01-Image.avif";
import Image02 from "../assets/Image/weight lifting.jpg";
import Image03 from "../assets/Image/03-cardio.webp";
import bgImage from "../assets/Image/bg-image.jpg";
import trenner1 from "../assets/Image/trenner 3.jpg";
import trenner2 from "../assets/Image/trenner 2.webp";
import trenner3 from "../assets/Image/trener 1.webp";
import trenner4 from "../assets/Image/trenner 4.jpg";
import trenner5 from "../assets/Image/femaleGym.jpg";
import trenner6 from "../assets/Image/trenner ledy 2.jpg";
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
// import { joinFormObject } from "../components/FormObject";

const Home = () => {
  const list = [
    {
      title: "Deep Barad",
      img: trenner1,
      age: "50",
    },
    {
      title: "Deanne Pandey",
      img: trenner2,
      age: "28 ",
    },
    {
      title: "Namrata Purohit",
      img: trenner3,
      age: "25",
    },
    {
      title: "Manish Advilkar",
      img: trenner4,
      age: "28",
    },
    {
      title: "Payal Gidwani",
      img: trenner5,
      age: "24 ",
    },
    {
      title: "Jency jani",
      img: trenner6,
      age: "27",
    },
  ];
  const tabs = [
    {
      id: "monday",
      label: "Monday",
      content: <WeekTable column={MonColumn} />,
    },
    {
      id: "tuesday",
      label: "Tuesday",
      content: <WeekTable column={TueColumn} />,
    },
    {
      id: "wednesday",
      label: "WednesDay",
      content: <WeekTable column={WedColumn} />,
    },
    {
      id: "thursday",
      label: "Thursday",
      content: <WeekTable column={ThuColumn} />,
    },
    {
      id: "friday",
      label: "Friday",
      content: <WeekTable column={FriColumn} />,
    },
    {
      id: "saturday",
      label: "Saturday",
      content: <WeekTable column={SatColumn} />,
    },
  ];
  return (
    <>
      {/*-- carousel-- */}
      <div>
        <div
          id="default-carousel"
          className="relative w-full mt-5"
          data-carousel="slide"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px]">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={cardio}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={man}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={dumbell}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={back}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* <!-- Item 5 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={tredmil}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
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
                PUSH YOUR <br /> LIMITS FORWARD
              </h5>
              <p className="font-bold text-md text-gray-500">
                Make beautiful websites regardless of your design experience.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, amet.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* --01-- */}
      <HomeCard
        img={Image01}
        no="01"
        title="GYM&FITNESS"
        imgOrder="order-2"
        noOrder="order-1"
        noText="text-end"
        noClass="text-red-600 text-7xl font-semibold top-[0px] z-10 right-3 absolute lg:relative lg:text-9xl lg:font-normal 2xl:text-9xl 2xl:relative 2xl:font-normal 2xl:top-0 "
        h5DivCalss="mt-5 text-center 2xl:text-start flex-row justify-center 2xl:w-[800px] lg:text-start lg:w-unit-8xl"
        BtnClass="flex justify-center 2xl:justify-start"
        imgClass="2xl:h-[500px] 2xl:w-[350px] lg:h-[580px] lg:w-[400px] object-cover"
      />

      {/* --02-- */}
      <HomeCard
        img={Image02}
        no="02"
        title="GYM&FITNESS"
        imgOrder="order-1"
        noOrder="order-2"
        noText="text-start"
        noClass="text-red-600 text-7xl font-semibold top-[0px] z-10 left-3 absolute lg:font-normal lg:text-9xl lg:relative 2xl:text-9xl 2xl:relative 2xl:font-normal 2xl:top-0 "
        h5DivCalss="mt-5 text-center 2xl:ml-4 lg:ml-4 lg:text-start 2xl:text-start flex-row justify-center 2xl:w-unit-9xl lg:w-unit-8xl"
        BtnClass="flex justify-center 2xl:justify-start 2xl:ml-4"
        imgClass="2xl:h-[500px] 2xl:w-[350px] md:w-[900px] object-cover lg:w-[400px] lg:h-[580px]"
      />

      {/* --03-- */}
      <HomeCard
        img={Image03}
        no="03"
        title="CARDIO FITNESS"
        imgOrder="order-2"
        noOrder="order-1"
        noText="text-end"
        noClass="text-red-600 text-7xl font-semibold top-[0px] z-10 right-3 absolute lg:relative lg:text-9xl lg:font-normal 2xl:text-9xl 2xl:relative 2xl:font-normal 2xl:top-0 "
        h5DivCalss="mt-5 text-center 2xl:text-start flex-row justify-center 2xl:w-unit-9xl lg:text-start lg:w-unit-8xl"
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
            {list.map((item, index) => (
              <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                  <div className="flex justify-center">
                    <Image
                      shadow="sm"
                      radius="none"
                      alt={item.title}
                      className="w-full object-cover h-[250px]"
                      src={item.img}
                    />
                  </div>
                  <div className=" z-10 p-2  top-60 text-center font-extrabold text-white bg-black">
                    <span>{item.title}</span>
                    <p>Age: {item.age}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
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
