// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getTimetable, { TimetableData } from 'lib/site/timetable'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = TimetableData

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email as string
  const date = req.body.date as string
  const auth = req.headers.authorization as string

  if (!email) {
    res.status(400).end("Missing \"email\" in body json")
    return
  }

  if (!auth) {
    res.status(400).end("Missing \"Authorization\" header")
    return
  }

  return getTimetable({email, auth, date})
    .then(data => {
      res.status(200).json(data)
    }) // Return the gotten data
    .catch(data => {
      res.setHeader("Content-Type", "text/html")
      res.status(400).end(`<h1>Error from UCLAN while scraping:</h1> ${data.response.data}`)
    })

}
