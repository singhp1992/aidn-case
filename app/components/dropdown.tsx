import { Dispatch, SetStateAction } from "react";
import { focusCss, hoverCss } from "../styles/styles";

// todo: need to update the type here
export default function DropDown({
  data,
  selectValue,
  setSelectValue,
}: {
  // need to fix this one
  data: any;
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
}) {
  // bg-yellow-300
  // bg-green-300
  return (
    <div className="rounded-xl shadow-md mt-2 hover:cursor-pointer h-[300px] overflow-scroll ">
      {data?.map((dog: any, i: string) => (
        <div
          key={i}
          tabIndex={1}
          onClick={() => setSelectValue(dog.name)}
          className={`px-4 py-2 flex items-center w-full ${
            i == "0" && "rounded-t-xl"
          }  ${focusCss} ${hoverCss}`}
        >
          {/* todo need to change these colors */}
          <div>
            <div className="w-4 h-4 bg-light-yellow rounded-full flex justify-center items-center" />
          </div>
          <div className="pl-4">
            <p className="font-medium">
              {dog.name}
              {i}
            </p>
            <p className="font-light truncate">{dog.temperament}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
