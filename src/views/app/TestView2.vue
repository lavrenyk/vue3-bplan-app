<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';

import part1_json from '@/assets/demo-data/part1_table_data.json';
import part2_json from '@/assets/demo-data/part2_table_data.json';
import part3_json from '@/assets/demo-data/part3_table_data.json';
import part4_json from '@/assets/demo-data/part4_table_data.json';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const part1_table_data = part1_json;
    const part2_table_data = part2_json;
    const part3_table_data = part3_json;
    const part4_table_data = part4_json;

    const tab_number = ref(1);

    const set_tab_number = (number) => {
      tab_number.value = number;
    }
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      onSwiper,
      onSlideChange,
      part1_table_data,
      part2_table_data,
      part3_table_data,
      part4_table_data,
      tab_number,
      set_tab_number
    };

  },
};
</script>

<template>
  <div class="row gx-6 mb-4 scrollbar">
    <div class="col-12">
      <div data-list="{&quot;valueNames&quot;:[&quot;country&quot;,&quot;users&quot;,&quot;transactions&quot;,&quot;revenue&quot;,&quot;conv-rate&quot;],&quot;page&quot;:5}">
        <div class="mb-5 mt-5">
          <h3>MAINTENANCE PROGRAM STATUS</h3>
        </div>
        <div class="row g-5 mb-5 mb-lg-8">
          <div class="col-12 col-xl-4 col-xxl-3">
            <div class="card border h-100 w-100 overflow-hidden">
              <div class="bg-holder d-block bg-card"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/bg/bg-right-26.png')+ ')', backgroundPosition: 'top right'}"></div>
                <!--/.bg-holder-->
                <div class="d-dark-none">
                  <div class="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card"
                    :style="{ backgroundImage: 'url(' + require('@/assets/img/spot-illustrations/32.png')+ ')', backgroundPosition: 'top right'}"></div>
                  <!--/.bg-holder-->
                  </div>
                  <div class="d-light-none">
                  <div class="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card"
                    :style="{ backgroundImage: 'url(' + require('@/assets/img/spot-illustrations/32.png')+ ')', backgroundPosition: 'top right'}"></div>
                    <!--/.bg-holder-->
                  </div>
                  <div class="card-body px-3 pb-0 position-relative">
                    <h4 class="mb-2">Hellicopter Robinson R-44 </h4>
                    <div class="border-bottom border-translucent mb-3">
                      <ul class="list-group list-group-flush text-800">
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Aircraft Registration:</span>
                            </span>
                            <span>RA-04144</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Aircraft Serial Number:</span>
                            </span>
                            <span>1162</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Aircraft Manufacturing Date:</span>
                            </span>
                            <span>25.03.2002</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Aircraft Total Hours:</span>
                            </span>
                            <span>172,90</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="border-bottom border-translucent mb-3">
                      <h6 class="pb-2 border-bottom border-translucent">Engine</h6>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Type:</span>
                            </span>
                            <span>Lycoming O-540-F1B5</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Serial Number:</span>
                            </span>
                            <span>L-26573-40A</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Manufacturing Date:</span>
                            </span>
                            <span>01.04.2006</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Total Hours:</span>
                            </span>
                            <span>172,90</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="border-bottom border-translucent">
                      <h6 class="pb-2 border-bottom border-translucent">Misc</h6>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">RTR 460 MM:</span>
                            </span>
                            <span>Rev. dated AUG 2022</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Lycoming 60297-10 OM:</span>
                            </span>
                            <span>Rev. dated MAR 2009</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">MP:</span>
                            </span>
                            <span>PS MP R44-N</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">MTOW:</span>
                            </span>
                            <span>1089,0</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Empty Weight:</span>
                            </span>
                            <span>670,6</span>
                          </div>
                        </li>
                        <li class="list-group-item bg-transparent list-group-crm border-none fs-9 py-1">
                          <div class="d-flex justify-content-between">
                            <span class="fw-normal fs-9 mx-1">
                              <span class="fw-bold">Control Date:</span>
                            </span>
                            <span>20.06.2015</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <div class="row g-3">
                  <div class="col-12">
                    <div class="d-flex align-items-center border border-translucent rounded-3 text-center h-100">
                      <swiper
                        :slides-per-view="1"
                        :space-between="50"
                        :modules="[Thumbs]"
                        :thumbs="{ swiper: thumbsSwiper }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange">
                        <swiper-slide>
                          <div class="product-thumb-container p-2 p-sm-3 p-xl-2" style="height: 430px"
                            :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="product-thumb-container p-2 p-sm-3 p-xl-2" style="height: 430px"
                            :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo-inside.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="product-thumb-container p-2 p-sm-3 p-xl-2" style="height: 430px"
                            :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo-cockpit.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
                          </div>
                        </swiper-slide>
                      </swiper>
                    </div>
                  </div>
                <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                <swiper
                  :slides-per-view="5"
                  :space-between="10"
                  :modules="[Thumbs]"
                  watch-slides-progress
                  @swiper="setThumbsSwiper">
                  <swiper-slide>
                    <div class="product-thumb-container p-2 p-sm-3 p-xl-2"
                      :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="product-thumb-container p-2 p-sm-3 p-xl-2"
                      :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo-inside.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="product-thumb-container p-2 p-sm-3 p-xl-2"
                      :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo-cockpit.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
                    </div>
                  </swiper-slide>
                </swiper>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </div>
        </div>
      </div>


      <ul class="nav nav-underline mb-3 mt-4 fs-9" id="myTab" role="tablist">
        <li class="nav-item" @click="set_tab_number(1)">
          <a class="nav-link active" id="part1-tab"
            data-bs-toggle="tab" href="#tab-part1" role="tab"
            aria-controls="tab-part1" aria-selected="true">
            {{ tab_number === 1 ? "PART 1. SCHEDULED MAINTENANCE - AIRCRAFT (RHC RTR 460 MM)" : "PART 1" }}
          </a>
        </li>
        <li class="nav-item" @click="set_tab_number(2)">
          <a class="nav-link" id="part2-tab"
            data-bs-toggle="tab" href="#tab-part2" role="tab"
            aria-controls="tab-part2" aria-selected="false">
            {{ tab_number === 2 ? "PART 2. SCHEDULED MAINTENANCE - ENGINE (Lycoming 60297-10 Operator’s Manual)" : "PART 2" }}
          </a>
        </li>
        <li class="nav-item" @click="set_tab_number(3)">
          <a class="nav-link" id="part3-tab"
            data-bs-toggle="tab" href="#tab-part3" role="tab"
            aria-controls="tab-part3" aria-selected="false">
            {{ tab_number === 3 ? "PART 3. SCHEDULED MAINTENANCE - EQUIPMENT - VENDORS CMM / CAA REQUIREMENTS" : "PART 3" }}
          </a>
        </li>
        <li class="nav-item" @click="set_tab_number(4)">
          <a class="nav-link" id="part4-tab"
            data-bs-toggle="tab" href="#tab-part4" role="tab"
            aria-controls="tab-part4" aria-selected="false">
            {{ tab_number === 4 ? "PART 4. SCHEDULED MAINTENANCE - AD/ASB/SB/CEB REQUIREMENTS" : "PART 4" }}
          </a>
        </li>
      </ul>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="tab-part1" role="tabpanel" aria-labelledby="part1-tab">
            <div class="table-responsive scrollbar">
              <table class="table fs-10 mb-0">
                <thead>
                  <tr>
                    <th class="border-top border-translucent ps-0 align-middle border-end"
                      style="width:40%"  rowspan="2">
                      DESCRIPTION/REFERENCE
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      INTERVAL
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      ACTUAL MAINT.
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" rowspan="2">
                      PERFORMED <br>BY
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      NEXT DUE/PLAN
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      REMAINED
                    </th>
                  </tr>
                  <tr>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      Months
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      A/C TT
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Months
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                  </tr>
                </thead>
                <!-- RENDER PART1 TABLE ROWS -->
                <tbody v-for="item in part1_table_data" :key="item.id" class="list" id="table-regions-by-revenue">
                  <tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">{{ item.id }}. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              {{ item.title }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end fw-light" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.months || "-" }}
                      </div>
                    </td>
                    <td v-if="(item.id >= 9 && item.id <= 13)"
                      class="align-middle py-2 text-center border-end" :colspan="3">
                      <div class="mb-0 fs--1">
                        N/A - as not installed
                      </div>
                    </td>
                    <td v-if="(item.id >=1 && item.id <= 8) || item.id === 14"
                      class="align-middle py-2 text-center border-end"
                      style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.date || "-" }}
                      </div>
                    </td>
                    <td v-if="(item.id >= 1 && item.id <= 8) || item.id === 14"
                      class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.ac_tt || "-" }}
                      </div>
                    </td>
                    <td v-if="(item.id >= 1 && item.id <= 8) || item.id === 14"
                      class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.formed_by || "-"}}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.date || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.months || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.f_hours || "-" }}
                      </div>
                    </td>
                  </tr>
                </tbody>
                <!-- END RENDERING PART 1 TABLE ROWS -->
              </table>
            </div>
          </div>

          <!-- PART2 TABLE -->
          <div class="tab-pane fade" id="tab-part2" role="tabpanel" aria-labelledby="part2-tab">
            <div class="table-responsive scrollbar">
              <table class="table fs-10 mb-0">
                <thead>
                  <tr>
                    <th class="border-top border-translucent ps-0 align-middle border-end"
                      style="width:40%"  rowspan="2">
                      DESCRIPTION/REFERENCE
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      INTERVAL
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      ACTUAL MAINT.
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" rowspan="2">
                      PERFORMED <br>BY
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      NEXT DUE/PLAN
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      REMAINED
                    </th>
                  </tr>
                  <tr>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      Month
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      A/C TT
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Month
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                  </tr>
                </thead>
                <!-- START RENDERING PART 2 TABLE ROWS -->
                <tbody v-for="item in part2_table_data" :key="item.id" class="list" id="table-regions-by-revenue">
                  <tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">{{ item.id }}. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              {{ item.title }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end fw-light" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.months || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end"
                      style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.date || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.ac_tt || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.formed_by || "-"}}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.date || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.months || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.f_hours || "-" }}
                      </div>
                    </td>
                  </tr>
                </tbody>
                <!-- END RENDERING PART 2 TABLE ROWS -->
              </table>
            </div>
          </div>
          <!-- END PART2 TABLE -->

          <!-- START PART3 TABLE -->
          <div class="tab-pane fade" id="tab-part3" role="tabpanel" aria-labelledby="part3-tab">
            <div class="table-responsive scrollbar">
              <table class="table fs-10 mb-0">
                <thead>
                  <tr>
                    <th class="border-top border-translucent ps-0 align-middle border-end"
                      style="width:40%"  rowspan="2">
                      DESCRIPTION/REFERENCE
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      INTERVAL
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      ACTUAL MAINT.
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" rowspan="2">
                      PERFORMED <br>BY
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      NEXT DUE/PLAN
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      REMAINED
                    </th>
                  </tr>
                  <tr>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      Month
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      A/C TT
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Month
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                  </tr>
                </thead>
                <!-- START RENDERING PART 3 TABLE ROWS -->
                <tbody v-for="item in part3_table_data" :key="item.id" class="list" id="table-regions-by-revenue">
                  <tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">{{ item.id }}. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              {{ item.title }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end fw-light" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.months || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end"
                      style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.date || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.ac_tt || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.formed_by || "-"}}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.date || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.months || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.f_hours || "-" }}
                      </div>
                    </td>
                  </tr>
                </tbody>
                <!-- END RENDERING PART 3 TABLE ROWS -->
              </table>
            </div>
          </div>
          <!-- END PART3 TABLE -->

          <!-- PART4 TABLE -->
          <div class="tab-pane fade show" id="tab-part4" role="tabpanel" aria-labelledby="part4-tab">
            <div class="table-responsive scrollbar">
              <table class="table fs-10 mb-0">
                <thead>
                  <tr>
                    <th class="border-top border-translucent ps-0 align-middle border-end"
                      style="width:40%"  rowspan="2">
                      DESCRIPTION/REFERENCE
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      INTERVAL
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      ACTUAL MAINT.
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" rowspan="2">
                      PERFORMED <br>BY
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      NEXT DUE/PLAN
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:12%" colspan="2">
                      REMAINED
                    </th>
                  </tr>
                  <tr>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="border-top border-translucent align-middle text-center border-end"
                      style="width:6%">
                      Month
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end align-middle text-center border-end"
                      style="width:6%">
                      A/C TT
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Date
                    </th>
                    <th class="border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      Month
                    </th>
                    <th class="sort border-top border-translucent text-end pe-0 align-middle text-center border-end"
                      style="width:6%">
                      F.Hours
                    </th>
                  </tr>
                </thead>
                <!-- START RENDERING PART 4 TABLE ROWS -->
                <tbody v-for="item in part4_table_data" :key="item.id" class="list" id="table-regions-by-revenue">
                  <tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">{{ item.id }}. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              {{ item.title }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end fw-light" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.interval.months || "-" }}
                      </div>
                    </td>
                    <td v-if="item.id === 1"
                      class="align-middle py-2 text-center border-end" :colspan="3">
                      <div class="mb-0 fs--1">
                        N/A - as C016-7 installed
                      </div>
                    </td>
                    <td v-if="item.id > 1"
                      class="align-middle py-2 text-center border-end"
                      style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.date || "-" }}
                      </div>
                    </td>
                    <td v-if="item.id > 1"
                      class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        {{ item.actual_maint.ac_tt || "-" }}
                      </div>
                    </td>
                    <td v-if="item.id > 1"
                      class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.formed_by || "-"}}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.date || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.next_due_plan.f_hours || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.months || "-" }}
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        {{ item.remained.f_hours || "-" }}
                      </div>
                    </td>
                  </tr>
                </tbody>
                <!-- END RENDERING PART 4 TABLE ROWS -->
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>