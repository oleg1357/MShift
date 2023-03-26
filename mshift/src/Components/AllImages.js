import useStore from "../Store/Store";
import ImageGrid from "./ImageGrid";

const AllImages = () => {
  const [images] = useStore((state) => [state.images]);

  return (
    <div>
      <ImageGrid images={images} />
    </div>
  );
};
export default AllImages;
