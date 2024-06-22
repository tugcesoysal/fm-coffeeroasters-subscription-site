import React from "react";
import Form from "../components/Form";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="hero-section">
        <div className="hero-section__text">
          <h1>Create a plan</h1>
          <p>
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </div>
      </div>
      <div className="how-section">
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
      <Form />
    </div>
  );
}

export default Subscribe;
