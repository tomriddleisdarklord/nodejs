const app = require("./server.js");
const request = require("supertest");


describe("GET /", () => {

    it("Verify hello world comes back as response",async () => {
       const response =  await request(app).get("/");
        expect(response.text).toBe('Hello World!');
    })

})
