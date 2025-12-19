export default function InstagramVideo({ url, thumbnail, title }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="video-thumb"
      aria-label={`Ver ${title} en Instagram`}
    >
      <img src={thumbnail} alt={title} />
      <div className="play-btn">
        <span className="play-icon">▶</span>
    </div>

    </a>
  );
}
