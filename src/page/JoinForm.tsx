import {
  Input,
  Image,
  RadioGroup,
  Radio,
  Textarea,
  Checkbox,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import FromBGImage from "../assets/formImg.avif";

function JoinForm() {
  const { state } = useLocation();
  const input = () => {};

  return (
    <>
      <div className="flex justify-center ">
        <Image
          src={FromBGImage}
          className="object-cover w-[1900px] h-[850px]"
          alt="formImage"
        />
        <div className="w-[1200px] absolute z-10 grid grid-cols-3 backdrop-blur-xl bg-white/20 mt-24 rounded-xl">
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
                  />
                </div>
              );
            } else if (item.type === "date") {
              return (
                <div key={index} className="p-3">
                  <Input
                    type={item.type}
                    label={item.title}
                    classNames={{
                      input: "border-0",
                    }}
                  />
                </div>
              );
            } else if (item.type === "textarea") {
              return (
                <div key={index} className="p-3">
                  <Textarea label={item.title} className="max-w-md" />
                </div>
              );
            } else if (item.type === "radio") {
              // return (
              const option = item?.option;

              return (
                <div key={index} className="p-3">
                  <RadioGroup
                    label={item.title}
                    orientation={item.orientation}
                    classNames={{
                      label: "text-black",
                    }}
                  >
                    {option?.map((i) => {
                      return (
                        <Radio
                          value={i?.value}
                          classNames={{
                            label: "text-black",
                          }}
                        >
                          {i?.label}
                        </Radio>
                      );
                    })}
                  </RadioGroup>
                </div>
              );

              // );
            } else if (item.type === "checkBox") {
              return (
                <div key={index} className="p-3">
                  <Checkbox>{item.title}</Checkbox>
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
