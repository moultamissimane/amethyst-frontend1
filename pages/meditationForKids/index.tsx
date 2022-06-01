import React from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import LottieMoon from '../../components/LottieMoon'
import Footer from '../../components/Footer'
import Image from 'next/image'

const index: NextPage = () => {
  return (
    <div className=" min-w-screen relative min-h-screen overflow-auto bg-black">
      <Header />
      <div className=" mt-24">
        <div className="flex flex-wrap  items-center justify-between px-2 md:px-0">
          <div className="mt-5 ml-10 duration-500 ease-in-out hover:rotate-6 hover:scale-125 lg:py-24">
            <LottieMoon />
          </div>
          <div className="mt-20 w-full lg:w-6/12">
            <p className="mt-5 text-center indent-8 text-xl font-bold text-white lg:w-10/12">
              You spend one-third of your life sleeping and by now you should be
              pretty good at it. Unfortunately, for many of us, sleep isn't
              restful. We toss and turn at night, wake up tired in the morning
              and miss out on the health benefits a good night's sleep can give
              us.With Amethyst, you'll learn how to create healthy sleep habits
              and improve your chances for a more restful night's sleep.
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
              <div className="mx-auto mt-1 h-3 w-1 rounded-xl border-2 border-white"></div>
            </div>
            <span className="-ml-8 font-bold text-white ">Scroll Down</span>
          </div>
        </div>

        <div className="container ml-32 grid w-full bg-black py-20 text-white md:grid-cols-2">
          <div className=" my-auto p-8">
            <div className=" mb-5 text-3xl font-semibold">
              Want to know about meditation for kids?
            </div>
            <div className=" mb-7 text-lg">
              Teaching mindfulness to kids can help shape three critical skills
              developed in early childhood: paying attention and remembering
              information, shifting back and forth between tasks, and behaving
              appropriately with others. These abilities are known as executive
              functions and they are essential for more advanced tasks like
              planning, reasoning, problem-solving, and positive social
              relationships.
            </div>
            <div className=" mb-5 text-3xl font-semibold">
              Guided Mindfulness Meditation for Kids
            </div>
            <div className=" text-lg">
              Once your child is comfortable with the idea of meditation, you
              can offer them tools to refine their own practice. Here are three
              guided practices developed for kids. Feel free to join your child
              in these meditations if it helps encourage focus.
              <br />
              <span className="text-lg text-purple-400">1. </span>
              <span className="text-lg font-bold underline ">
                Lie down somewhere comfortable.
              </span>
              Let your arms and legs fall to the ground. Close your eyes gently.
              <br />
              <span className="text-lg text-purple-400">2. </span>
              <span className="text-lg font-bold underline">
                Start to notice how your body changes with each breath you take.
              </span>
              Each time you breathe, your belly moves up, and your belly moves
              down. If it is easier, put a hand on your belly. Or if you want,
              put a stuffed animal there.
              <br />
              <span className="text-lg text-purple-400">3. </span>
              <span className="text-lg font-bold underline">
                Each time you breathe, your belly moves.
              </span>
              Your hand, or your toy, rises, and then falls. See if you can
              count ten breaths that way. Breathing in, one, breathing out, one.
              <br />
              <span className="text-lg text-purple-400">4. </span>
              <span className="text-lg font-bold underline">
                When you lose count, don't worry about it.
              </span>
              That's normal, and happens to everyone. Come back to whatever
              number you last remember.
              <br />
              <span className="text-lg text-purple-400">5. </span>
              <span className="text-lg font-bold underline">
                Now, shift your attention to your day.
              </span>
              Breathing in, focus on your breath as your belly goes up.
              Breathing out, focus on something that went well today.
              <br />
              <span className="text-lg text-purple-400">6. </span>
              <span className="text-lg font-bold underline">
                With each breath:
              </span>
              breathing in, noticing your belly move, and with each breath out,
              noticing something that went well today.
              <br />
              <span className="text-lg text-violet-400">7. </span>
              <span className="text-lg font-bold underline">
                Now, picture something about yourself that makes you proud.
              </span>
              Breathing in, focus on your belly moving. Breathing out, picture
              something that makes you proud of yourself. If nothing comes to
              mind, that sometimes happens. If that's how you feel, picture what
              you'd wish for yourself instead.
              <br />
              <span className="text-lg text-violet-400">8. </span>
              <span className="text-lg font-bold underline">
                Finally, bring someone to mind who makes you happy.
              </span>
              Before we end, try one more practice. Breathing in, notice your
              belly move. And now, breathing out, picture someone who makes you
              happy.
              <br />
              <span className="text-lg text-violet-400">9. </span>
              <span className="text-lg font-bold underline">
                As you come to the end of this practice,
              </span>
              take a few deep breaths, and start to wiggle your arms and legs.
              Pause and decide what you'd like to do next.
              <br />
              <span className="text-lg text-purple-400">10. </span>
              <span className="text-lg font-bold underline">
                It's normal to have thoughts that make us feel scared or bad.
              </span>
              We should never ignore anything important, but it's useful to
              focus on the rest of our lives too. Take a few minutes every day
              to notice what has gone well, and see what happens next.
            </div>
          </div>
          <div className=" mx-5 max-h-96 flex-none overflow-hidden rounded-lg">
            <div>
              <img src="/images/Screenshot8.png" alt="forest" />
            </div>
          </div>
        </div>

        <div className="container ml-32 grid w-full py-20 text-white md:grid-cols-2">
          <div className="mx-5 max-h-96  overflow-hidden rounded-lg">
            <div>
              <img src="/images/Screenshot6.png" alt="forest" />
            </div>
          </div>
          <div className=" my-auto p-8">
            <div className=" mb-5 text-3xl font-semibold">
              5 Things Mindful Families Do Differently
            </div>
            <div className=" text-lg">
              <span className="text-xl text-purple-400">1. </span>
              <span className="text-xl font-bold underline">
                Embrace Imperfection
              </span>
              <br />
              You are going to make mistakes, you are going to hurt your
              children's feelings, and you are not going to be able to show up
              in all the ways you want to or the ways your children want you to,
              but none of that makes you a bad parent—it only makes you a human
              one. When you can move into a place of acceptance of this you are
              able to shift into a greater ease and grace within yourself.
              <br />
              <span className="text-xl text-purple-400">2. </span>
              <span className="text-xl font-bold underline">
                Listen with Curiosity
              </span>
              <br />
              When we pause and listen to each other more in our lives, we can
              engage the experiences in our family with a growth mindset. We can
              see the struggles and triumphs as opportunities for learning and
              growth. Instead of judging each other, we can get better at
              recognizing when we don't understand where the other person is
              coming from, lean in with curiosity and say, “tell me more.” Or we
              might try and stand in their shoes to understand their perspective
              by asking ourselves, “why might they be acting this way?”
              <br />
              <span className="text-xl text-purple-400">3. </span>
              <span className="text-xl font-bold underline">
                Communicate Courageously
              </span>
              <br />
              Being clear and honest with each other about what you need and how
              you feel is ultimately an act of kindness that creates trust and
              connection. This means showing up with our partners and kids with
              an open heart and an open mind. It builds on listening with
              curiosity and creates space for everyone to feel comfortable to
              share how they feel and what they need.
              <br />
              <span className="text-xl text-purple-400">4. </span>
              <span className="text-xl font-bold underline">
                Practice Appreciation and Gratitude
              </span>
              <br />
              While words of affirmation may or may not be your primary love
              language, we all want to be seen and appreciated and there's a
              surprisingly simple way of doing this that can have huge
              benefits—intentionally practicing being appreciative and
              expressing gratitude to one another. By taking the time to
              acknowledge our kids or our partner when they empty the dishwasher
              or are ready on time, we can shift the culture of the household
              from demanding and frustrated to cooperative and grateful.
              <br />
              <span className="text-xl text-purple-400">5. </span>
              <span className="text-xl font-bold underline">
                Remember to Play and Have Fun
              </span>
              <br />
              It seems silly to say that any of us would forget to have fun and
              enjoy each other but it's more common than you think. Raising
              children is probably the most important job you will ever be
              tasked with and the pressure of raising good humans can be
              weighty. So much so that we can fall into a pattern of taking
              things too seriously and being overly * focused on tasks (chores,
              homework, activities, etc.) that we lose the enjoyment of being
              together.
            </div>
          </div>
        </div>
        <Footer />
        {/* </div> */}
      </div>
    </div>
  )
}

export default index
