import React from 'react'
import { NextPage } from 'next'
import Header from '../../../components/Header'
import LottieMoon from '../../../components/LottieMoon'
import Footer from '../../../components/Footer'

const index: NextPage = () => {
  return (
    <div className=" min-w-screen relative min-h-screen overflow-auto bg-black">
      <Header />
      <div className=" mt-24">
        <div className="flex flex-wrap  items-center justify-between px-2 md:px-0">
          <div className="mt-5 ml-10 duration-500 ease-in-out hover:rotate-6 hover:scale-125 lg:py-24">
            <video
              loop
              autoPlay
              src="../../../public/GemStone.mp4"
              className=""
            ></video>
          </div>
          <div className="mt-20 w-full lg:w-6/12">
            <p className="mt-5 text-center indent-8 text-xl font-bold text-white lg:w-10/12">
              I'm a firm believer that you should choose your crystals based on
              your intuition. This is because your intuition knows what you need
              more than your headspace does. Trust your gut.
            </p>
            <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out hover:rotate-6 hover:scale-125">
              <a
                href="/#"
                className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-purple-500"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-10 flex cursor-pointer items-center justify-center space-y-4">
          <div className="animate-pulse" title="Scroll to Next Section">
            <div className="h-7 w-4 animate-bounce rounded-lg border-2 border-white">
              <div className="mx-auto mt-1 h-3 w-2 rounded-xl border-2 border-white"></div>
            </div>
            <span className="-ml-8 font-bold text-white">Scroll Down</span>
          </div>
        </div>

        <div className="container ml-32 grid w-full bg-black py-20 text-white md:grid-cols-2">
          <div className=" my-auto p-8">
            <div className=" mb-5 text-3xl font-semibold">
              Why finding time to meditate is important
            </div>
            <div className=" mb-7 text-lg">
              There's an old saying that if you can't find 10 minutes in the day
              to meditate, you probably need 20 minutes. In other words, if life
              is so hectic that you can't spend 10 minutes being mindful and
              present, then that's probably a sign you need to push pause and
              reassess your priorities. It may be that you need to scale back in
              some areas of your life in order to make room for more valuable
              and healthful activities — like taking care of your mind. How can
              you expect to manage the stress of so many commitments and
              responsibilities if you're constantly overwhelmed by difficult
              thoughts and emotions? The research underscores the negative
              impact that not prioritizing our minds can have on our lives.
              Psychologists from Harvard University found that people spend
              almost 47 percent of their waking hours lost in thought. This
              constant mind-wandering is a direct cause of unhappiness. Thinking
              about things that happened in the past, might happen in the
              future, or may never happen at all almost half of the time can
              take a serious toll on mental health. After all, you rely on your
              mind day in and day for so many things — thinking, being creative,
              solving problems, interacting with others, just to name a few. You
              owe it to your mind to find time to meditate so you can have an
              understanding and appreciation of the present moment and the
              capacity to perform at your very best at everything that you do.
              Not only that but thousands of studies show that mindfulness
              meditation can have significant benefits on mental, physical, and
              emotional health including reducing stress, promoting healthy,
              restful sleep, increasing focus, and cultivating compassion.
              Through meditation, you can actually rewire your brain to enhance
              positive traits such as decision-making and compassion, and
              diminish less positive ones such as fear and anxiety. So, by
              adding meditation to your to-do list, you're ultimately removing
              some of the stress and chaos.
            </div>
          </div>
          <div className=" mx-5 max-h-96 flex-none overflow-hidden rounded-lg">
            <div className="">
              <img src="/images/RoseQuote.jpg" alt="Selenite" />
            </div>
          </div>
        </div>

        <div className="container ml-32 grid w-full py-20 text-white md:grid-cols-2">
          <div className="mx-5 max-h-96  overflow-hidden rounded-lg">
            <div>
              <img src="/images/allGems.jpg" alt="All gems" />
            </div>
          </div>
          <div className=" my-auto p-8">
            <div className=" mb-5 text-3xl font-semibold">
              The 6 best gemstones for meditation
            </div>
            <div className=" text-lg">
              <span className="text-xl">
                If you're still unsure of what crystals you want to work with,
                these are some of the best crystals for meditation that can have
                powerful effects no matter your intention.
              </span>
              <br />
              These crystals can be seen as great all rounders and are the
              perfect crystals to reach for when you're unsure of what you want
              to work with!
              <br />
              <span className="text-xl font-bold underline">ROSE QUARTZ</span>
              <div className="duration-500 ease-in-out hover:scale-90">
                <img
                  src="/images/rose-quartz-png-5-Transparent-Images.png"
                  alt="Clear Quartz"
                />
              </div>
              <br />
              Rose Quartz is the stone of universal love. It is associated with
              the heart chakra and has powerful properties that help us to
              connect with our feelings of unconditional love, compassion and
              forgiveness.
              <br />
              Rose quartz can be a very helpful stone to meditate with when you
              are struggling with self love or not some help opening up and
              trusting the universe.
              <br />
              It is an incredibly calming stone which can make you feel
              completely full of love and peace during meditation.
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default index
