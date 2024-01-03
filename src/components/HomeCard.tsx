import { Button, Image, Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function HomeCard({
  img,
  no,
  title,
  contain,
  imgOrder,
  noOrder,
  noText,
  noClass,
  h5DivCalss,
  BtnClass,
  imgClass,
}) {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="flex justify-center">
          <Card className="bg-transparent shadow-none">
            <CardBody>
              <div className="2xl:flex relative lg:flex">
                <div className={imgOrder}>
                  <Image
                    shadow="sm"
                    radius="sm"
                    alt={no}
                    className={imgClass}
                    src={img}
                  />
                </div>
                <div className={noOrder}>
                  <div className={noText}>
                    <span
                      className={noClass}
                      style={{ fontFamily: "Londrina Outline" }}
                    >
                      {no}
                    </span>
                  </div>
                  <div className={h5DivCalss}>
                    <h5
                      className="text-4xl font-extrabold"
                      style={{ fontFamily: "inherit" }}
                    >
                      {title}
                    </h5>
                    <p className="md:text-xl 2xl:text-xl  ">{contain}</p>
                  </div>
                  <div className={BtnClass}>
                    <Button
                      className="bg-red-700 font-semibold mt-4"
                      onClick={() => navigate("/JoinForm")}
                    >
                      GET STARTED TODAY
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}

export default HomeCard;
