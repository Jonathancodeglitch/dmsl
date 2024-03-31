import Profile from './utility/profile';
import star from '../assets/image/star.svg';
import right from '../assets/image/Right.svg';
import left from '../assets/image/Left.svg';

export default function TestimonialSection() {
  return (
    <section className="testimonial">
      <h1 className="text-xl">Testimonial</h1>
      <h3 className="text-l">Over 18 happy clients.</h3>
      <div className="testimonial_card-container">
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card active">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
        {/* card begin */}
        <div className="testimonial_card">
          <Profile />

          <div className="star-container">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
          </div>

          <p className="desc text-md">
            “My experience with Mark is a complete success, from customer
            service, wide rang of products, clean store, purchasing experience
          </p>

          <p className="name text-md">Samantha Kate</p>

          <p className="title text-md">CEO of Floatcom</p>
        </div>
        {/* card ends */}
      </div>

      <div className="testimonial_button container">
        <button>
          <img src={left} alt="right button icon" />
        </button>
        <button>
          <img src={right} alt="right button icon" />
        </button>
      </div>
    </section>
  );
}
