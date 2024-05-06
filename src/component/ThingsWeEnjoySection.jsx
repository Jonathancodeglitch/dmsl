export default function ThingsWeEnjoySection() {
  return (
    <section className="thing-we-enjoy-container">
      <div className="container thing-we-enjoy">
        <div className="left">
          <h1 className="thing-we-enjoy_title text-xl">
            <span className="unique-bg">
              Full Stack Digital And Media Services
            </span>
          </h1>
          <ul className="left-content">
            <li className="point fade-up">
              <span className="point_number">01</span>
              <div className="point_content">
                <h3 className="text-l">Content writing</h3>
                <p className="text-md">
                  Crafting compelling content that captivates your audience and
                  drives engagement - every word, every story, every success .
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">02</div>
              <div className="point_content">
                <h3 className="text-l">Search Engine Optimisation (SEO)</h3>
                <p className="text-md">
                  Stuck in SEO quicksand? We can help! We tackle SEO challenges,
                  from low traffic to flat growth. We analyze your entire online
                  presence and craft custom solutions to boost your rankings
                  Leave the headache to us and achieve digital dominance.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">03</div>
              <div className="point_content">
                <h3 className="text-l">Video editing</h3>
                <p className="text-md">
                  Elevate your brand with captivating visuals and seamless
                  storytelling – our expert video editing brings your vision to
                  life.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">04</div>
              <div className="point_content">
                <h3 className="text-l">Social Media Marketing</h3>
                <p className="text-md">
                  Stand out in the crowded digital space, spark engagement and
                  build a community. Our strategic social media helps your
                  brand’s distinct identity stand apart online.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* right begins */}
        <div className="right">
          <ul className="right-content">
            <li className="point fade-up">
              <div className="point_number">05</div>
              <div className="point_content">
                <h3 className="text-l">Graphic Design</h3>
                <p className="text-md">
                  From logos to layouts, our innovative and user centric graphic
                  design transforms your brand into a visual entity that speaks
                  volumes and remains memorable.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">06</div>
              <div className="point_content">
                <h3 className="text-l">Website design & development</h3>
                <p className="text-md">
                  Your online presence is your digital storefront - let us
                  create a stunning website that not only attracts visitors but
                  gives them a smooth patronage experience
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">07</div>
              <div className="point_content">
                <h3 className="text-l">Social media management</h3>
                <p className="text-md">
                  Grow your online community. Stay connected & engaged. We craft
                  strategy, content & manage social media to build lasting
                  connections with your audience.
                </p>
              </div>
            </li>
            <li className="point fade-up">
              <div className="point_number">08</div>
              <div className="point_content">
                <h3 className="text-l">Mobile & Web App Development</h3>
                <p className="text-md">
                  Looking to scale your business? we can help you leverage
                  technology to achieve that by creating custom mobile or web
                  apps that streamline user engagement, making it simpler for
                  multiple clients to connect with your services.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
