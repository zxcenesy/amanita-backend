import Router from 'express';
import ProductController from "./ProductController.js";

const router = new Router()


router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id', ProductController.getOne)
router.put('/product', ProductController.update)
router.delete('/product/:id', ProductController.delete)

export default router;