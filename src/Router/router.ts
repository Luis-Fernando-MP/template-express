import { Request, Router, Response } from 'express'

const router: Router = Router()

router.get('/', (_: Request, res: Response) => res.json('welcome'))
// router.use('/*', name)
export default router
