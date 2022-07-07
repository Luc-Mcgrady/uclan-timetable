import fetchTimetableSite from "lib/site/timetable";

describe("API", ()=>{
    
    let password : string;
    let email : string;

    beforeAll(()=>{

        /*
        //.env.test.local
        PASSWORD=...
        EMAIL=...
        */

        expect(process.env.USERNAME).toBeTruthy()
        expect(process.env.PASSWORD).toBeTruthy()
        email = process.env.EMAIL as string;
        password = process.env.PASSWORD as string;

    })

    it("Fetches html from the uni website", async ()=>{
        await fetchTimetableSite(email, password);

    })

    it.todo("Parses the html into json")
})