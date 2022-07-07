import axios from "axios";
import basicAuth from "lib/auth/basicAuth";
import getTimetable, { TimetableData } from "lib/site/timetable";

describe("API", ()=>{
    
    let password : string;
    let email : string;

    let parsed: TimetableData;

    beforeAll(()=>{

        /*
        //.env.test.local
        EMAIL=...
        PASSWORD=...
        */

        expect(process.env.USERNAME).toBeTruthy()
        expect(process.env.PASSWORD).toBeTruthy()
        email = process.env.EMAIL as string;
        password = process.env.PASSWORD as string;

    })

    it("Fetches data from the uni website", async ()=>{
        const req = await axios("http://localhost:3000/api/timetable", {headers: {email: email, Authorization: basicAuth(email, password)}})
        parsed = req.data
    })

    test("The data is formatted correctly", () => {

        expect(parsed.days).toBeDefined()
        expect(parsed.days[0].cells[0]).toHaveProperty("cellType")

    })
})