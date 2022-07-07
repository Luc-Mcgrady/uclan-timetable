import getTimetable, { Timetable } from "lib/site/timetable";

describe("API", ()=>{
    
    let password : string;
    let email : string;

    let parsed: Timetable;

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
        parsed = await getTimetable(email, password);
    })

    test("The data is formatted correctly", () => {

        expect(parsed.days).toBeDefined()
        expect(parsed.days[0].cells[0]).toHaveProperty("cellType")

    })
})