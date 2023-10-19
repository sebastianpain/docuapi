import { expect } from "chai";
import supertest from "supertest";
import { dropPets } from "./setup.test.js";

const requeter = supertest('http://localhost:8080')

describe('Pets router test Case',()=>{
    before(async()=>{
        await dropPets();
    })
    
    
    it ('[POST] /api/pets - create a pet', async()=>{
        
    const mockPet ={
        name:'Pepito',
        specie:'Ave',
        birthDate:'19-06-2000'
    }
    
    const result = await requeter.post('/api/pets').send(mockPet)
    //console.log(result);
    expect(result.statusCode).to.be.eql(200)
    expect (result.body.payload.adopted).to.be.eql(false)
    })
    it ('[POST] /api/pets - response 400 when send wrong date', async()=>{
        
    const mockPet ={
        name:'Pepito',
        birthDate:'19-06-2000'
    }
    
    const result = await requeter.post('/api/pets').send(mockPet)
    //console.log(result);
    expect(result.statusCode).to.be.eql(400)
    })
})