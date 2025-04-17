export default async () => {
  ;(window as any).apis = {
    dnd5e: import.meta.env.VITE_DND5E_API,
  }
}
