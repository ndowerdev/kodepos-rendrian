interface ProvinceParameters {
  provinceName: string,
  page: number,
  totalPage: number
}

const provinceSeo = ({ provinceName, page, totalPage }: ProvinceParameters) => {

  return {
    title: `Data Kode Pos Provinsi ${provinceName} ${page != 1 ? `Hal. ${page}/${totalPage}` : ""
      }`.trim(),
    desc: `kode pos provinsi ${provinceName} terlengkap berdasarkan kabupaten / kota, kecamatan, serta kelurahan`
  }

}
export { provinceSeo }