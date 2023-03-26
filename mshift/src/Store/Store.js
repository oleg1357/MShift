import { create } from "zustand";

const dataJson = {
  images: [
    {
      id: 1,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e2d54a4253aa14f1dc8460962e33791c3ad6e04e50744172297bd59749c5_640.jpg",
      photographer: "John Doe",
    },
    {
      id: 2,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e0dc434f51aa14f1dc8460962e33791c3ad6e04e50744172287edd964bcc_640.jpg",
      photographer: "Jane Smith",
    },
    {
      id: 3,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/55e0dc444c50aa14f1dc8460962e33791c3ad6e04e507441722a72dd9345c7_640.jpg",
      photographer: "Mark Johnson",
    },
    {
      id: 4,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e2d54a4253aa14f1dc8460962e33791c3ad6e04e50744172297bd59749c5_640.jpg",
      photographer: "John Doe",
    },
    {
      id: 5,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e0dc434f51aa14f1dc8460962e33791c3ad6e04e50744172287edd964bcc_640.jpg",
      photographer: "Jane Smith",
    },
    {
      id: 6,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/55e0dc444c50aa14f1dc8460962e33791c3ad6e04e507441722a72dd9345c7_640.jpg",
      photographer: "Mark Johnson",
    },
    {
      id: 7,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e2d54a4253aa14f1dc8460962e33791c3ad6e04e50744172297bd59749c5_640.jpg",
      photographer: "John Doe",
    },
    {
      id: 8,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e0dc434f51aa14f1dc8460962e33791c3ad6e04e50744172287edd964bcc_640.jpg",
      photographer: "Jane Smith",
    },
    {
      id: 9,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/55e0dc444c50aa14f1dc8460962e33791c3ad6e04e507441722a72dd9345c7_640.jpg",
      photographer: "Mark Johnson",
    },
    {
      id: 10,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e2d54a4253aa14f1dc8460962e33791c3ad6e04e50744172297bd59749c5_640.jpg",
      photographer: "John Doe",
    },
    {
      id: 11,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/57e0dc434f51aa14f1dc8460962e33791c3ad6e04e50744172287edd964bcc_640.jpg",
      photographer: "Jane Smith",
    },
    {
      id: 12,
      imageUrl:
        "https://randomwordgenerator.com/img/picture-generator/55e0dc444c50aa14f1dc8460962e33791c3ad6e04e507441722a72dd9345c7_640.jpg",
      photographer: "Mark Johnson",
    },
  ],
};

const useStore = create((set) => ({
  images: dataJson.images,
  likedImages: [],
  addLike: (id) =>
    set((state) => {
      if (state.likedImages.includes(id)) {
        return { likedImages: state.likedImages.filter((e) => e !== id) };
      } else {
        return { likedImages: [...state.likedImages, id] };
      }
    }),
}));

export default useStore;
