import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1>Your timetable but less awful</h1>

      <p>
        {"Does UClan's timetable look ok, feel bad, and taste like awful? Well fret no more."} <br />
        {"This timetable looks ok, feels ok and tastes like nothing."}
      </p>

      <p>
        {"I made this to address a series of issues"}
      </p>
      <ul>
        <li>{"The site asks you to log in through a weird little popup box instead of an actual website."}</li>
        <li>{"The table morphs depending on how many lessons you have making it hard to tell whats where."}</li>
        <li>{"The lesson details are all kind of just in a blob."}</li>
        <li>{"You have to reload the page whenever you want to change the week. (Which wouldent matter if the loadtime wasnt ages)"}</li>
        <li>{"The site asks you to log in every 5 seconds (they might have actually fixed this)"}</li>
        <li>{"They made 2 extra versions of the timetable that load fast but as a tradeoff dont work; at all."}</li>
      </ul>

      <p>
        {"In honesty the timetable site isn't \"unusable\". It just feels strangely cobbled together. There are many blatant flaws which are easily solvable (as evidenced by me making this site in a day)."}
      </p>

      <footer>
        This site is open source and on <Link href="https://github.com/Luc-mcgrady/uclan-timetable">Github</Link>
      </footer>
    </>
  )
}

export default Home
