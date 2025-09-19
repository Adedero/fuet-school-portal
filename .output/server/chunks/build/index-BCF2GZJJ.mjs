import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-D2Q403g3.mjs';
import { _ as _sfc_main$3 } from './Input-BL7KxnW2.mjs';
import { _ as _sfc_main$4 } from './Select-CyiMmXX1.mjs';
import { _ as _sfc_main$5 } from './SelectMenu-Da07R2ba.mjs';
import { h as useToast, b as _sfc_main$a, n as navigateTo } from './server.mjs';
import { a8 as normalizeException } from '../nitro/nitro.mjs';
import { defineComponent, withAsyncContext, computed, reactive, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { C as Calendar } from './calendar-XO0HMjV5.mjs';
import handlePreviousClick from './handle-previous-click-DL4mIMND.mjs';
import { p as personalSchema } from '../_/application.schema.mjs';
import { save } from './handle-save-click-d4tY2V9Z.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-C9FsSXkc.mjs';
import { V as VueMultiSelectButton } from './multi-select-button-BtiZqFu4.mjs';
import './Alert-ZHZvgBf8.mjs';
import 'reka-ui';
import '@vueuse/core';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'nanoid';
import 'node:path';
import 'node:fs/promises';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'zod';
import '@vue/shared';
import './ButtonGroup-C97pRlqf.mjs';
import './DropdownMenu-ByJ7aAi2.mjs';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';

const countries = [
  {
    name: "Afghanistan",
    code: "AF"
  },
  {
    name: "Albania",
    code: "AL"
  },
  {
    name: "Algeria",
    code: "DZ"
  },
  {
    name: "American Samoa",
    code: "AS"
  },
  {
    name: "Andorra",
    code: "AD"
  },
  {
    name: "Angola",
    code: "AO"
  },
  {
    name: "Anguilla",
    code: "AI"
  },
  {
    name: "Antarctica",
    code: "AQ"
  },
  {
    name: "Antigua and Barbuda",
    code: "AG"
  },
  {
    name: "Argentina",
    code: "AR"
  },
  {
    name: "Armenia",
    code: "AM"
  },
  {
    name: "Aruba",
    code: "AW"
  },
  {
    name: "Asia/Pacific Region",
    code: "AP"
  },
  {
    name: "Australia",
    code: "AU"
  },
  {
    name: "Austria",
    code: "AT"
  },
  {
    name: "Azerbaijan",
    code: "AZ"
  },
  {
    name: "Bahamas",
    code: "BS"
  },
  {
    name: "Bahrain",
    code: "BH"
  },
  {
    name: "Bangladesh",
    code: "BD"
  },
  {
    name: "Barbados",
    code: "BB"
  },
  {
    name: "Belarus",
    code: "BY"
  },
  {
    name: "Belgium",
    code: "BE"
  },
  {
    name: "Belize",
    code: "BZ"
  },
  {
    name: "Benin",
    code: "BJ"
  },
  {
    name: "Bermuda",
    code: "BM"
  },
  {
    name: "Bhutan",
    code: "BT"
  },
  {
    name: "Bolivia",
    code: "BO"
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ"
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA"
  },
  {
    name: "Botswana",
    code: "BW"
  },
  {
    name: "Bouvet Island",
    code: "BV"
  },
  {
    name: "Brazil",
    code: "BR"
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO"
  },
  {
    name: "Brunei Darussalam",
    code: "BN"
  },
  {
    name: "Bulgaria",
    code: "BG"
  },
  {
    name: "Burkina Faso",
    code: "BF"
  },
  {
    name: "Burundi",
    code: "BI"
  },
  {
    name: "Cambodia",
    code: "KH"
  },
  {
    name: "Cameroon",
    code: "CM"
  },
  {
    name: "Canada",
    code: "CA"
  },
  {
    name: "Cape Verde",
    code: "CV"
  },
  {
    name: "Cayman Islands",
    code: "KY"
  },
  {
    name: "Central African Republic",
    code: "CF"
  },
  {
    name: "Chad",
    code: "TD"
  },
  {
    name: "Chile",
    code: "CL"
  },
  {
    name: "China",
    code: "CN"
  },
  {
    name: "Christmas Island",
    code: "CX"
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC"
  },
  {
    name: "Colombia",
    code: "CO"
  },
  {
    name: "Comoros",
    code: "KM"
  },
  {
    name: "Congo",
    code: "CG"
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "CD"
  },
  {
    name: "Cook Islands",
    code: "CK"
  },
  {
    name: "Costa Rica",
    code: "CR"
  },
  {
    name: "Croatia",
    code: "HR"
  },
  {
    name: "Cuba",
    code: "CU"
  },
  {
    name: "Curaçao",
    code: "CW"
  },
  {
    name: "Cyprus",
    code: "CY"
  },
  {
    name: "Czech Republic",
    code: "CZ"
  },
  {
    name: "Côte d'Ivoire",
    code: "CI"
  },
  {
    name: "Denmark",
    code: "DK"
  },
  {
    name: "Djibouti",
    code: "DJ"
  },
  {
    name: "Dominica",
    code: "DM"
  },
  {
    name: "Dominican Republic",
    code: "DO"
  },
  {
    name: "Ecuador",
    code: "EC"
  },
  {
    name: "Egypt",
    code: "EG"
  },
  {
    name: "El Salvador",
    code: "SV"
  },
  {
    name: "Equatorial Guinea",
    code: "GQ"
  },
  {
    name: "Eritrea",
    code: "ER"
  },
  {
    name: "Estonia",
    code: "EE"
  },
  {
    name: "Ethiopia",
    code: "ET"
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK"
  },
  {
    name: "Faroe Islands",
    code: "FO"
  },
  {
    name: "Fiji",
    code: "FJ"
  },
  {
    name: "Finland",
    code: "FI"
  },
  {
    name: "France",
    code: "FR"
  },
  {
    name: "French Guiana",
    code: "GF"
  },
  {
    name: "French Polynesia",
    code: "PF"
  },
  {
    name: "French Southern Territories",
    code: "TF"
  },
  {
    name: "Gabon",
    code: "GA"
  },
  {
    name: "Gambia",
    code: "GM"
  },
  {
    name: "Georgia",
    code: "GE"
  },
  {
    name: "Germany",
    code: "DE"
  },
  {
    name: "Ghana",
    code: "GH"
  },
  {
    name: "Gibraltar",
    code: "GI"
  },
  {
    name: "Greece",
    code: "GR"
  },
  {
    name: "Greenland",
    code: "GL"
  },
  {
    name: "Grenada",
    code: "GD"
  },
  {
    name: "Guadeloupe",
    code: "GP"
  },
  {
    name: "Guam",
    code: "GU"
  },
  {
    name: "Guatemala",
    code: "GT"
  },
  {
    name: "Guernsey",
    code: "GG"
  },
  {
    name: "Guinea",
    code: "GN"
  },
  {
    name: "Guinea-Bissau",
    code: "GW"
  },
  {
    name: "Guyana",
    code: "GY"
  },
  {
    name: "Haiti",
    code: "HT"
  },
  {
    name: "Heard Island and Mcdonald Islands",
    code: "HM"
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA"
  },
  {
    name: "Honduras",
    code: "HN"
  },
  {
    name: "Hong Kong",
    code: "HK"
  },
  {
    name: "Hungary",
    code: "HU"
  },
  {
    name: "Iceland",
    code: "IS"
  },
  {
    name: "India",
    code: "IN"
  },
  {
    name: "Indonesia",
    code: "ID"
  },
  {
    name: "Iran, Islamic Republic Of",
    code: "IR"
  },
  {
    name: "Iraq",
    code: "IQ"
  },
  {
    name: "Ireland",
    code: "IE"
  },
  {
    name: "Isle of Man",
    code: "IM"
  },
  {
    name: "Israel",
    code: "IL"
  },
  {
    name: "Italy",
    code: "IT"
  },
  {
    name: "Jamaica",
    code: "JM"
  },
  {
    name: "Japan",
    code: "JP"
  },
  {
    name: "Jersey",
    code: "JE"
  },
  {
    name: "Jordan",
    code: "JO"
  },
  {
    name: "Kazakhstan",
    code: "KZ"
  },
  {
    name: "Kenya",
    code: "KE"
  },
  {
    name: "Kiribati",
    code: "KI"
  },
  {
    name: "Korea, Republic of",
    code: "KR"
  },
  {
    name: "Kuwait",
    code: "KW"
  },
  {
    name: "Kyrgyzstan",
    code: "KG"
  },
  {
    name: "Laos",
    code: "LA"
  },
  {
    name: "Latvia",
    code: "LV"
  },
  {
    name: "Lebanon",
    code: "LB"
  },
  {
    name: "Lesotho",
    code: "LS"
  },
  {
    name: "Liberia",
    code: "LR"
  },
  {
    name: "Libyan Arab Jamahiriya",
    code: "LY"
  },
  {
    name: "Liechtenstein",
    code: "LI"
  },
  {
    name: "Lithuania",
    code: "LT"
  },
  {
    name: "Luxembourg",
    code: "LU"
  },
  {
    name: "Macao",
    code: "MO"
  },
  {
    name: "Madagascar",
    code: "MG"
  },
  {
    name: "Malawi",
    code: "MW"
  },
  {
    name: "Malaysia",
    code: "MY"
  },
  {
    name: "Maldives",
    code: "MV"
  },
  {
    name: "Mali",
    code: "ML"
  },
  {
    name: "Malta",
    code: "MT"
  },
  {
    name: "Marshall Islands",
    code: "MH"
  },
  {
    name: "Martinique",
    code: "MQ"
  },
  {
    name: "Mauritania",
    code: "MR"
  },
  {
    name: "Mauritius",
    code: "MU"
  },
  {
    name: "Mayotte",
    code: "YT"
  },
  {
    name: "Mexico",
    code: "MX"
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM"
  },
  {
    name: "Moldova, Republic of",
    code: "MD"
  },
  {
    name: "Monaco",
    code: "MC"
  },
  {
    name: "Mongolia",
    code: "MN"
  },
  {
    name: "Montenegro",
    code: "ME"
  },
  {
    name: "Montserrat",
    code: "MS"
  },
  {
    name: "Morocco",
    code: "MA"
  },
  {
    name: "Mozambique",
    code: "MZ"
  },
  {
    name: "Myanmar",
    code: "MM"
  },
  {
    name: "Namibia",
    code: "NA"
  },
  {
    name: "Nauru",
    code: "NR"
  },
  {
    name: "Nepal",
    code: "NP"
  },
  {
    name: "Netherlands",
    code: "NL"
  },
  {
    name: "Netherlands Antilles",
    code: "AN"
  },
  {
    name: "New Caledonia",
    code: "NC"
  },
  {
    name: "New Zealand",
    code: "NZ"
  },
  {
    name: "Nicaragua",
    code: "NI"
  },
  {
    name: "Niger",
    code: "NE"
  },
  {
    name: "Nigeria",
    code: "NG"
  },
  {
    name: "Niue",
    code: "NU"
  },
  {
    name: "Norfolk Island",
    code: "NF"
  },
  {
    name: "North Korea",
    code: "KP"
  },
  {
    name: "North Macedonia",
    code: "MK"
  },
  {
    name: "Northern Mariana Islands",
    code: "MP"
  },
  {
    name: "Norway",
    code: "NO"
  },
  {
    name: "Oman",
    code: "OM"
  },
  {
    name: "Pakistan",
    code: "PK"
  },
  {
    name: "Palau",
    code: "PW"
  },
  {
    name: "Palestinian Territory, Occupied",
    code: "PS"
  },
  {
    name: "Panama",
    code: "PA"
  },
  {
    name: "Papua New Guinea",
    code: "PG"
  },
  {
    name: "Paraguay",
    code: "PY"
  },
  {
    name: "Peru",
    code: "PE"
  },
  {
    name: "Philippines",
    code: "PH"
  },
  {
    name: "Pitcairn Islands",
    code: "PN"
  },
  {
    name: "Poland",
    code: "PL"
  },
  {
    name: "Portugal",
    code: "PT"
  },
  {
    name: "Puerto Rico",
    code: "PR"
  },
  {
    name: "Qatar",
    code: "QA"
  },
  {
    name: "Reunion",
    code: "RE"
  },
  {
    name: "Romania",
    code: "RO"
  },
  {
    name: "Russian Federation",
    code: "RU"
  },
  {
    name: "Rwanda",
    code: "RW"
  },
  {
    name: "Saint Barthélemy",
    code: "BL"
  },
  {
    name: "Saint Helena",
    code: "SH"
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN"
  },
  {
    name: "Saint Lucia",
    code: "LC"
  },
  {
    name: "Saint Martin",
    code: "MF"
  },
  {
    name: "Saint Martin",
    code: "MF"
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM"
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC"
  },
  {
    name: "Samoa",
    code: "WS"
  },
  {
    name: "San Marino",
    code: "SM"
  },
  {
    name: "Sao Tome and Principe",
    code: "ST"
  },
  {
    name: "Saudi Arabia",
    code: "SA"
  },
  {
    name: "Senegal",
    code: "SN"
  },
  {
    name: "Serbia",
    code: "RS"
  },
  {
    name: "Serbia and Montenegro",
    code: "CS"
  },
  {
    name: "Seychelles",
    code: "SC"
  },
  {
    name: "Sierra Leone",
    code: "SL"
  },
  {
    name: "Singapore",
    code: "SG"
  },
  {
    name: "Sint Maarten",
    code: "SX"
  },
  {
    name: "Slovakia",
    code: "SK"
  },
  {
    name: "Slovenia",
    code: "SI"
  },
  {
    name: "Solomon Islands",
    code: "SB"
  },
  {
    name: "Somalia",
    code: "SO"
  },
  {
    name: "South Africa",
    code: "ZA"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS"
  },
  {
    name: "South Sudan",
    code: "SS"
  },
  {
    name: "Spain",
    code: "ES"
  },
  {
    name: "Sri Lanka",
    code: "LK"
  },
  {
    name: "Sudan",
    code: "SD"
  },
  {
    name: "Suriname",
    code: "SR"
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ"
  },
  {
    name: "Swaziland",
    code: "SZ"
  },
  {
    name: "Sweden",
    code: "SE"
  },
  {
    name: "Switzerland",
    code: "CH"
  },
  {
    name: "Syrian Arab Republic",
    code: "SY"
  },
  {
    name: "Taiwan",
    code: "TW"
  },
  {
    name: "Tajikistan",
    code: "TJ"
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ"
  },
  {
    name: "Thailand",
    code: "TH"
  },
  {
    name: "Timor-Leste",
    code: "TL"
  },
  {
    name: "Togo",
    code: "TG"
  },
  {
    name: "Tokelau",
    code: "TK"
  },
  {
    name: "Tonga",
    code: "TO"
  },
  {
    name: "Trinidad and Tobago",
    code: "TT"
  },
  {
    name: "Tunisia",
    code: "TN"
  },
  {
    name: "Turkey",
    code: "TR"
  },
  {
    name: "Turkmenistan",
    code: "TM"
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC"
  },
  {
    name: "Tuvalu",
    code: "TV"
  },
  {
    name: "Uganda",
    code: "UG"
  },
  {
    name: "Ukraine",
    code: "UA"
  },
  {
    name: "United Arab Emirates",
    code: "AE"
  },
  {
    name: "United Kingdom",
    code: "GB"
  },
  {
    name: "United States",
    code: "US"
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM"
  },
  {
    name: "Uruguay",
    code: "UY"
  },
  {
    name: "Uzbekistan",
    code: "UZ"
  },
  {
    name: "Vanuatu",
    code: "VU"
  },
  {
    name: "Venezuela",
    code: "VE"
  },
  {
    name: "Vietnam",
    code: "VN"
  },
  {
    name: "Virgin Islands, British",
    code: "VG"
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI"
  },
  {
    name: "Wallis and Futuna",
    code: "WF"
  },
  {
    name: "Western Sahara",
    code: "EH"
  },
  {
    name: "Yemen",
    code: "YE"
  },
  {
    name: "Zambia",
    code: "ZM"
  },
  {
    name: "Zimbabwe",
    code: "ZW"
  },
  {
    name: "Åland Islands",
    code: "AX"
  }
];
const statesAndLGAs = [
  {
    state: "Adamawa",
    alias: "adamawa",
    lgas: [
      "Demsa",
      "Fufure",
      "Ganye",
      "Gayuk",
      "Gombi",
      "Grie",
      "Hong",
      "Jada",
      "Larmurde",
      "Madagali",
      "Maiha",
      "Mayo Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South"
    ]
  },
  {
    state: "Akwa Ibom",
    alias: "akwa_ibom",
    lgas: [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono-Ibom",
      "Ikot Abasi",
      "Ika",
      "Ikono",
      "Ikot Ekpene",
      "Ini",
      "Mkpat-Enin",
      "Itu",
      "Mbo",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Udung-Uko",
      "Ukanafun",
      "Oruk Anam",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo"
    ]
  },
  {
    state: "Anambra",
    alias: "anambra",
    lgas: [
      "Aguata",
      "Anambra East",
      "Anaocha",
      "Awka North",
      "Anambra West",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili South",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi"
    ]
  },
  {
    state: "Ogun",
    alias: "ogun",
    lgas: [
      "Abeokuta North",
      "Abeokuta South",
      "Ado-Odo/Ota",
      "Egbado North",
      "Ewekoro",
      "Egbado South",
      "Ijebu North",
      "Ijebu East",
      "Ifo",
      "Ijebu Ode",
      "Ijebu North East",
      "Imeko Afon",
      "Ikenne",
      "Ipokia",
      "Odeda",
      "Obafemi Owode",
      "Odogbolu",
      "Remo North",
      "Ogun Waterside",
      "Shagamu"
    ]
  },
  {
    state: "Ondo",
    alias: "ondo",
    lgas: [
      "Akoko North-East",
      "Akoko North-West",
      "Akoko South-West",
      "Akoko South-East",
      "Akure North",
      "Akure South",
      "Ese Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Irele",
      "Ile Oluji/Okeigbo",
      "Odigbo",
      "Okitipupa",
      "Ondo West",
      "Ose",
      "Ondo East",
      "Owo"
    ]
  },
  {
    state: "Rivers",
    alias: "rivers",
    lgas: [
      "Abua/Odual",
      "Ahoada East",
      "Ahoada West",
      "Andoni",
      "Akuku-Toru",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Emuoha",
      "Eleme",
      "Ikwerre",
      "Etche",
      "Gokana",
      "Khana",
      "Obio/Akpor",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okrika",
      "Omuma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port Harcourt",
      "Tai"
    ]
  },
  {
    state: "Bauchi",
    alias: "bauchi",
    lgas: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas/Gadau",
      "Jama'are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa Balewa",
      "Toro",
      "Warji",
      "Zaki"
    ]
  },
  {
    state: "Benue",
    alias: "benue",
    lgas: [
      "Agatu",
      "Apa",
      "Ado",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer East",
      "Gwer West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Obi",
      "Ogbadibo",
      "Ohimini",
      "Oju",
      "Okpokwu",
      "Oturkpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya"
    ]
  },
  {
    state: "Borno",
    alias: "borno",
    lgas: [
      "Abadam",
      "Askira/Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Guzamala",
      "Gubio",
      "Hawul",
      "Gwoza",
      "Jere",
      "Kaga",
      "Kala/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Mobbar",
      "Marte",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani"
    ]
  },
  {
    state: "Bayelsa",
    alias: "bayelsa",
    lgas: [
      "Brass",
      "Ekeremor",
      "Kolokuma/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern Ijaw",
      "Yenagoa"
    ]
  },
  {
    state: "Cross River",
    alias: "cross_river",
    lgas: [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar Municipal",
      "Calabar South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakuur",
      "Yala"
    ]
  },
  {
    state: "Delta",
    alias: "delta",
    lgas: [
      "Aniocha North",
      "Aniocha South",
      "Bomadi",
      "Burutu",
      "Ethiope West",
      "Ethiope East",
      "Ika North East",
      "Ika South",
      "Isoko North",
      "Isoko South",
      "Ndokwa East",
      "Ndokwa West",
      "Okpe",
      "Oshimili North",
      "Oshimili South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli North",
      "Ukwuani",
      "Ughelli South",
      "Uvwie",
      "Warri North",
      "Warri South",
      "Warri South West"
    ]
  },
  {
    state: "Ebonyi",
    alias: "ebonyi",
    lgas: [
      "Abakaliki",
      "Afikpo North",
      "Ebonyi",
      "Afikpo South",
      "Ezza North",
      "Ikwo",
      "Ezza South",
      "Ivo",
      "Ishielu",
      "Izzi",
      "Ohaozara",
      "Ohaukwu",
      "Onicha"
    ]
  },
  {
    state: "Edo",
    alias: "edo",
    lgas: [
      "Akoko-Edo",
      "Egor",
      "Esan Central",
      "Esan North-East",
      "Esan South-East",
      "Esan West",
      "Etsako Central",
      "Etsako East",
      "Etsako West",
      "Igueben",
      "Ikpoba Okha",
      "Orhionmwon",
      "Oredo",
      "Ovia North-East",
      "Ovia South-West",
      "Owan East",
      "Owan West",
      "Uhunmwonde"
    ]
  },
  {
    state: "Ekiti",
    alias: "ekiti",
    lgas: [
      "Ado Ekiti",
      "Efon",
      "Ekiti East",
      "Ekiti South-West",
      "Ekiti West",
      "Emure",
      "Gbonyin",
      "Ido Osi",
      "Ijero",
      "Ikere",
      "Ilejemeje",
      "Irepodun/Ifelodun",
      "Ikole",
      "Ise/Orun",
      "Moba",
      "Oye"
    ]
  },
  {
    state: "Enugu",
    alias: "enugu",
    lgas: [
      "Awgu",
      "Aninri",
      "Enugu East",
      "Enugu North",
      "Ezeagu",
      "Enugu South",
      "Igbo Etiti",
      "Igbo Eze North",
      "Igbo Eze South",
      "Isi Uzo",
      "Nkanu East",
      "Nkanu West",
      "Nsukka",
      "Udenu",
      "Oji River",
      "Uzo Uwani",
      "Udi"
    ]
  },
  {
    state: "Federal Capital Territory",
    alias: "abuja",
    lgas: [
      "Abaji",
      "Bwari",
      "Gwagwalada",
      "Kuje",
      "Kwali",
      "Municipal Area Council"
    ]
  },
  {
    state: "Gombe",
    alias: "gombe",
    lgas: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu/Deba"
    ]
  },
  {
    state: "Jigawa",
    alias: "jigawa",
    lgas: [
      "Auyo",
      "Babura",
      "Buji",
      "Biriniwa",
      "Birnin Kudu",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin Hausa",
      "Kazaure",
      "Kiri Kasama",
      "Kiyawa",
      "Kaugama",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Sule Tankarkar",
      "Roni",
      "Ringim",
      "Yankwashi",
      "Taura"
    ]
  },
  {
    state: "Oyo",
    alias: "oyo",
    lgas: [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atisbo",
      "Egbeda",
      "Ibadan North",
      "Ibadan North-East",
      "Ibadan North-West",
      "Ibadan South-East",
      "Ibarapa Central",
      "Ibadan South-West",
      "Ibarapa East",
      "Ido",
      "Ibarapa North",
      "Irepo",
      "Iseyin",
      "Itesiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu",
      "Ogbomosho North",
      "Ogbomosho South",
      "Ogo Oluwa",
      "Olorunsogo",
      "Oluyole",
      "Ona Ara",
      "Orelope",
      "Ori Ire",
      "Oyo",
      "Oyo East",
      "Saki East",
      "Saki West",
      "Surulere Oyo State"
    ]
  },
  {
    state: "Imo",
    alias: "imo",
    lgas: [
      "Aboh Mbaise",
      "Ahiazu Mbaise",
      "Ehime Mbano",
      "Ezinihitte",
      "Ideato North",
      "Ideato South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala Mbano",
      "Mbaitoli",
      "Isu",
      "Ngor Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Okigwe",
      "Orlu",
      "Orsu",
      "Oru East",
      "Oru West",
      "Owerri Municipal",
      "Owerri North",
      "Unuimo",
      "Owerri West"
    ]
  },
  {
    state: "Kaduna",
    alias: "kaduna",
    lgas: [
      "Birnin Gwari",
      "Chikun",
      "Giwa",
      "Ikara",
      "Igabi",
      "Jaba",
      "Jema'a",
      "Kachia",
      "Kaduna North",
      "Kaduna South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon Gari",
      "Sanga",
      "Soba",
      "Zangon Kataf",
      "Zaria"
    ]
  },
  {
    state: "Kebbi",
    alias: "kebbi",
    lgas: [
      "Aleiro",
      "Argungu",
      "Arewa Dandi",
      "Augie",
      "Bagudo",
      "Birnin Kebbi",
      "Bunza",
      "Dandi",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko/Besse",
      "Maiyama",
      "Ngaski",
      "Shanga",
      "Suru",
      "Sakaba",
      "Wasagu/Danko",
      "Yauri",
      "Zuru"
    ]
  },
  {
    state: "Kano",
    alias: "kano",
    lgas: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin Kudu",
      "Dawakin Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun Mallam",
      "Gezawa",
      "Gaya",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin Gado",
      "Rogo",
      "Shanono",
      "Takai",
      "Sumaila",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun Wada",
      "Ungogo",
      "Warawa",
      "Wudil"
    ]
  },
  {
    state: "Kogi",
    alias: "kogi",
    lgas: [
      "Ajaokuta",
      "Adavi",
      "Ankpa",
      "Bassa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela Odolu",
      "Ijumu",
      "Kogi",
      "Kabba/Bunu",
      "Lokoja",
      "Ofu",
      "Mopa Muro",
      "Ogori/Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Yagba East",
      "Yagba West"
    ]
  },
  {
    state: "Osun",
    alias: "osun",
    lgas: [
      "Aiyedire",
      "Atakunmosa West",
      "Atakunmosa East",
      "Aiyedaade",
      "Boluwaduro",
      "Boripe",
      "Ife East",
      "Ede South",
      "Ife North",
      "Ede North",
      "Ife South",
      "Ejigbo",
      "Ife Central",
      "Ifedayo",
      "Egbedore",
      "Ila",
      "Ifelodun",
      "Ilesa East",
      "Ilesa West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo Otin",
      "Ola Oluwa",
      "Olorunda",
      "Oriade",
      "Orolu",
      "Osogbo"
    ]
  },
  {
    state: "Sokoto",
    alias: "sokoto",
    lgas: [
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Isa",
      "Kebbe",
      "Kware",
      "Rabah",
      "Sabon Birni",
      "Shagari",
      "Silame",
      "Sokoto North",
      "Sokoto South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo",
      "Binji",
      "Bodinga",
      "Dange Shuni",
      "Goronyo",
      "Gada"
    ]
  },
  {
    state: "Plateau",
    alias: "plateau",
    lgas: [
      "Bokkos",
      "Barkin Ladi",
      "Bassa",
      "Jos East",
      "Jos North",
      "Jos South",
      "Kanam",
      "Kanke",
      "Langtang South",
      "Langtang North",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase"
    ]
  },
  {
    state: "Taraba",
    alias: "taraba",
    lgas: [
      "Ardo Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim Lamido",
      "Kumi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing"
    ]
  },
  {
    state: "Yobe",
    alias: "yobe",
    lgas: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari"
    ]
  },
  {
    state: "Zamfara",
    alias: "zamfara",
    lgas: [
      "Anka",
      "Birnin Magaji/Kiyaw",
      "Bakura",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Kaura Namoda",
      "Maradun",
      "Shinkafi",
      "Maru",
      "Talata Mafara",
      "Tsafe",
      "Zurmi"
    ]
  },
  {
    state: "Lagos",
    alias: "lagos",
    lgas: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Badagry",
      "Apapa",
      "Epe",
      "Eti Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Island",
      "Mushin",
      "Lagos Mainland",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere Lagos State"
    ]
  },
  {
    state: "Katsina",
    alias: "katsina",
    lgas: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Danja",
      "Dandume",
      "Dan Musa",
      "Daura",
      "Dutsi",
      "Dutsin Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai'Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango"
    ]
  },
  {
    state: "Kwara",
    alias: "kwara",
    lgas: [
      "Asa",
      "Baruten",
      "Edu",
      "Ilorin East",
      "Ifelodun",
      "Ilorin South",
      "Ekiti Kwara State",
      "Ilorin West",
      "Irepodun",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke Ero",
      "Oyun",
      "Pategi"
    ]
  },
  {
    state: "Nasarawa",
    alias: "nasarawa",
    lgas: [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Lafia",
      "Kokona",
      "Nasarawa Egon",
      "Nasarawa",
      "Obi",
      "Toto",
      "Wamba"
    ]
  },
  {
    state: "Niger",
    alias: "niger",
    lgas: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Mariga",
      "Magama",
      "Mokwa",
      "Mashegu",
      "Moya",
      "Paikoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi"
    ]
  },
  {
    state: "Abia",
    alias: "abia",
    lgas: [
      "Aba North",
      "Arochukwu",
      "Aba South",
      "Bende",
      "Isiala Ngwa North",
      "Ikwuano",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umu Nneochi"
    ]
  }
];
const states = statesAndLGAs.map((state) => state.state);
const getLGAs = (state) => {
  return statesAndLGAs.find((s) => s.state.toLowerCase() === state.toLowerCase())?.lgas ?? [];
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { applicationId = "" } = useRouteParams();
    const toast = useToast();
    const {
      data: app,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$DohO30Jymv")), __temp = await __temp, __restore(), __temp);
    const initial = computed(() => {
      return {
        firstName: app.value?.firstName ?? "",
        middleName: app.value?.middleName ?? "",
        otherNames: app.value?.otherNames ?? "",
        lastName: app.value?.lastName ?? "",
        phoneNumber: app.value?.phoneNumber ?? "",
        gender: app.value?.gender ?? "male",
        birthDay: app.value?.birthDay ?? 1,
        birthMonth: app.value?.birthMonth ?? Calendar.months().long[0],
        birthYear: app.value?.birthYear ?? Calendar.allowedYears()[0],
        nationality: app.value?.nationality ?? "Nigeria",
        stateOfOrigin: app.value?.stateOfOrigin ?? "",
        lga: app.value?.lga ?? "",
        nin: app.value?.nin ?? ""
      };
    });
    const state = reactive({ ...initial.value });
    const hasUnsavedChanges = computed(() => {
      return JSON.stringify(state) !== JSON.stringify(initial.value);
    });
    const saveProgress = async (successFn) => {
      await save({
        applicationId,
        state,
        schema: personalSchema,
        toast,
        onSuccess: () => {
          successFn();
        }
      });
    };
    const items = [
      {
        label: "Save and Continue",
        onSelect: async () => {
          await saveProgress(() => {
            navigateTo(`/application/portal/${applicationId}/family-info`);
          });
        }
      },
      {
        label: "Save Only",
        onSelect: async () => {
          await saveProgress(() => {
            refresh();
          });
        }
      },
      {
        label: "Save and Exit",
        onSelect: async () => {
          await saveProgress(() => {
            navigateTo(`/application/portal`);
          });
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtForm = _sfc_main$1;
      const _component_NuxtFormField = _sfc_main$2;
      const _component_NuxtInput = _sfc_main$3;
      const _component_NuxtSelect = _sfc_main$4;
      const _component_NuxtSelectMenu = _sfc_main$5;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Personal Information</h1><p class="text-sm muted"> Please provide accurate information about yourself. This information is essential for your application process. </p></header><section class="my-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(app)) {
        _push(ssrRenderComponent(_component_NuxtForm, {
          state: unref(state),
          schema: unref(personalSchema),
          disabled: unref(app).status !== "pending"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid md:grid-cols-2 gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "firstName",
                label: "First Name",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).firstName,
                      "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstName,
                        "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "middleName",
                label: "Middle Name"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).middleName,
                      "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).middleName,
                        "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "otherNames",
                label: "Other Names"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).otherNames,
                      "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).otherNames,
                        "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "lastName",
                label: "Last Name",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).lastName,
                      "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).lastName,
                        "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "email",
                label: "Email Address",
                required: "",
                class: "md:col-span-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      value: unref(app).user.email,
                      disabled: "",
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        value: unref(app).user.email,
                        disabled: "",
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "phoneNumber",
                label: "Phone Number",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).phoneNumber,
                      "onUpdate:modelValue": ($event) => unref(state).phoneNumber = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).phoneNumber,
                        "onUpdate:modelValue": ($event) => unref(state).phoneNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "gender",
                label: "Gender",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).gender,
                      "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                      items: ["male", "female"],
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).gender,
                        "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                        items: ["male", "female"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="md:col-span-2 grid gap-2.5 md:grid-cols-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "birthDay",
                label: "Day of Birth",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).birthDay,
                      "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                      items: unref(Calendar).monthDays(),
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthDay,
                        "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                        items: unref(Calendar).monthDays(),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "birthMonth",
                label: "Month of Birth",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).birthMonth,
                      "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                      items: unref(Calendar).months().long,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthMonth,
                        "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                        items: unref(Calendar).months().long,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "birthYear",
                label: "Year of Birth",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).birthYear,
                      "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                      items: unref(Calendar).allowedYears(),
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthYear,
                        "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                        items: unref(Calendar).allowedYears(),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nationality",
                label: "Nationality",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).nationality,
                      "onUpdate:modelValue": ($event) => unref(state).nationality = $event,
                      items: unref(countries).map((c) => c.name),
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).nationality,
                        "onUpdate:modelValue": ($event) => unref(state).nationality = $event,
                        items: unref(countries).map((c) => c.name),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(state).nationality.toLowerCase() === "nigeria") {
                _push2(ssrRenderComponent(_component_NuxtFormField, {
                  name: "stateOfOrigin",
                  label: "State of Origin",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        items: unref(states),
                        size: "lg",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtSelectMenu, {
                          modelValue: unref(state).stateOfOrigin,
                          "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                          items: unref(states),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_NuxtFormField, {
                  name: "stateOfOrigin",
                  label: "State of Origin",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtInput, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).stateOfOrigin,
                          "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "lga",
                label: "L.G.A/Town",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).lga,
                      "onUpdate:modelValue": ($event) => unref(state).lga = $event,
                      items: unref(getLGAs)(unref(state).stateOfOrigin),
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).lga,
                        "onUpdate:modelValue": ($event) => unref(state).lga = $event,
                        items: unref(getLGAs)(unref(state).stateOfOrigin),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nin",
                label: "NIN / Government-Issued ID Number",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).nin,
                      "onUpdate:modelValue": ($event) => unref(state).nin = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nin,
                        "onUpdate:modelValue": ($event) => unref(state).nin = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "grid md:grid-cols-2 gap-2.5" }, [
                  createVNode(_component_NuxtFormField, {
                    name: "firstName",
                    label: "First Name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstName,
                        "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "middleName",
                    label: "Middle Name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).middleName,
                        "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "otherNames",
                    label: "Other Names"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).otherNames,
                        "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "lastName",
                    label: "Last Name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).lastName,
                        "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "email",
                    label: "Email Address",
                    required: "",
                    class: "md:col-span-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        value: unref(app).user.email,
                        disabled: "",
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "phoneNumber",
                    label: "Phone Number",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).phoneNumber,
                        "onUpdate:modelValue": ($event) => unref(state).phoneNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "gender",
                    label: "Gender",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).gender,
                        "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                        items: ["male", "female"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "md:col-span-2 grid gap-2.5 md:grid-cols-3" }, [
                    createVNode(_component_NuxtFormField, {
                      name: "birthDay",
                      label: "Day of Birth",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).birthDay,
                          "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                          items: unref(Calendar).monthDays(),
                          class: "w-full",
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "birthMonth",
                      label: "Month of Birth",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).birthMonth,
                          "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                          items: unref(Calendar).months().long,
                          class: "w-full",
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "birthYear",
                      label: "Year of Birth",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).birthYear,
                          "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                          items: unref(Calendar).allowedYears(),
                          class: "w-full",
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "nationality",
                    label: "Nationality",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).nationality,
                        "onUpdate:modelValue": ($event) => unref(state).nationality = $event,
                        items: unref(countries).map((c) => c.name),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  unref(state).nationality.toLowerCase() === "nigeria" ? (openBlock(), createBlock(_component_NuxtFormField, {
                    key: 0,
                    name: "stateOfOrigin",
                    label: "State of Origin",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        items: unref(states),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_NuxtFormField, {
                    key: 1,
                    name: "stateOfOrigin",
                    label: "State of Origin",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })),
                  createVNode(_component_NuxtFormField, {
                    name: "lga",
                    label: "L.G.A/Town",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).lga,
                        "onUpdate:modelValue": ($event) => unref(state).lga = $event,
                        items: unref(getLGAs)(unref(state).stateOfOrigin),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "nin",
                    label: "NIN / Government-Issued ID Number",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nin,
                        "onUpdate:modelValue": ($event) => unref(state).nin = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(app)) {
        _push(`<footer class="flex items-center gap-2.5 justify-between">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Previous",
          color: "neutral",
          variant: "soft",
          onClick: ($event) => unref(handlePreviousClick)(
            unref(hasUnsavedChanges),
            `/application/portal/${unref(applicationId)}`
          )
        }, null, _parent));
        if (unref(app).status !== "pending") {
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/family-info`,
            label: "Next"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(VueMultiSelectButton), { items }, null, _parent));
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/personal-info/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BCF2GZJJ.mjs.map
