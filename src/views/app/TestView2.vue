<script setup>

</script>

<template>
  <div class="row gx-6 mb-4 scrollbar">
    <div class="col-12">
      <div data-list="{&quot;valueNames&quot;:[&quot;country&quot;,&quot;users&quot;,&quot;transactions&quot;,&quot;revenue&quot;,&quot;conv-rate&quot;],&quot;page&quot;:5}">
        <div class="mb-5 mt-7">
          <h3>MAINTENANCE PROGRAM STATUS</h3>
          <p class="text-body-tertiary">
            <b>RA-04144</b> | Robinson R-44 | S/N - 1162
          </p>
        </div>
        <ul class="nav nav-underline mb-3 fs-9" id="myTab" role="tablist">
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
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6 class="mb-0">
                        100
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">
                        12
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">05.07.2022</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>1050,0</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>31.07.2022</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>1150,0</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>85</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>977,1</h6>
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
                      <h6 class="mb-0">
                        -
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">
                        144
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">20.06.2015</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>20.06.2027</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>144</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">2200</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">20.06.2015</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>179,36</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>2200</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>2027,1</h6>
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
                      <h6 class="mb-0">300</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">36</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">05.07.2022</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>158,6</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>31.07.2024</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>458,6</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>109</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>285,7</h6>
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
                      <h6 class="mb-0">300</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>300</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>127,1</h6>
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
                      <h6 class="mb-0">500</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>500</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>327,1</h6>
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
                      <h6 class="mb-0">500</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">12</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">31.07.2022</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>179,4</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>05.07.2023</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>679,36</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>97</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>506,5</h6>
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
                      <h6 class="mb-0">500</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>500</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>327,1</h6>
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
                      <h6 class="mb-0">500</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <h6 class="mb-0">N/A - as not installed</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">12</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <h6 class="mb-0">N/A - as not installed</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">36</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <h6 class="mb-0">N/A - as not installed</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">36</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <h6 class="mb-0">N/A - as not installed</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">180</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%" colspan="3">
                      <h6 class="mb-0">N/A - as not installed</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">
                        -
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">120</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">20.06.2019</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>RHC</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>20.06.2023</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>96</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
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
                      <h6 class="mb-0">
                        50
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">
                        -
                      </h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">05.07.2022</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>158,0</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>UA.145.0029</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>208</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>35,1</h6>
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
                      <h6 class="mb-0">100</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6 class="mb-0">18.07.2018</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>100,5</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>UA.145.0029</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>200,5</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>27,6</h6>
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
                      <h6>300</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:5%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>UA.145.0029</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>300</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>-</h6>
                    </td>
                    <td class="align-middle py-2 text-center border-end" style="width:6%">
                      <h6>127,1</h6>
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
            <div class="tab-pane fade show active" id="tab-part4" role="tabpanel" aria-labelledby="part4-tab">
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