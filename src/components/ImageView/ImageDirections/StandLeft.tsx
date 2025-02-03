import Image from "next/image";
export const StandLeft = () => {
  return (
    <Image
      className="stand-left"
      src={`/images/stand-left.gif`}
      width={31}
      height={71}
      alt="character"
    />
  );
};
