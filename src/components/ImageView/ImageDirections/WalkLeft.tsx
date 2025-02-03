import Image from "next/image";
export const WalkLeft = () => {
  return (
    <Image
      className="walk-left"
      src={`/images/walk-left.gif`}
      width={49}
      height={75}
      alt="character"
    />
  );
};
