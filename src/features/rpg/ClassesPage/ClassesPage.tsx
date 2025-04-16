import { useEffect } from 'react'
import ClassesList from '../ClassesList'
import { useRpgStore } from '../RpgStore'

export default function () {
  const { fetch, clear, errorMessage } = useRpgStore()

  useEffect(() => {
    document.title = 'Classes DnD 5e • React Sample'
  }, [])

  useEffect(() => {
    fetch()
    return () => clear()
  }, [])

  return (
    <>
      <h1>Dungeons & Dragons 5E: Classes</h1>
      {errorMessage ? <span>Ocorreu um erro. Motivo: {errorMessage}</span> : <ClassesList />}
    </>
  )
}
