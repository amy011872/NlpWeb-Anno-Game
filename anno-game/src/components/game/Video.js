import MaVideo from "../../skeleton_videos/ma.mp4";

export default function Video() {
    return (
      <video controls width="40%" >
        <source src={MaVideo} type="video/mp4"
        />
      </video>
    );
  };