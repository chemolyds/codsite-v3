import { Resource, ResourceList, ResourceTags } from '@/lib/resources'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resource[]>
) {
  const tag = req.query.tag as ResourceTags
  res.status(200).json(ResourceList.filter((r) => r.tags.includes(tag)))
}
