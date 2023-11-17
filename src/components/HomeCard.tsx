import { Button, Image, Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { joinFormObject } from "./FormObject";

function HomeCard({
  img,
  no,
  title,
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
                    <p className="md:text-xl 2xl:text-xl  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Reprehenderit illum et quas voluptatem aspernatur adipisci
                      commodi aliquid exercitationem ex iste! Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Quibusdam, dicta.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet perferendis atque facilis! Veritatis, eligendi
                      consequatur? Nemo, animi expedita assumenda molestias
                      placeat eligendi ut quidem nam! Accusantium, esse officiis
                      repellendus id deserunt ipsa facilis temporibus obcaecati
                      nisi, laborum vero at amet ex explicabo officia ratione
                      dolorum dolore debitis rem ad rerum!
                    </p>
                  </div>
                  <div className={BtnClass}>
                    <Button
                      className="bg-red-700 font-semibold mt-4 "
                      onClick={() =>
                        navigate("/JoinForm", {
                          state: { data: joinFormObject },
                        })
                      }
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
