import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Tanya Sinclair",
    img: "images/image-tanya.jpg",
    review: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    job: "UX Engineer",
  },

  {
    id: 2,
    name: "John Tarkpor",
    img: "images/image-john.jpg",
    review: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    job: "Junior Front-end Developer",
  },
];

function App() {
  const [step, setStep] = useState(0);
  function handleNext() {
    if (step < 1) setStep((s) => s + 1);
  }

  function handlePrev() {
    if (step > 0) setStep((s) => s - 1);
  }

  console.log(step);

  return (
    <main>
      <div id="testimonials">
        <img src="images/pattern-curve.svg" className="img-curve" alt="curve" />
        <div className="container">
          <div className="box">
            <div className="testimonial-review">
              <img src="images/pattern-quotes.svg" className="img-quotes" alt="quotes" />
              <p className="description">{data[step].review}</p>
              <div className="person-info">
                <p>
                  {data[step].name} <span>{data[step].job}</span>
                </p>
              </div>
            </div>
            <div className="person">
              <img src={data[step].img} alt={data[step].name} className="img-hero" />
              <div className="buttons">
                <button className="btn" onClick={handlePrev}>
                  <img src="images/icon-prev.svg" alt="prev-btn" />
                </button>
                <button className="btn" onClick={handleNext}>
                  <img src="images/icon-next.svg" alt="next-btn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
