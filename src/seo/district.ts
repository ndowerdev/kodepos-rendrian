interface DistrictParameters {
  provinceName: string,
  cityName: string,
  districtName: string,
  page: number
  totalPage?: number
}

const districtSeo = ({ provinceName, cityName, districtName, page, totalPage }: DistrictParameters) => {
  return {
    title: `Data Kode Pos Kabupaten Kota ${districtName} ${page != 1 ? `Hal. ${page}/${totalPage}` : ""
      }`.trim(),
    desc: `Kode pos kecamatan ${districtName} kabupaten kota ${cityName} provinsi${provinceName} lengkap dengan daftar kelurahan`.trim()
  }
}
export { districtSeo }