
export default function Video({filename}) {
    return (
      <>
        <video 
         controls
         width="55%"
         className="pad-little"
         src={filename}
         type="video/mp4"
        />
      </>
    );
  };