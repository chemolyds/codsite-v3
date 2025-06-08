import { TagOption, TagOptions } from '@/lib/resources'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TagOption[]>
) {
  res.status(200).json(TagOptions)
}
