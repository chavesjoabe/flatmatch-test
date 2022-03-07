import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Routes from './Routes.js';
dotenv.config();

class App {
    server = express();
    port = process.env.PORT || 8080;
    databaseUrl = process.env.DATABASE_URL;
    constructor() {
        this.middlewares();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(Routes);
    }

    createServer() {
        this.server.listen(this.port, () => {
            console.log('server is running in port', this.port);
        });
    }

    createDatabaseConnection() {
        mongoose.connect(this.databaseUrl);
        const db = mongoose.connection;
        db.on('open', () => {
            console.log('database connected');
        });
        db.on('error', () => {
            console.log('error on database connection');
        });
    }
}

export default new App();
