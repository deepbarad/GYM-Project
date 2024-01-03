import { Card, Image } from "@nextui-org/react";
import g1 from "../assets/Image/g-1.jpg";
import g2 from "../assets/Image/g-2.jpg";
import g3 from "../assets/Image/g-3.jpg";
import g4 from "../assets/Image/g-4.jpg";
import g5 from "../assets/Image/g-5.jpg";
import g6 from "../assets/Image/g-6.jpg";
import g7 from "../assets/Image/g-7.jpg";
import g8 from "../assets/Image/g-8.jpg";
import g9 from "../assets/Image/g-9.jpg";
import g10 from "../assets/Image/g-10.jpg";
import v1 from "../assets/video/v-1.mp4";
import { useEffect, useState } from "react";
import { getAllGalleryImage } from "../apis/getApi";

function Gallery() {
  const [Data, setData] = useState([]);

  const getGalleryImage = async () => {
    const res = await getAllGalleryImage();
    setData(res?.data);
  };

  useEffect(() => {
    getGalleryImage();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center">
          <span className="text-5xl mt-5 font-bold text-yellow-400">
            GYM Gallery
          </span>
        </div>
        <div className="flex justify-center mt-7">
          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            {Data?.map((item) => {
              if (item?.flag === "image") {
                return (
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src={
                        "http://localhost:8000/galleryImage/" +
                        item?.galleryImage
                      }
                    />
                  </Card>
                );
              } else if (item?.flag === "video") {
                return (
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                  >
                    <video className="h-unit-9xl" controls>
                      <source
                        src={
                          "http://localhost:8000/galleryImage/" +
                          item?.galleryImage
                        }
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Card>
                );
              }
            })}
            {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g2}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g3}
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g4}
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
            >
              <video className="h-unit-9xl" controls>
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g6}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g7}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g8}
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={g9}
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
            >
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={g10}
              />
            </Card> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
