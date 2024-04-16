import Profile from "./utility/profile";

export default function TeamSection() {
  return (
    <section className="container team">
      <h1 className="text-xl ">
        <span className="unique-bg">Meet the Team </span>
      </h1>
      <div className="team-card-container">
        <div className="card fade-up">
          <Profile />
          <div className="card-text">
            <div className="name text-l">George O.</div>
            <div className="profession text-md">Creative Directors</div>
          </div>
        </div>
        <div className="card fade-up">
          <Profile />
          <div className="card-text">
            <div className="name text-l">George O.</div>
            <div className="profession text-md">Creative Directors</div>
            <div className="see-more text-md">See more</div>
          </div>
        </div>
        <div className="card fade-up">
          <Profile />
          <div className="card-text">
            <div className="name text-l">George O.</div>
            <div className="profession text-md">Creative Directors</div>
          </div>
        </div>
        <div className="card fade-up">
          <Profile />
          <div className="card-text">
            <div className="name text-l">George O.</div>
            <div className="profession text-md">Creative Directors</div>
          </div>
        </div>
        <div className="card fade-up">
          <Profile />
          <div className="card-text">
            <div className="name text-l">George O.</div>
            <div className="profession text-md">Creative Directors</div>
          </div>
        </div>
        <div className="card fade-up">
          <Profile />
          <div className="card-text">
            <div className="name text-l">George O.</div>
            <div className="profession text-md">Creative Directors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
