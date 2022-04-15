// export default (api: object, method: string, mock: any) => jest
//   .spyOn(api, method as never).mockResolvedValueOnce(mock as never)

export default (method: Function) => (method as jest.Mock)
