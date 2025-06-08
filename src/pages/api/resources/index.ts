import { Resource, ResourceList } from '@/lib/resources'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resource[]>
) {
  res.status(200).json(ResourceList)
}
