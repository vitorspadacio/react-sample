export const fetchPromise = (expectedResult: any): Promise<any> => Promise.resolve({
  json: () => Promise.resolve({ results: expectedResult })
})
