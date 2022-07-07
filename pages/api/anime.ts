import { latestEpisodesAdded } from 'tioanime'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: any) {
  await latestEpisodesAdded().then(data => res.status(200).json(data))
}
