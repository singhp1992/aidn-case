import { Dispatch, RefObject, SetStateAction } from "react";
import { DogData, FormState, ValueState } from "../lib/types";
import {
  alternatingColors,
  focusWithinCss,
  hoverCss,
} from "../styles/globalStyles";

type Props = {
  data: DogData[] | null | undefined;
  setSelectValue: Dispatch<SetStateAction<ValueState>>;
  selectValue: ValueState;
  setFormData: Dispatch<SetStateAction<FormState>>;
  label: string;
  formName: string;
};

export default function Option({ ...props }: Props) {
  const { data, setSelectValue, selectValue, setFormData, label, formName } =
    props;

  return (
    <div
      id="options"
      className="rounded-xl shadow-default mt-2 hover:cursor-pointer h-[300px] overflow-y-scroll z-50"
    >
      {data?.map((animal: DogData, i: number) => (
        <div
          key={i}
          id={label}
          tabIndex={1}
          onClick={() => {
            // selecting the value for the visible "select" divs
            setSelectValue({
              text: animal.name,
              color: alternatingColors[i % 3],
            });
            // setting overall form state from grandparent (page.tsx)
            setFormData((prevState) => ({
              ...prevState,
              [formName]: animal.name,
            }));
          }}
          className={`px-4 py-2 flex items-center w-full overflow-hidden ${
            selectValue.text == animal.name && "bg-focus-green"
          } ${i == 0 && "rounded-t-xl"}  ${focusWithinCss} ${hoverCss}`}
        >
          <div>
            <div
              className={`w-4 h-4  rounded-full flex justify-center items-center ${
                alternatingColors[i % 3]
              } `}
            />
          </div>
          <div className="pl-4">
            <p className="font-medium">{animal.name}</p>
            {/* some truncate at 61 characters, some truncate at 65, one fix is to adjust the width to "force" truncate */}
            <p
              className={`font-light w-[475px] truncate ${
                animal.temperament?.length > 61 &&
                "hover:h-[56px] h-[28px] hover:overflow-visible hover:text-wrap transition-all ease-linear delay-150 duration-300 "
              }`}
            >
              {animal.temperament}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
