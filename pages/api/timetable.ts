// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import basicAuth from 'lib/auth/basicAuth'
import getTimetable, { TimetableData } from 'lib/site/timetable'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = TimetableData

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email as string
  const password = req.body.password as string
  const date = req.body.date as string

  if (!email) {
    res.status(400).end("Missing \"email\" in body json")
    return
  }

  if (!password) {
    res.status(400).end("Missing \"password\" in body json")
    return
  }

  return getTimetable({email,auth: basicAuth(email, password), date})
    .then(data => {
      res.status(200).json(data)
    }) // Return the gotten data
    .catch(data => {
      res.setHeader("Content-Type", "text/html")
      res.status(400).end(`<h1>Error from UCLAN while scraping:</h1> ${data.response.data}`)
    })

}
