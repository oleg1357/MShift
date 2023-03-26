import styled from "styled-components";
import ImageTile from "./ImageTile";

const TileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  padding: 20px;
`;

const ImageGrid = ({ images, onLike }) => {
  return (
    <TileWrapper>
      {images.map((image) => (
        <ImageTile
          key={image.id}
          imageUrl={image.imageUrl}
          photographer={image.photographer}
          id={image.id}
        />
      ))}
    </TileWrapper>
  );
};

export default ImageGrid;
