import React from "react";

function FAQ() {
  return (
    <div>
      <div className=" text-justify mx-auto px-10 md:px-10">
        <section className="mb-14">
          <h2 className="mb-16 text-center text-neutral-50 text-3xl font-bold">
            Frequently asked questions
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="mb-6 md:mb-8 lg:mb-12">
              <p className="mb-4 text-white text-2xl font-bold">What you do in tudar?</p>
              <p className="text-xl text-neutral-300">
                Allow students to showcase their talents and share knowledge
                about tulu culture. In todays one way race towards globalization
                there is need to preserve, understand and practice over regional
                knowledge in order to have sustained ecosystem. We tudar create
                awareness among students about indigenous culture.
              </p>
            </div>

            <div className="mb-6 md:mb-8 lg:mb-12">
              <p className="mb-4 text-white text-2xl font-bold">
                What are your objectives?
              </p>
              <p className="text-xl text-neutral-300">
                Create awarness among students about indigenous culture. Offer
                students an opportunity to serve their community, expand
                leadership skills of students by conducting various activities
                like debates, acting, speech, essay writing and other
                outdoor activities too.
              </p>
            </div>

            <div className="mb-6 md:mb-8 lg:mb-12">
              <p className="mb-4 text-white text-2xl font-bold">
                How to be a member of tudar club?
              </p>
              <p className="text-xl text-neutral-300">
                Every year registration for Tudar club will be open to all
                branches at NMAMIT. People intrested in contributing and
                exploring the Tulu culture are welcome to the club. All you need
                to do is click "register" button and you are good to go.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQ;
