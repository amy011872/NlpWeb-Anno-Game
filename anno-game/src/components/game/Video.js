
export default function Video({filename}) {
    return (
      <>
        <video controls width="55%" className="pad-little">
          <source src={filename} type="video/mp4" />
        </video>
      </>
    );
  };