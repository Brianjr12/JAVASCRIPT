import { Router } from 'express';
const router = Router();

export default router.get('/', (req, resp) => {
  resp.json({title: "hello world"})  
})