// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../../database/conn"
import { getChat, createChat } from '../../../controller/messages.controller'

export default async function handler(req, res) {
  connect().catch((err) => res.status(400).json({ error : "Database connection error"}))

  switch(req.method){
    case 'GET' :
        await getChat(req, res);
        break;
    case 'POST':
        await createChat(req, res)
        break;
    default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(400).json({ error : `Method ${method} not allowed`});
        break;
  }
}
