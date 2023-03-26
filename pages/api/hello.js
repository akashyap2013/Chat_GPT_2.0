// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../database/conn"

export default function handler(req, res) {
  connect().catch((err) => res.status(400).json({ error : "Database connection error"}))
  res.status(200).json({ name: 'John Doe' })
}
