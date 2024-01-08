"use client";
import { useState } from "react";
import DropDown from "./dropdown";
import { focusCss, activeCss } from "../styles/styles";

export default function DogForm({ data }: { data: any }) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("Velg hunderase");

  return (
    <form>
      {/* not using select/option tags bc of very limited styling options */}
      <div className="w-fit">
        <label
          htmlFor="dog"
          className="block text-sm pb-2 font-light text-gray-600"
        >
          Hunderase
        </label>

        <div
          onClick={() => setToggle(!toggle)}
          className={`bg-[#0000000D] rounded-2xl text-lg w-[535px] text-gray-600 font-light hover:cursor-pointer h-[48px] ${focusCss} ${activeCss}`}
        >
          {/* need the tab index attribute to make it the div focusable */}
          <div
            tabIndex={1}
            id="dog"
            className="flex justify-between items-center py-2 px-4"
          >
            <div className="flex items-center">
              {selectValue != "Velg hunderase" && (
                <div className="mr-2 w-4 h-4 bg-yellow-400 rounded-full flex justify-center items-center" />
              )}
              <span>{selectValue}</span>
            </div>
            <svg
              className="fill-current h-4 w-4 pt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
          {/* custom options */}
          {toggle && (
            <DropDown
              data={data}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
          )}
        </div>
      </div>
    </form>
  );
}


