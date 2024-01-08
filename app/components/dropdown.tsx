"use client";
import { useRef, useState } from "react";
import { focusWithinCss, activeCss, focusCss } from "../styles/globalStyles";
import Select from "./select";
import Option from "./option";
import { DogData } from "../lib/types";

export default function DropDown({
  data,
  label,
}: {
  data: DogData[];
  label: string;
}) {
  const [toggle, setToggle] = useState<boolean>(false);
  // specifically need to use useState here for the form, can't use useRef ---- double check
  const [selectValue, setSelectValue] = useState<string>("Velg hunderase");
  const selectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-fit mt-4 z-0">
      <p className="block text-sm pb-2 font-light text-gray-600">{label}</p>
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
          <Option
            data={data}
            setSelectValue={setSelectValue}
            selectRef={selectRef}
          />
        )}
      </div>
    </div>
  );
}
