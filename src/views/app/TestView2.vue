<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';

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
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<template>
  <div class="row gx-6 mb-4 scrollbar">
    <div class="col-12">
      <div data-list="{&quot;valueNames&quot;:[&quot;country&quot;,&quot;users&quot;,&quot;transactions&quot;,&quot;revenue&quot;,&quot;conv-rate&quot;],&quot;page&quot;:5}">
        <div class="mb-5 mt-7">
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
          <li class="nav-item">
            <a class="nav-link active" id="part1-tab"
              data-bs-toggle="tab" href="#tab-part1" role="tab"
              aria-controls="tab-part1" aria-selected="true">
              PART 1. SCHEDULED MAINTENANCE - AIRCRAFT (RHC RTR 460 MM)
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="part2-tab"
              data-bs-toggle="tab" href="#tab-part2" role="tab"
              aria-controls="tab-part2" aria-selected="false">
              PART 2. SCHEDULED MAINTENANCE - ENGINE (Lycoming 60297-10 Operator’s Manual)
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="part3-tab"
              data-bs-toggle="tab" href="#tab-part3" role="tab"
              aria-controls="tab-part3" aria-selected="false">
              PART 3.
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
                  <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">1. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              100 hours/12 months inspection - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end fw-light" style="width:5%">
                      <div class="mb-0 fs--1">
                        100
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        12
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">05.07.2022</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">1050,0</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">31.07.2022</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">1150,0</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">85</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">977,1</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">2. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              12 years inspection  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        -
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        144
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">20.06.2015</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">20.06.2027</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">144</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">3. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              2200 hours inspection  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">2200</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">20.06.2015</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">179,36</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">2200</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">2027,1</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">4. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Lubricate C181-3 bearing  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">300</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">36</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">05.07.2022</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div>158,6</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">31.07.2024</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">458,6</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">109</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">285,7</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">5. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Replace hydraulic filter  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">300</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">300</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">127,1</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">6. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Drain and flush gearboxes  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">500</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div>-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div>-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div>-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div>500</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">327,1</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">7. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Clean gearbox chip detectors  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">500</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">12</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">31.07.2022</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">179,4</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">05.07.2023</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div>679,36</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">97</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">506,5</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">8. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Perform clutch assembly fluid insp. and servicing  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">500</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">500</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">327,1</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">9. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Service collective spring (manual controls)  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">500</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <div class="mb-0 fs--1">N/A - as not installed</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">10. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Perform pop-out float leak check  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">12</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <div class="mb-0 fs--1">N/A - as not installed</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">11. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Perform pop-out float inflation check  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">36</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <div class="mb-0 fs--1">N/A - as not installed</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">12. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Perform pop-out float pressure cyl. hydrost. test  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">36</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <div class="mb-0 fs--1">N/A - as not installed</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">13. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Pop-out float pressure cylinder maximum life  - Table 1 RTR 460 MM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">180</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <div class="mb-0 fs--1">N/A - as not installed</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">14. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              Helicopter weighting&balance - ED-01-15
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        -
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">120</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">20.06.2019</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">RHC</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">20.06.2023</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">96</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
                  <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">1. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              50 hours inspection - Section 4 60297-10 OM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">
                        50
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">
                        -
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">05.07.2022</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">158,0</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">UA.145.0029</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">208</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">35,1</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">2. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              100 hours inspection - Section 4 60297-10 OM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">100</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">18.07.2018</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">100,5</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">UA.145.0029</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">200,5</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">27,6</div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="list" id="table-regions-by-revenue"><tr>
                    <td class="white-space-nowrap py-2 ps-0 country border-end" style="width:32%">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 pe-2">2. </h6>
                        <a href="#!">
                          <div class="d-flex align-items-center">
                            <p class="mb-0 text-primary fw-bold fs-9">
                              400 hours inspection - Section 4 60297-10 OM
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">300</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">UA.145.0029</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">300</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">-</div>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <div class="mb-0 fs--1">127,1</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-part3" role="tabpanel" aria-labelledby="part3-tab">
            <h3>PART 3</h3>
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
          </div>
            <div class="tab-pane fade show" id="tab-part4" role="tabpanel" aria-labelledby="part4-tab">
              <h3>PART 4</h3>
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>