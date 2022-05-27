import React from 'react'

const Cards = () => {
  return (
    <section className="bg-white">
          <div className="container mx-auto p-10 px-6">
            <h2 className="mb-6 flex justify-center text-4xl text-white">hi</h2>
            <div className="items-center lg:flex">
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src="/images/LandingPage.png"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <p
                        className="
                        mb-4 
                        block
                        text-xl
                        font-semibold
                        text-white
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        "
                      >
                        50+ Best sounds to help get some sleep
                      </p>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-white">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="/sleep"
                      className="
                     inline-block
                     rounded-full
                     border border-[#E5E7EB]
                     py-2
                     px-7 text-base
                     font-medium
                     text-white transition hover:bg-blue-600
                     "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src="/images/meditation.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <p
                        className="
                        mb-4
                         block
                        text-xl
                        font-semibold
                        text-white
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        "
                      >
                        The ultimate guide to best meditate
                      </p>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-white">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="/sleep"
                      className="
                     inline-block
                     rounded-full
                    border
                     border-[#E5E7EB]
                     py-2 
                     px-7
                     text-base
                     font-medium text-white transition hover:bg-blue-600
                     "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <p
                        className="
                        mb-4
                        block
                        text-xl
                        font-semibold
                        text-white
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        "
                      >
                        Creative Card Component designs graphic elements
                      </p>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-white">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
                     inline-block
                     rounded-full border
                     border-[#E5E7EB]
                     py-2 px-7
                     text-base
                     font-medium text-white transition
                     hover:bg-blue-600
                     "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Cards