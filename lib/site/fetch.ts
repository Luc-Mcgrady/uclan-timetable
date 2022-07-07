import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://apps.uclan.ac.uk/TimeTables/SpanWeek/WkMatrix',
  params: {entId: 'LMcgrady', entType: 'Student', startDate: '2021-10-11'},
  headers: {
    Accept: 'text/html',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en;q=0.9',
    Connection: 'keep-alive',
    DNT: '1',
    Host: 'apps.uclan.ac.uk',
   // Authorization: 'Basic Nope'
  }
};

export async function fetchTimetableSite(email: string, password: string) {
    
    const username = email.split('@')[0]
    await axios.request({...options})
    
}