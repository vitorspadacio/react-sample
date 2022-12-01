export default async () => {
  (window as any).apis = {
    starwars: import.meta.env.VITE_STARWARS_API,
    nodesample: import.meta.env.VITE_NODESAMPLE_API,
  }
}
