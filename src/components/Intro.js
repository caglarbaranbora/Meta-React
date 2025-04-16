function Intro(props) {
  return (
    <div className="blog-post-intro">
      <h2>{props.header}</h2>
      <div>
        <p>{props.description}</p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro;
