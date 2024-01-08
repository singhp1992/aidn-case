"use client";
import { useState } from "react";
import DropDown from "./dropdown";
import { focusCss, activeCss } from "../styles/styles";
import Select from "./select";

export default function DogForm({ data }: { data: any }) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("Velg hunderase");

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
          onClick={() => setToggle(!toggle)}
          className={`bg-[#0000000D] rounded-2xl text-lg w-[535px] text-gray-600 font-light hover:cursor-pointer h-[48px] ${focusCss} ${activeCss}`}
        >
          {/* not using select/option tags bc of very limited styling options */}
          <Select selectValue={selectValue} />
          {/* custom options */}
          {toggle && <DropDown data={data} setSelectValue={setSelectValue} />}
        </div>
      </div>
    </form>
  );
}
