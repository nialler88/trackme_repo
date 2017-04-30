var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:8800");

// UNIT test begin

describe("Routes Collection API unit tests for TrackMe",function(){
         // #1 should return contacts representation in json
         it("should return collection of JSON documents from routes collection",function(done){
            
            // calling home page api
            server
            .get("/api/routes/")
            .expect("Content-type",/json/)
            .expect(200) // This is HTTP response
            .end(function(err,res){
                 // HTTP status should be 200
                 res.status.should.equal(200);
                 done();
                 });
            });
         // #2 add a contact
         it("should add a new entry to routes collection in mLab",function(done){
            
            // post to /api/contacts
            server.post('/api/routes/')
            .send({name:"testName",_id:"123456"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                 res.status.should.equal(200);
                 done();
                 });
            });
         });
