import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href={"/timetable"}>WIP heres the timetable</Link>

      <form onSubmit={(e)=>{
			e.preventDefault()
		}}>
      <label htmlFor="">Username: </label>
			<input type="text"/>
      <label htmlFor="">Password: </label>
			<input type="password"/>
		</form>
    </>
  )
}

export default Home
