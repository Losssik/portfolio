import photoOfMe from "../../photos/ja.jpg";

const Description = () => {
  return (
    <>
      <h2 className="header">about me</h2>
      <section className="description">
        <div className="description__flex">
          <div>
            <img src={photoOfMe} className="description__photo" />
          </div>
          <div className="description__text">
            <p>I am a self-taught frontend developer </p>
            <p>
              passionate about building interactive and accessible web
              applications. My goal is to become a full-stack developer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
