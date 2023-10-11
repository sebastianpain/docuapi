import mongoose, { mongo } from "mongoose";
import User from '../src/dao/Users.dao.js';
const assert= assert.strict

import Assert from "assert";

describe('Test DAO',()=>{
    before(function(){
        this.UserDao = new User();
        mongoose.connect("mongodb+srv://CoderUSer:123@codercluster.w4adegs.mongodb.net/=?retryWrites=true&w=majority")

    })
    beforeEach(function(){
        mongoose.connection.collection('users').deleteMany({
        })
        after(function(){
            mongoose.connection.close();
        })
    })
    it('test1-obtener datos en formato arreglo',async function(){
        const result =await this.UserDao.get()
        console.log("este es el resultado"=result)
        assert.strictEqual(Array.isArray(result),true)
    })
})