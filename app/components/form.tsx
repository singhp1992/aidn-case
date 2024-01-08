"use client";
import { useState } from "react";
import DropDown from "./dropdown";
import { focusWithinCss, activeCss, focusCss } from "../styles/globalStyles";
import Select from "./select";
import { useRef } from "react";
import { DogData } from "../lib/types";

export default function DogForm({ data }: { data: DogData[] }) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("Velg hunderase");
  const selectRef = useRef<HTMLDivElement>(null);

  return (
    <form>
      <div className="w-fit">
        <label
          htmlFor="dog"
          className="block text-sm pb-2 font-light text-gray-600"
        >
          Hunderase
        </label>
        <div
          //  need the tab index attribute to make it the div focusable
          tabIndex={0}
          ref={selectRef}
          onClick={() => setToggle(!toggle)}
          className={`bg-light-gray rounded-2xl text-lg w-[350px] md:w-[535px] text-gray-600 font-light hover:cursor-pointer h-[48px] ${focusWithinCss} ${activeCss} ${focusCss}`}
        >
          {/* not using select/option tags bc of very limited styling options */}
          <Select selectValue={selectValue} />
          {/* custom options */}
          {toggle && (
            <DropDown
              data={data}
              setSelectValue={setSelectValue}
              selectRef={selectRef}
            />
          )}
        </div>
      </div>
    </form>
  );
}
