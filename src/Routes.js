import express from 'express';
import mongoose from 'mongoose';

class Routes {
    routes = express.Router();
    constructor() {
        this.loadRoutes();
    }

    loadRoutes() {
        this.routes.get('/all-chats', async (req, res) => {
            const chatSchemasModel = mongoose.model('chatSchemas', {});

            const chatSchemas = await chatSchemasModel.find();

            return res.json(chatSchemas);
        });
    }
}
export default new Routes().routes;
