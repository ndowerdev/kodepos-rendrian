
interface UrbanParameters {
  provinceName: string,
  cityName: string,
  districtName: string,
  urbanName: string,
  page: number,
  totalPage?: number
}
const urbanSeo = ({ provinceName, cityName, districtName, urbanName, page, totalPage }: UrbanParameters) => {
  return {
    title: `Kode Pos Kelurahan / Desa ${urbanName}`,
    desc: `Kode pos kelurahan / desa ${districtName}, kabupaten kota ${cityName}, provinsi${provinceName} lengkap dengan rinciannya`.trim()
  }
}



export { urbanSeo }