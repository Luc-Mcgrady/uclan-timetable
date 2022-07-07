import fetchTimetableSite from "lib/site/timetable";

describe("API", ()=>{
    it("Fetches html from the uni website", async ()=>{
        
        await fetchTimetableSite("LMcgrady@uclan.ac.uk", process.env.PASSWORD);

    })

    it.todo("Parses the html into json")
})