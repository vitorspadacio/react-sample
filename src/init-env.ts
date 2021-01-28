export default async () => {
  (window as any).apis = {
    starwars: process.env.STARWARS_API,
  }
}
