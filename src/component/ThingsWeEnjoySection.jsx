export default function ThingsWeEnjoySection() {
  return (
    <section className="thing-we-enjoy-container">
      <div className="container thing-we-enjoy">
        <div className="left">
          <h1 className="thing-we-enjoy_title text-xl">
            <span className="unique-bg">Things We Enjoy</span>
          </h1>
          <ul className="left-content">
            <li className="point fade-up">
              <span className="point_number">01</span>
              <div className="point_content">
                <h3 className="text-l">Content writing</h3>
                <p className="text-md">
                  Words that resonate. Stories that inspire. Content that drives
                  results.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">02</div>
              <div className="point_content">
                <h3 className="text-l">Video Editing</h3>
                <p className="text-md">
                  Transforming raw footage into polished masterpieces that
                  captivate your audience.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">03</div>
              <div className="point_content">
                <h3 className="text-l">Social media marketing</h3>
                <p className="text-md">
                  Elevating your online presence with targeted strategies that
                  spark engagement.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* right begins */}
        <div className="right">
          <ul className="right-content">
            <li className="point fade-up">
              <div className="point_number">04</div>
              <div className="point_content">
                <h3 className="text-l">Graphic Design</h3>
                <p className="text-md">
                  From logos to infographics, we craft visuals that leave a
                  lasting impression.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">05</div>
              <div className="point_content">
                <h3 className="text-l">Website design & development</h3>
                <p className="text-md">
                  Bringing your brand to life with stunning websites that
                  captivate and convert.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">06</div>
              <div className="point_content">
                <h3 className="text-l">Social media management</h3>
                <p className="text-md">
                  Nurturing your online community with strategic planning and
                  engaging content.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
