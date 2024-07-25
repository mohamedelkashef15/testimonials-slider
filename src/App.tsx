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
    review: `  “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    job: "Junior Front-end Developer",
  },
];

function App() {
  return (
    <main>
      <section id="testimonials">
        <img src="images/pattern-curve.svg" className="img-curve" alt="curve" />
        <div className="container">
          <div className="box">
            <div className="testimonial-review">
              <img src="images/pattern-quotes.svg" className="img-quotes" alt="quotes" />
              <p className="description">
                " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend
                this course enough. I'm now in the job of my dreams and so excited about the future."
              </p>
              <div className="person-info">
                <p>
                  Tanya Sinclair <span>UX Engineer</span>
                </p>
              </div>
            </div>
            <div className="person">
              <img src="images/image-tanya.jpg" alt="Tanya" className="img-hero" />
              <div className="buttons">
                <button className="btn">
                  <img src="images/icon-prev.svg" alt="" />
                </button>
                <button className="btn">
                  <img src="images/icon-next.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
