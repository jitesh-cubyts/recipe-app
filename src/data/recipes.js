const recipes = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Dish ${index + 1}`,
  thumbnail: "path/to/image.jpg",
  videoLink: "path/to/video.mp4",
  description: `Description for Dish ${index + 1}`,
  ingredients: ["Ingredient 1", "Ingredient 2"],
  steps: ["Step 1", "Step 2"],
}));

export default recipes