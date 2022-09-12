
interface CityParameters {
  provinceName: string,
  cityName: string,
  page: number,
  totalPage?: number
}
const citySeo = ({ provinceName, cityName, page, totalPage }: CityParameters) => {
  return {
    title: `Data Kode Pos Kabupaten Kota ${cityName} ${page != 1 ? `Hal. ${page}/${totalPage}` : ""
      }`.trim(),
    desc: `Kode pos kabupaten / kota ${cityName} provinsi ${provinceName} terlengkap berdasarkan kecamatan, serta kelurahan`.trim()
  }
}

export { citySeo }