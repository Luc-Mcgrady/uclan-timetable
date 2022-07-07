// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getTimetable, { Timetable } from 'lib/site/timetable'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Timetable

export default async function handler(
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


  res.status(200).json(await getTimetable(email, auth))
}
