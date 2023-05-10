# http://uclan.lucmcgrady.com

How uni managed to make the loading times like 5 seconds I do not know.

The main page of this site is [/timetable](http://uclan.lucmcgrady.com/timetable). 

If you feel you can do a better job at portraying the timetable use the

## Api
[/api/timetable](http://uclan.lucmcgrady.com/api/timetable) as defined in [timetable.ts](/pages/api/timetable.ts)

Takes a basic authentication header and a body in the format
```js
{
  email: string,
  date: "YY-MM-DD"
}
```
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
