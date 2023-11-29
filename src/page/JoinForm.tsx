import {
  Input,
  Image,
  RadioGroup,
  Radio,
  Textarea,
  Checkbox,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import FromBGImage from "../assets/Image/formImg.avif";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { joinFormObject } from "../components/FormObject";

function JoinForm() {
  const [Data, setData] = useState();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const input = (object) => {
    return object?.map((item: any, index: number) => {
      if (item.type === "number") {
        return (
          <div key={index} className="p-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.title}
            </label>
            <input
              type={item.type}
              {...register(item.name)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={item.placeholder}
            />
          </div>
        );
      } else if (item.type === "text") {
        return (
          <div key={index} className="p-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.title}
            </label>
            <input
              type={item.type}
              {...register(item.name)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={item.placeholder}
            />
          </div>
        );
      } else if (item.type === "email") {
        return (
          <div key={index} className="p-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.title}
            </label>
            <input
              type={item.type}
              {...register(item.name)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={item.placeholder}
            />
          </div>
        );
      } else if (item.type === "date") {
        return (
          <div key={index} className="p-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.title}
            </label>
            <input
              type={item.type}
              {...register(item.name)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={item.placeholder}
            />
          </div>
        );
      } else if (item.type === "textarea") {
        return (
          <div key={index} className="p-3">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.title}
            </label>
            <textarea
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={item.placeholder}
            ></textarea>
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
                label: "text-white",
              }}
            >
              {option?.map((i: any) => {
                return (
                  <Radio
                    value={i?.value}
                    classNames={{
                      label: "text-white",
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
            <Checkbox {...register(item.name)}>{item.title}</Checkbox>
          </div>
        );
      }
    });
  };
  const onSubmit = (data: any) => {
    console.log("data", data);
  };
  const onChange = (key: any) => {
    setData(key);
  };

  return (
    <>
      <div className="flex justify-center ">
        <Image
          src={FromBGImage}
          className="object-cover hidden xl:block w-[1900px] h-[850px]"
          alt="formImage"
        />
        {/* Form */}
        <div className="xl:absolute xl:w-[1200px] z-10  backdrop-blur-2xl bg-white/20 top-32 p-5 rounded-xl">
          <div className="flex justify-center">
            <span className="font-bold text-4xl xl:text-5xl p-3">
              Personal Detail
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid 2xl:grid-cols-3 ">{input(joinFormObject)}</div>
            <div className="flex justify-center">
              <Button
                type="submit"
                color="primary"
                className="text-xl"
                size="lg"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* Rules */}
      <div className="flex justify-center mt-10 mb-10">
        <div className=" 2xl:w-[1200px] z-10 backdrop-blur-2xl bg-white/20 top-52 p-5 rounded-xl">
          <div className="flex justify-between">
            <div>
              <span className="font-bold text-4xl xl:text-5xl">GYM RULES </span>
            </div>
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Language</Button>
                </DropdownTrigger>
                <DropdownMenu onAction={onChange} aria-label="Static Actions">
                  <DropdownItem key="english">English</DropdownItem>
                  <DropdownItem key="gujarati">Gujarati</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="font-bold text-xl mt-10 text-red-600">
            {Data === "gujarati" ? (
              <>
                {" "}
                <p className="p-2">1. સખત મહેનત કરો અથવા ઘરે જાઓ.</p>
                <p className="p-2">
                  2. જો તમને "સ્પોટ"ની જરૂર હોય તો સ્ટાફ મેમ્બર અથવા સાથી
                  ટ્રેનરને પૂછો.
                </p>
                <p className="p-2">
                  3. અનુભવી સભ્યો કૃપા કરીને કોઈને પૂછવામાં આવે તો તેને "સ્પોટ"
                  કરવાનો ઇનકાર કરશો નહીં.
                </p>
                <p className="p-2">
                  3. વજન, પ્લેટ્સ, બાર અને ડમ્બેલ્સનો ઉપયોગ કર્યા પછી યોગ્ય
                  સ્થાન પર પાછા રાખવું. બાર અને મશીનો અથવા ફ્લોર પર પ્લેટો
                  છોડીને જીમમાં બીજા બધાને નફરત કરતા વ્યક્તિ ન બનો.
                </p>
                <p className="p-2">4. તમારો પરસેવો. તમારો ટુવાલ.</p>
                <p className="p-2">5. સાધનો શેર કરો.</p>
                <p className="p-2">
                  6. બાટલીમાં બંધ પાણી સિવાય કોઈ ખોરાક કે પીણું લાવુ નહિ.
                </p>
                <p className="p-2">7. સાધનોનો આદર કરો.</p>
                <p className="p-2">8. બીજાની અંગત જગ્યાનો આદર કરો.</p>
                <p className="p-2">
                  9. જીમમાં ગયા પછી ફોનનો બને તેટલો ઓછો ઉપયોગ કરો અને કસરત પર
                  ધ્યાન આપો.
                </p>
                <p className="p-2">
                  10. જીમના તમામ વપરાશકર્તાઓએ ઉપયોગને લગતી સૂચનાઓ અને સલામતીની
                  સાવચેતીઓનું પાલન કરવું જોઈએ કસરત સાધનો. જો શંકા હોય તો, જિમ
                  વપરાશકર્તાઓને ફરજ પરના અધિકારીની સલાહ લેવી જરૂરી છે.
                </p>
              </>
            ) : (
              <>
                {" "}
                <p className="p-2">1. Work hard or go home. </p>
                <p className="p-2">
                  2. Ask a staff member or fellow trainer if you need a “spot”.
                </p>
                <p className="p-2">
                  3. Experienced members please don’t refuse to “spot” someone
                  if asked.
                </p>
                <p className="p-2">
                  3. Return weights, plates, bars and dumbbells to the correct
                  place after use – don’t be the person everyone else hates in
                  the gym by leaving plates on bars & machines or the floor.
                </p>
                <p className="p-2">4. Your sweat. Your towel. </p>
                <p className="p-2">5. Share equipments.</p>
                <p className="p-2">
                  6. No food or drinks besides bottled water.
                </p>
                <p className="p-2">7. Respect the equipments.</p>
                <p className="p-2">8. Respect other’s personal space.</p>
                <p className="p-2">
                  9. After going to the gym, use the phone as little as possible
                  and focus on the exercise.
                </p>
                <p className="p-2">
                  10. All gym users must observe the instructions and safety
                  precautions pertaining to the use of the exercise equipment.
                  If in doubt, gym users are required to consult the officer on
                  duty.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinForm;
