import { Request, Response, query, Application, } from "express";
import { DataTypes, Sequelize, INTEGER } from 'sequelize';
const express = require('express');

const bodyParser = require('body-parser');
const core = require('cors');
export let app: Application = express();
app.use(core());
// app.use(bodyParser({limit:'100mb'}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//    create data table
class DataNews {
    id?: Number;
    firstname?: string;
    lastname?: string;
    username?: string;
    password?: string;
    email?: string;
    phone?: any;
    image?: string;
   
    constructor() {

    }

}
//  create conection to data base
const mycondb = new Sequelize('zaha', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

let dunewsEntity = mycondb.define('admin', {
    id: {
        type: INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
});


mycondb.authenticate().then(r => {
    console.log('connected to database');
    dunewsEntity.sync({alter:true});
    // create CRUD
    //show data
    app.get('/', (req: Request, res: Response) => {
        dunewsEntity.findAll().then(r => {
            res.send({ status: 1, data: r });
        }).catch(e => {
            res.send({ status: 1, data: e });
        })
    });
    // app.get('/image', (req: Request, res: Response) => {

    // });
    // insert dat to database
    app.put('/', (req: Request, res: Response) => {
        console.log('..............',req.body);

        let news = dunewsEntity.build(req.body);
        news.save().then(r => {
            res.send({ status: 1, data: r })
            
        }).catch(e => {
            res.send({ status: 0, data: e })
        });
    });
    app.delete('/', (req: Request, res: Response) => {
        let id = req.query.id + '';
        dunewsEntity.findByPk(id).then(async r => {
            let x = r?.destroy();
            console.log(x);

            res.send({ status: 1, data: x });
        }).catch(e => {
            res.send({ status: 0, data: e });
        });
    });
    // update data
    app.patch('/', (req: Request, res: Response) => {
        let id = req.body.id + '';
        let News = dunewsEntity.build(req.body) as unknown as DataNews;
        dunewsEntity.findByPk(id).then(async r => {
            if (!r) {
                res.send({ status: 0, data: [] })
            } else {
                // r['contents'] = News.contents;
                // r['description'] = News.description;
                // r['datetime'] = News.datetime;
                // r['image'] = News.image;
                // r['gatorie'] = News.gatorie;
                let x = await r.save();
                res.status(200).send({ status: 1, data: x });
            }
        }).catch(e => {
            res.status(401).send({ status: 0, data: e });
        });
    });
});
