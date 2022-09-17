import { allowCorsFor } from 'middleware/cors'

export default async function handler(req, res) {
  if (req.method == 'OPTIONS') {
    res.setHeader('Allow', 'OPTIONS')
    return res.status(202).json({})
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }

  await allowCorsFor(['GET'])(req, res)

  res.status(200).json({ name: 'John Doe' })
}
