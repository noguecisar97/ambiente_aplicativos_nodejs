import { Response, Request, Router } from 'express'

const route = Router()

route.get('/clientes', (req: Request, res: Response) => {
  const { method } = req

  res.status(200).json({ status: 'sucesso', method, message: 'Choraaaaa' })
})

export default route
