import mongoose from "mongoose";
import User from '../../src/dao/Users.dao.js';
import chai from 'chai'


const expect = chai.expect;//variable comun en temas de pruebas
mongoose.connect("mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority")
describe('Test DAO User Chai',()=>{
    
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
     
 
     it('test 1 - Obtener datos en formato arreglo utilizando chai', async function(){
         this.timeout(5000)
         const result = await this.UserDao.get()
         //assert.strictEqual(Array.isArray(result),true) 
         expect(result).to.be.deep.equal([])
        // expect(1).to.equal(1)
         
     })

     it('test 2 - crear datos de usuario con Chai', async function(){
        this.timeout(5000)
        let mockUser={
           first_name:"Rogelio",
           last_name:"Lopez",
           email:"correo@correo.co",
           password:"123"
        }
        const result= await this.UserDao.save(mockUser)
        //console.log(result)
        expect(mongoose.Types.ObjectId.isValid(result._id)).to.be.true
          
      })
      it('test 3 - Un usuario tiene mail', async function(){
        let mockUser={
           first_name:"Rogelio",
           last_name:"Lopez",
           email:"correo@correo.co1",
           password:"123"
        }
        const result= await this.UserDao.save(mockUser)
        const userMail = await this.UserDao.getBy({email :result.email})
        expect (userMail.email).to.be.equal("correo@correo.co1")
        
  
          })
          
          it('test 4 - Obtener los usuarios en un formato de arreglo', async function(){
            let mockUser={
               first_name:"Rogelio",
               last_name:"Lopez",
               email:"correo@correo.co1",
               password:"123"
            }
            const result= await this.UserDao.save(mockUser)
            const userMail = await this.UserDao.getBy({email :result.email})
            expect (userMail.email).to.deep.include("@")
      
              })
        })