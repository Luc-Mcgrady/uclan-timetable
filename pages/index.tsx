import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <h1>Your timetable but less awful</h1>

      <p>
        {"Does UClan's timetable look bad, feel awful, and taste like shit? Well fret no more."} <br />
        {"This timetable looks ok, feels ok and tastes like nothing."}
      </p>

      <p>
        {"I made this to address a series of issues"}
      </p>
      <ul>
        <li>{"The site asks you to log in every 5 seconds"}</li>
        <li>{"The site asks you to log in through a weird little popup box instead of an actual website."}</li>
        <li>{"The table morphs depending on how many lessons you have making it hard to tell whats where."}</li>
        <li>{"The lesson details are all kind of just in a blob."}</li>
      </ul>
    </>
  )
}

export default Home
