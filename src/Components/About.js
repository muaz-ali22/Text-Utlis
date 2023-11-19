import React from "react";
export default function About() {
  return (
    <div>
      <div className="container my-3">
        <h1>About Us</h1>
      </div>
      <div className="container my-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <b>TextUtlis</b> gives you a way to analyze your text quickly
                and efficiently. Be it word count, characters count or convert
                upper case to lower case and lower case to upper case.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>TextUtlis</strong> is a free character countertool that
                provids instant character count and word count statistics for a
                given text. <strong>TextUtlis</strong> reports the number of
                words and characters. Thus it is a suitable for writing text
                with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This word counter software works in any web browser such as
                Chrome, Firefox, Internet Explorer and Safari.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
