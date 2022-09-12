<script setup lang="ts">
import { ref } from "vue";
import * as helpers from "../utils/helper";
import { ApiConnector } from "@utils/api";
const props = defineProps(["routeSlug", "PocketBaseUrl"]);

const keyword = ref("");
const data: any = ref();
const search = async () => {
  console.log("aaa");

  data.value = await ApiConnector.getList({
    recordName: "kodepos",
    filter: `province_name ~ '%${keyword.value}%' || city ~ '${keyword.value}' || sub_district ~ '${keyword.value}' || urban ~ '${keyword.value}'`,
    page: 1,
    max: 50,
    url: props.PocketBaseUrl,
  });
  // data.value = await client.records.getList("kodepos", 1, 50, {
  //   filter: `province_name ~ '%${keyword.value}%' || city ~ '${keyword.value}' || sub_district ~ '${keyword.value}' || urban ~ '${keyword.value}'`,
  // });
};
</script>

<template>
  <article class="prose-md">
    <div class="text-center">
      <h2 class="text-2xl text-center">Cari Data Kode Pos</h2>
      <small>Cari data kode pos berdasarkan nama daerah atau digit kode pos</small>
    </div>
    <div class="h-full p-3">
      <div class="form-control">
        <div class="input-group w-full flex justify-center">
          <input
            type="text"
            placeholder="Search…"
            v-model="keyword"
            v-on:keydown.enter="search"
            class="input input-bordered sm:w-1/2 w-full"
          />
          <button class="btn btn-square" @click="search">
            <svg
              @click="search"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="divider">HASIL 50 PENCARIAN TERATAS {{ keyword.toUpperCase() }}</div>
    <div class="overflow-x-auto w-full">
      <table class="table w-full" v-if="data?.items">
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
                :title="`Link Data Kode Pos di Provinsi ${helpers.toTitleCase(
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
                :title="`Link Data Kode Pos di Kabupaten / Kota ${helpers.toTitleCase(
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
                :title="`Link menuju Data Kode Pos di Kecamatan ${helpers.toTitleCase(
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
                :title="`Link menuju Data Kode Pos di Kelurahan ${helpers.toTitleCase(
                  item.urban_slug
                )}`"
              >
                {{ item.urban }}
              </a>
            </td>
            <td>
              <a
                :href="`${item.postal_code}-kode-pos-daerah-mana`"
                class="hover:btn-outline p-2"
                :title="`Link menuju data kodepos dengan nomor ${item.postal_code}`"
              >
                <span class="font-bold">{{ item.postal_code }}</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex items-center justify-center"></div>
    </div>
  </article>
</template>
