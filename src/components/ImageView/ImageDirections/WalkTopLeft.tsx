import Image from "next/image";
export const WalkTopLeft = () => {
  return (
    <Image
      className="walk-top-left"
      src={`/images/walk-top-left.gif`}
      width={48}
      height={76}
      alt="character"
    />
  );
};
