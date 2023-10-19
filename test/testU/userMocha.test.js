import mongoose from "mongoose";
import User from '../../src/dao/Users.dao.js';
import Assert from "assert";

const assert= Assert.strict;

describe('Test DAO User',()=>{
   before(function(){
      this.UserDao = new User();
      mongoose.connect("mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority")
    })

    beforeEach(function(){
        mongoose.connection.collection('users').deleteMany({})
        
        this.timeout(5000)
        
    })
       after(function(){
        mongoose.connection.close();
       })
    

    it('test 1 - Obtener datos en formato arreglo', async function(){
this.timeout(5000)
        const result = await this.UserDao.get()
        
        assert.strictEqual(Array.isArray(result),true) 
        
    })
    it('test 2 - crear datos de un usuario', async function(){
      let mockUser={
         first_name:"Rogelio",
         last_name:"Lopez",
         email:"correo@correo.co",
         password:"123"
      }
      const result= await this.UserDao.save(mockUser)

      
       assert.ok(result._id)
        
    })
    it('test 3 - insertar un arreglo de mascotas por defecto', async function(){
      let mockUser={
         first_name:"Rogelio",
         last_name:"Lopez",
         email:"correo@correo.co",
         password:"123"
      }
      const result= await this.UserDao.save(mockUser)
      assert.ok(result._id)
      assert.deepStrictEqual(result.pets,[])
        
    })
    it('test 4 - Un usuario tiene mail', async function(){
      let mockUser={
         first_name:"Rogelio",
         last_name:"Lopez",
         email:"correo@correo.co1",
         password:"123"
      }
      const result= await this.UserDao.save(mockUser)
      const userMail = await this.UserDao.getBy({email:result.email})
      assert.ok(result._id)
      assert.deepStrictEqual(result.pets,[])
      assert.strictEqual(typeof userMail,'object')

        
    })
   })

 
        
  