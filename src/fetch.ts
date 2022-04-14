enum HttpVerbs {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
  Put ='PUT' }

const handleErrors = (response) => {
  if (!response.ok) throw new Error(response.statusText)
  return response
}

const call = (method: HttpVerbs, url: string, query?: object, body?: object) => {
  const queryString = new URLSearchParams({ ...query })
  return fetch(`${url}?${queryString}`, {
    method,
    body: JSON.stringify(body),
  })
    .then(handleErrors)
    .then((response) => response.json())
}

export default {
  get: (url: string, query?: object) => call(HttpVerbs.Get, url, query),
  post: (url: string, data?: object) => call(HttpVerbs.Post, url, null, data),
  delete: (url: string, query?: object) => call(HttpVerbs.Delete, url, query),
  put: (url: string, data?: object) => call(HttpVerbs.Put, url, null, data),

}
