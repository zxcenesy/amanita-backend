import Product from "./Product.js";
import ProductService from "./ProductService.js";

class ProductController {

    async create(req, res) {
        try {
            const product = await ProductService.create(req.body);
            res.json(product);
        } catch (e) {
            res.status(500).json(e.message)
        }

    }


    async getAll(req, res) {
        try {
            const product = await ProductService.getAll();
            return res.json(product);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const product = await ProductService.getOne(req.params.id)
            return res.json(product);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await ProductService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const product = await ProductService.delete(req.params.id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}

export default new ProductController();