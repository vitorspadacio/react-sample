const handleErrors = (response) => {
  if (!response.ok) throw new Error(response.statusText)
  return response
}

export default (url: string) => fetch(url)
  .then(handleErrors)
  .then((response) => response.json())
