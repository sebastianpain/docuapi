import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import __dirname from './utils/index.js';
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'
import  config  from './config/config.js';

const app = express();
const PORT = process.env.PORT||8000;
mongoose.set('strictQuery',false) 
const connection = mongoose.connect(config.mongo.URL);

const swaggerOptions={
    definition:{
        openapi: '3.0.0',
        info:{
            title:' Documentacion de las APIs',
            description: ' Informacion de pets y de usuarios',
            version: '1.0.0',
            contact:{
                name: "Adelid Lopez",
                url:'linkedin.com/in/adelid-andrea-lópez-411868105/'
            }
        }
    },
   // apis: [`${process.cwd()}/src/docs/*.yaml`],
    //apis:[`${__dirname}/docs/**/*.yaml`]
    //apis:[`./docs/**/*.yaml`]
    apis:[`./src/docs/*.yaml`]
}

const spec =swaggerJsdoc(swaggerOptions)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(spec))

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))