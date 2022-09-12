<script setup>
const toTitleCase = (str) => {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  // return lodash.startCase(lodash.lowerCase(str));
};

const props = defineProps(["data", "params", "routeSlug", "seo"]);
const firstItem = props.data.items[0];
</script>

<template>
  <div>
    <article class="prose-lg w-full">
      <h1 class="text-center">{{ seo?.title }}</h1>
      <!-- <h2 class="text-center">KODE POS {{ lodash.upperCase(params.slug) }}</h2> -->
      <div class="divider"></div>
      <slot />
      <div class="overflow-x-auto w-full">
        <table class="table w-full" v-if="data.totalItems !== 1">
          <thead>
            <!-- <tr
                class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
              > -->
            <tr class="">
              <td>Provinsi</td>
              <td>Kabupaten/Kota</td>
              <td>Kecamatan</td>
              <td>Kelurahan</td>
              <td>Kode Pos</td>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="(item, index) in data.items" :key="index">
              <td>
                <a
                  :href="`/${routeSlug.provinsi}${item.province_slug}`"
                  class="hover:btn-outline p-2"
                  :title="`Link Data Kode Pos di Provinsi ${toTitleCase(
                    item.province_name
                  )}`"
                >
                  {{ item.province_name }}
                </a>
              </td>
              <td>
                <a
                  :href="`/${routeSlug.kota}${item.city_slug}`"
                  class="hover:btn-outline p-2"
                  :title="`Link Data Kode Pos di Kabupaten / Kota ${toTitleCase(
                    item.city_slug
                  )}`"
                >
                  {{ item.city }}
                </a>
              </td>
              <td>
                <a
                  :href="`/${routeSlug.kecamatan}${item.sub_district_slug}`"
                  class="hover:btn-outline p-2"
                  :title="`Link menuju Data Kode Pos di Kecamatan ${toTitleCase(
                    item.sub_district_slug
                  )}`"
                >
                  {{ item.sub_district }}
                </a>
              </td>
              <td>
                <a
                  :href="`/${routeSlug.kelurahan}${item.urban_slug}`"
                  class="hover:btn-outline p-2"
                  :title="`Link menuju Data Kode Pos di Kelurahan ${toTitleCase(
                    item.urban_slug
                  )}`"
                >
                  {{ item.urban }}
                </a>
              </td>
              <td>
                <a
                  :href="`/${item.postal_code}-kode-pos-daerah-mana`"
                  class="hover:btn-outline p-2"
                  :title="`Link menuju data kodepos dengan nomor ${item.postal_code}`"
                >
                  <span class="font-bold">{{ item.postal_code }}</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="" v-else>
          <table class="table table-zebra w-full">
            <!-- head -->
            <thead>
              <tr>
                <td>Informasi</td>
                <td>Data</td>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <td>Provinsi</td>
                <td>
                  <a
                    :href="`/${routeSlug.provinsi}${firstItem.province_slug}`"
                    class="hover:btn-outline p-2"
                    :title="`Link Data Kode Pos di Provinsi ${toTitleCase(
                      firstItem.province_name
                    )}`"
                  >
                    {{ firstItem.province_name }}
                  </a>
                </td>
              </tr>
              <tr>
                <td>Kabupaten / Kota</td>
                <td>
                  <a
                    :href="`/${routeSlug.kota}${firstItem.city_slug}`"
                    class="hover:btn-outline p-2"
                    :title="`Link Data Kode Pos di Kabupaten / Kota ${toTitleCase(
                      firstItem.city_slug
                    )}`"
                  >
                    {{ firstItem.city }}
                  </a>
                </td>
              </tr>
              <tr>
                <td>Kecamatan</td>
                <td>
                  <a
                    :href="`/${routeSlug.kecamatan}${firstItem.sub_district_slug}`"
                    class="hover:btn-outline p-2"
                    :title="`Link menuju Data Kode Pos di Kecamatan ${toTitleCase(
                      firstItem.sub_district_slug
                    )}`"
                  >
                    {{ firstItem.sub_district }}
                  </a>
                </td>
              </tr>
              <tr>
                <td>Kelurahan</td>
                <td>
                  <a
                    :href="`/${routeSlug.kelurahan}${firstItem.urban_slug}`"
                    class="hover:btn-outline p-2"
                    :title="`Link menuju Data Kode Pos di Kelurahan ${toTitleCase(
                      firstItem.urban_slug
                    )}`"
                  >
                    {{ firstItem.urban }}
                  </a>
                </td>
              </tr>
              <tr>
                <td>Kode Pos</td>
                <td>
                  <a
                    :href="`/${data.items[0].postal_code}-kode-pos-daerah-mana`"
                    :title="`lihat daerah mana saja yang memiliki kode pos ${data.items[0].postal_code}`"
                    class="btn hover:btn-outline"
                    >{{ data.items[0].postal_code }}</a
                  >
                </td>
              </tr>
              <!-- row 2 -->
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-center"></div>
      </div>
      <div class="divider"></div>
    </article>
  </div>
</template>
