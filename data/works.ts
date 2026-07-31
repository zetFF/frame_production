export type Work = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export const works: Work[] = [
  {
    id: 1,
    title: "Photography On Stage",
    category: "Photography",
    image: "/images/photography.png",
  },
  {
    id: 2,
    title: "Desain Grafis Progress",
    category: "Design",
    image: "/images/canva-progress.png",
  },
  {
    id: 3,
    title: "Livestreaming Multicam",
    category: "Livestreaming",
    image: "/images/foh-image.png",
  },
  {
    id: 4,
    title: "Cinematic & Documenter Take Video",
    category: "Videography",
    image: "/images/videography.png",
  },
  {
    id: 5,
    title: "Editing Video",
    category: "Video",
    image: "/images/streaming.png",
  },
];
