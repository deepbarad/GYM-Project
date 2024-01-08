import { Card, Image } from "@nextui-org/react";
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
            {Data?.map((item: any) => {
              if (item?.flag === "image") {
                return (
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src={
                        import.meta.env.VITE_SERVER_URL +
                        "/galleryImage/" +
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
                          import.meta.env.VITE_SERVER_URL +
                          "/galleryImage/" +
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
