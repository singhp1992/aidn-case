import Image from "next/image";
import { ValueState } from "../lib/types";

type Props = {
  selectValue: ValueState;
  defaultText: string;
  formName: string;
};

export default function Select({ ...props }: Props) {
  const { selectValue, defaultText, formName } = props;
  return (
    <div id={formName} className="flex justify-between items-center py-2 px-4">
      <div id={formName} className="flex items-center">
        {selectValue.text != defaultText && (
          <div
            id={formName}
            className={`mr-2 w-4 h-4 rounded-full flex justify-center items-center ${selectValue.color}`}
          />
        )}
        <span id={formName}>{selectValue.text}</span>
      </div>
      <Image
        id={formName}
        src="/down-arrow.svg"
        alt="Down Arrow"
        width={16}
        height={16}
        priority
      />
    </div>
  );
}
