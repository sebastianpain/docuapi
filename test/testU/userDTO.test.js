import UserDTO from '../../src/dto/User.dto.js';
import {createHash, passwordValidation} from '../../src/utils/index.js'

import chai from 'chai'

const expect = chai.expect;

const mockUser={
    first_name:"Rogelio",
    last_name:"Lopez",
    email:"correo@correo.co",
    password:"123"
 }
 describe('Test Hash del DTO',()=>{
   
 
     
     
 
     it('test 1 -comparar los pass y validar los hash', async function(){
        
     const hash = await createHash(mockUser.password)
     expect(hash).to.not.equal(mockUser.password)
     expect(hash).to.have.length(60)
     expect(hash).to.be.a("string")
       
         
        //assert.strictEqual(Array.isArray(result),true) 
       
     })
     it('test 2 - comparar los pass hash alterados y que no son validar', async function(){
        let hash = await createHash(mockUser,password)
        hash = hash +"a"
        const match = await passwordValidation(mockUser,hash)
        expect(match).to.be.false
      
        
       
         
        //assert.strictEqual(Array.isArray(result),true) 
       
     })
    })