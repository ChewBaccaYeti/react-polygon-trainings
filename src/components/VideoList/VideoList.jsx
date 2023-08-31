export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <li>
          <button key={video.id} onClick={() => onSelect(video.link)}>
            {video.link}
          </button>
        </li>
      ))}
    </ul>
  );
};
