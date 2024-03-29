// https://flaviocopes.com/axios-send-authorization-header/

export default function basicAuth(username: string, password: string) {
    return "Basic " + Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
}