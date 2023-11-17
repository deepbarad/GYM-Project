import { Input, Image, RadioGroup, Radio } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import FromBGImage from "../assets/formImg.avif";

function JoinForm() {
  const { state } = useLocation();

  return (
    <>
      <div className="flex justify-center ">
        <Image
          src={FromBGImage}
          className="object-cover w-[1900px] h-[850px]"
          alt="formImage"
        />
        <div className="w-[1200px] absolute z-10 grid grid-cols-3 backdrop-blur-xl bg-white/30 mt-24 rounded-xl">
          {state.data.map((item: any, index: number) => {
            if (item.type === "number") {
              return (
                <div key={index} className="p-3">
                  <Input
                    type={item.type}
                    label={item.title}
                    classNames={{
                      input: "border-0",
                    }}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            } else if (item.type === "text") {
              return (
                <div key={index} className="p-3">
                  <Input
                    type={item.type}
                    label={item.title}
                    classNames={{
                      input: "border-0",
                    }}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            } else if (item.type === "email") {
              return (
                <div key={index} className="p-3">
                  <Input
                    type={item.type}
                    label={item.title}
                    classNames={{
                      input: "border-0",
                    }}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            } else if (item.type === "radio") {
              return (
                <div key={index} className="p-3">
                  <RadioGroup className="mt-3">
                    <div className="grid grid-cols-3 gap-1">
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                      <Radio value="other">Other</Radio>
                    </div>
                  </RadioGroup>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default JoinForm;
