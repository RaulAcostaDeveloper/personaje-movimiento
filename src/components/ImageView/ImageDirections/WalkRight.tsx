import Image from "next/image";
export const WalkRight = () => {
  return (
    <Image
      className="walk-right"
      src={`/images/walk-right.gif`}
      width={49}
      height={75}
      alt="character"
    />
  );
};
