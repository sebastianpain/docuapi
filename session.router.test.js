import { expect } from "chai";
import supertest from "supertest";
import { dropPets } from "./setup.test.js";
export { dropUser } from '../../setup.test.js';

const requeter = supertest("http://localhost:8080");

describe('Session router test Case',()=>{
   
    it ('[POST] /api/sessions/register - should sign up',async()=>{
const mockUser={
    name:"Pepito",
    specie:'Ave',
    birthDate:'19-06-2000'
}
const result =await requeter.post('/api/pets')
    })
    })
