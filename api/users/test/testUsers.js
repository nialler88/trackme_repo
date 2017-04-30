var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:8800");

// UNIT test begin

describe("Users API unit tests for TrackMe",function(){
         // #1 should return contacts representation in json
         it("should return collection of JSON documents from users collection",function(done){
            
            // calling home page api
            server
            .get("/api/users/")
            .expect("Content-type",/json/)
            .expect(200) // This is HTTP response
            .end(function(err,res){
                 // HTTP status should be 200
                 res.status.should.equal(200);
                 done();
                 });
            });
         
         // #2 add a contact
         it("should add a new user to users collection",function(done){
            
            // post to /api/users
            server.post('/api/users/')
            .send({name:"testName",email:"test@test.test"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                 res.status.should.equal(200);
                 done();
                 });
            });
         
         });
