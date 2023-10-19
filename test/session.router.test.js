import { expect } from "chai";
import supertest from "supertest";
import { dropPets } from "./setup.test.js";
export { dropUser } from '../../setup.test.js';

const requeter = supertest("http://localhost:8080");

describe('pets router test Case',()=>{
    before(async()=>{
        await dropPets();
    })
    it ('[POST] /api/pets - create a pet',async()=>{
const mockPet={
    name:"Pepito",
    specie:'Ave',
    birthDate:'19-06-2000'
}
const result =await requeter.post('/api/pets')
    })
    })
