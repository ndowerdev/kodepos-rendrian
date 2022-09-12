const toTitleCase = (str: string) => {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};


const routeSlug = {
  provinsi: import.meta.env.SLUG_PROVINSI,
  kota: import.meta.env.SLUG_KOTA,
  kecamatan: import.meta.env.SLUG_KECAMATAN,
  kelurahan: import.meta.env.SLUG_KELURAHAN,
};


interface PaginationInterface {
  type: string,
  result: any,
  slug: string
}
const pagination = ({ type, result, slug }: PaginationInterface) => {

  const selectedRouteSlug = routeSlug[type as keyof typeof routeSlug]
  return {
    current: result.page,
    first: `/${selectedRouteSlug}${slug}/${result.page - 1}`,
    prev:
      result.page > 1 && result.page <= result.totalPages
        ? `/${selectedRouteSlug}${slug}/${result.page - 1}`
        : null,
    next:
      result.page < result.totalPages
        ? `/${selectedRouteSlug}${slug}/${result.page + 1}`
        : null,
    last: `${result.totalPages}`,
    lastLink: `/${routeSlug.provinsi}${slug}/${result.totalPages}`,
  }
}






export { toTitleCase, routeSlug, pagination }