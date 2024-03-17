import React from "react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "nikhil",
      img: "https://images.pexels.com/photos/17543635/pexels-photo-17543635/free-photo-of-silhouetted-palm-trees-with-sun-shining-between-the-leaves.jpeg",
    },
    {
      id: 2,
      name: "nikhil",
      img: "https://images.pexels.com/photos/17543635/pexels-photo-17543635/free-photo-of-silhouetted-palm-trees-with-sun-shining-between-the-leaves.jpeg",
    },
    {
      id: 3,
      name: "nikhil",
      img: "https://images.pexels.com/photos/17543635/pexels-photo-17543635/free-photo-of-silhouetted-palm-trees-with-sun-shining-between-the-leaves.jpeg",
    },
    {
      id: 4,
      name: "nikhil",
      img: "https://images.pexels.com/photos/17543635/pexels-photo-17543635/free-photo-of-silhouetted-palm-trees-with-sun-shining-between-the-leaves.jpeg",
    },
  ];

  return (
    <div className="flex gap-2 h-64 mb-7">
      {stories.map((story) => (
        <div className="flex-[1] rounded-lg overflow-hidden">
          <img className=" w-full h-full" src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
