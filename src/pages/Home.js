import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToCreatePlan = () => {
    navigate("/subscribe");
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-section__text">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </div>
        <button onClick={goToCreatePlan}>Create your plan</button>
      </div>
      <div className="collection-section">
        <div className="collection-section__background">our collection</div>
        <div className="collection-section__beans">
          <div className="bean-card">
            <img
              className="bean-image"
              src="/assets/home/desktop/image-gran-espresso.png"
              alt="gran espresso"
            />
            <div className="bean-text">
              <h4>Gran Espresso</h4>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </div>
          </div>
          <div className="bean-card">
            <img
              className="bean-image"
              src="/assets/home/desktop/image-planalto.png"
              alt="Planalto"
            />
            <div className="bean-text">
              <h4>Planalto</h4>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts.
              </p>
            </div>
          </div>
          <div className="bean-card">
            <img
              className="bean-image"
              src="/assets/home/desktop/image-piccollo.png"
              alt="Piccollo"
            />
            <div className="bean-text">
              <h4>Piccollo</h4>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry.
              </p>
            </div>
          </div>
          <div className="bean-card">
            <img
              className="bean-image"
              src="/assets/home/desktop/image-danche.png"
              alt="Danche"
            />
            <div className="bean-text">
              <h4>Danche</h4>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="features-section__why">
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="features">
          <div className="feature-card">
            <img
              className="feature-image"
              src="/assets/home/desktop/icon-coffee-bean.svg"
              alt="coffee bean"
            />
            <div className="feature-card-text">
              <h4>Best quality</h4>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img
              className="feature-image"
              src="/assets/home/desktop/icon-gift.svg"
              alt="gift icon"
            />
            <div className="feature-card-text">
              <h4>Exclusive benefits</h4>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img
              className="feature-image"
              src="/assets/home/desktop/icon-truck.svg"
              alt="truck icon"
            />
            <div className="feature-card-text">
              <h4>Free shipping</h4>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-section">
        <h4>How it works</h4>
        <div className="steps-illustration">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="steps">
          <div className="step">
            <h1>01</h1>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="step">
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.{" "}
            </p>
          </div>
          <div className="step">
            <h1>03</h1>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
      <button className="main-button" onClick={goToCreatePlan}>
        Create your plan
      </button>
    </div>
  );
}
