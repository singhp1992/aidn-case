"use client";
// use client directive needed since useState/useEffect etc is used in this component
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { focusWithinCss, activeCss, focusCss } from "../styles/globalStyles";
import Select from "./select";
import Option from "./option";
import { DogData, FormState, ValueState } from "../lib/types";

type Props = {
  data: DogData[] | null | undefined;
  label: string;
  defaultText: string;
  setFormData: Dispatch<SetStateAction<FormState>>;
  formName: string;
};

export default function DropDown({ ...props }: Props) {
  const { data, label, defaultText, setFormData, formName } = props;
  const [toggle, setToggle] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  // select value is what will show up in the faux "select" div
  const [selectValue, setSelectValue] = useState<ValueState>({
    text: "",
    color: "",
  });

  // setting the initial value of the "select" div which is passed down as a prop
  useEffect(() => setSelectValue({ text: defaultText }), [defaultText]);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!toggle) return;
    // removing toggle if user clicks outside of the dropdown element
    let handleClick = (event: MouseEvent) => {
      if (toggle && (event.target as HTMLElement).id != formName) {
        console.log("removing toggle on outside click");
        setToggle(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [toggle]);

  return (
    <div className="w-full mt-4 z-0">
      <p className="block text-sm pb-2 font-light text-gray-600">{label}</p>
      <div
        // need the tab index attribute to make it the div focusable
        id="focus"
        tabIndex={0}
        ref={selectRef}
        onClick={() => {
          setToggle(!toggle);
          // need to make sure that the current selectref isnt null - used for setting the div focus state after user interaction
          selectRef.current!.focus();
        }}
        // w-[325px] md:w-[535px]
        className={`bg-light-gray rounded-2xl text-lg  text-gray-600 font-light hover:cursor-pointer h-[48px] ${focusWithinCss} ${activeCss} ${focusCss}`}
      >
        {/* not using select/option tags bc of very limited styling options */}
        <Select
          selectValue={selectValue}
          defaultText={defaultText}
          formName={formName}
        />
        {toggle && (
          <Option
            data={data}
            setSelectValue={setSelectValue}
            selectValue={selectValue}
            label={label}
            formName={formName}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
}
