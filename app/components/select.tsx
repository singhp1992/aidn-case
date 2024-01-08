import Image from "next/image";

export default function Select({ selectValue }: { selectValue: string }) {
  // make this reusable
  return (
    <div id="dog" className="flex justify-between items-center py-2 px-4">
      <div className="flex items-center">
        {selectValue != "Velg hunderase" && (
          <div className="mr-2 w-4 h-4 bg-yellow-400 rounded-full flex justify-center items-center" />
        )}
        <span>{selectValue}</span>
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
