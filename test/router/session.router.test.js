import { expect } from "chai";
import supertest from "supertest";
import { dropUser } from './setup.test.js';
import { response } from "express";

const requeter = supertest("http://localhost:8080");

describe("session router test Case",()=>{
  let cookie


  it('[POST] /api/sessions/register - should sign up a user',async()=>{
    await dropUser();
    const mockUser = {
      first_name: "Coder",
      last_name: "Test",
      email: "coder@coder",
      password: "1234"
    }
    const result = await requeter.post('/api/sessions/register').send(mockUser);
    //console.log(result)
    expect(result.statusCode).to.be.eql(200)
    expect(result.body.payload).to.be.ok
  });
  it('[POST] /api/sessions/login - should login a user', async () => {
    
    const mockCredential ={
      email: "coder@coder" ,
      password: "1234"
    }
    const result = await requeter.post('/api/sessions/login').send(mockCredential);
    expect(result.statusCode).to.be.eql(200)
    expect(result.headers).to.have.property('set-cookie')
    const cookieHeader=result.headers['set-cookie'][0]
    //expect(result.body.payload).to.be.ok
    //console.log(result.headers)
    expect (cookieHeader).to.be.ok
    const cookiePart = cookieHeader.split('=');
     cookie={
        name:cookiePart[0],
        value: cookiePart[1]
    }
    expect(cookie.name).to.be.eql('coder-Cookie')
    expect(cookie.value).to.be.ok


    
});
  it('[GET] /api/session/current - should login a user', async () => {
      const result = await requeter.get('/api/sessions/current')
    .set('Cookie',[`${cookie.name}=${cookie.value}`])
  
expect(result.body.payload.email).to.be.eql=('coder@coder')
//expect(cookie.value).to.be.ok
    
    //expect(result.headers).to.have.property('set-cookie')
    //const cookieHeader=result.headers['set-cookie'][0]
    



    



});
});

