import Image from "next/image";

interface Props {
  image: string;
}

const SelectedImage = ({ image }: Props) => {
  return (
    <Image
      id={"image"}
      width={150}
      height={150}
      src={image || "/demo-image.jpeg"}
      alt="Profile"
    />
  );
};

export default SelectedImage;
