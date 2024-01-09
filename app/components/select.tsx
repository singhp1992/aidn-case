import Image from "next/image";
import { ValueState } from "../lib/types";

type Props = { selectValue: ValueState; defaultText: string };

export default function Select({ selectValue, defaultText }: Props) {
  // make this reusable
  return (
    <div id="dog" className="flex justify-between items-center py-2 px-4">
      <div className="flex items-center">
        {selectValue.text != defaultText && (
          <div
            className={`mr-2 w-4 h-4 rounded-full flex justify-center items-center ${selectValue.color}`}
          />
        )}
        <span>{selectValue.text}</span>
      </div>
      <Image
        src="/down-arrow.svg"
        alt="Down Arrow"
        width={16}
        height={16}
        priority
      />
    </div>
  );
}
