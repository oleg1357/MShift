import useStore from "../Store/Store";
import ImageGrid from "./ImageGrid";
import Heart from "./Heart";

const LikedImages = () => {
  const [images, likedImages] = useStore((state) => [
    state.images,
    state.likedImages,
  ]);

  const filteredImages = images.filter((elem) => likedImages.includes(elem.id));
  if (filteredImages.length) {
    return (
      <div>
        <ImageGrid images={filteredImages} />
      </div>
    );
  } else {
    return <Heart />;
  }
};
export default LikedImages;
