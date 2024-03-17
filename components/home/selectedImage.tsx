import Image from "next/image";

interface Props {
    image: any
}

const SelectedImage = ({ image }: Props) => {

    return (
        <Image
            id={"image"}
            width={200}
            height={200}
            src={image || '/demo-image.jpeg'}
            alt="Profile"
        />
    );
}

export default SelectedImage;