import PocketBase from 'pocketbase'


interface getAllParams {
  recordName: string
  filter?: string
  url: string
}

interface getOneParams {
  recordName: string,
  filter?: string,
  url: string,
  page: number,
  max: number
}

export class ApiConnector {

  static async getAll({ recordName, url, filter }: getAllParams) {
    const pocketBase = new PocketBase(url)
    return await pocketBase.records.getFullList(recordName, 200, {
      filter
    })
  }

  static async getList({ recordName, filter, url, page, max }: getOneParams) {
    const pocketBase = new PocketBase(url)
    return await pocketBase.records.getList(recordName, page, max, {
      filter
    })

  }

  // getAll({ recordName }: getAllParams) {
  //   this.pocketbase.records.getFullList(recordName)
  // }

}