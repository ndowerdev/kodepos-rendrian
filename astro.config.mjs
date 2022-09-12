import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import node from "@astrojs/node";
import robotsTxt from 'astro-robots-txt';

import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

import provinsiJson from './slugs/provinsi.json' assert {type:"json"}
import kotaJson from './slugs/kota.json' assert {type:"json"}
import kecamatanJson from './slugs/kecamatan.json' assert {type:"json"}
import kelurahanJson from './slugs/kelurahan.json' assert {type:"json"}
import kodepos from './slugs/kodepos.json' assert {type:"json"}


const siteUrl = "https://kodepos.rendrian.dev"
const allArray = [
  'https://kodepos.rendrian.dev/about-us',
  'https://kodepos.rendrian.dev/privacy-policy',
  'https://kodepos.rendrian.dev/disclaimer',
  'https://kodepos.rendrian.dev/search',
];

provinsiJson.map((item)=>{
  allArray.push(`${siteUrl}/provinsi-${item}`)
})
kotaJson.map((item)=>{
  allArray.push(`${siteUrl}/kabupaten-kota-${item}`)
})
kecamatanJson.map((item)=>{
  allArray.push(`${siteUrl}/kecamatan-${item}`)
})
kelurahanJson.map((item)=>{
  allArray.push(`${siteUrl}/kelurahan-desa-${item}`)
})
kodepos.map((item)=>{
  allArray.push(`${siteUrl}/${item}-kode-pos-daerah-mana`)
})


// https://astro.build/config
export default defineConfig({
  output: 'server',
  site:siteUrl,
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    compress(),
    robotsTxt(),
    vue(), 
     sitemap({
    entryLimit:10000,
    changefreq:'monthly',
    priority:0.7,
    lastmod:new Date(),
    customPages:allArray
  })],
  adapter: node()
});