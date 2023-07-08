<template>
  <!-- SECTION 1 -->
  <div class="row gy-3 mb-6 justify-content-between">
    <div class="col-md-9 col-auto">
      <h2 class="mb-2 text-1100">
        Projects Dashboard
      </h2>
      <h5 class="text-700 fw-semi-bold">
        Here’s what’s going on at your business right now
      </h5>
    </div>
    <div class="col-md-3 col-auto">
      <div class="flatpickr-input-container">
        <input class="form-control ps-6 datetimepicker flatpickr-input"
          id="datepicker" type="text"
          data-options="{&quot;dateFormat&quot;:&quot;M j, Y&quot;,&quot;disableMobile&quot;:true,&quot;defaultDate&quot;:&quot;Mar 1, 2022&quot;}"
          readonly="readonly">
          <span class="uil uil-calendar-alt flatpickr-icon text-700"></span>
      </div>
    </div>
  </div>
  <!-- END SECTION 1 -->

  <!-- SECTION 2 -->
  <div class="row mb-3 gy-6">
    <div class="col-12 col-xxl-2">
      <div class="row align-items-center g-3 g-xxl-0 h-100 align-content-between">
        <div class="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
          <div class="d-flex align-items-center">
            <span class="fs-4 lh-1 uil uil-books text-primary-500"></span>
            <div class="ms-2">
              <div class="d-flex align-items-end">
                <span class="fs-1 fw-semi-bold text-900">
                  спринт
                </span>
                <h2 class="mb-0 ms-2">
                  #1
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
          <div class="d-flex align-items-center">
            <span class="fs-4 lh-1 uil uil-users-alt text-success-500"></span>
            <div class="ms-2">
              <div class="d-flex align-items-end">
                <span class="fs-1 fw-semi-bold text-900">
                  участников
                </span>
                <h2 class="mb-0 ms-2">
                  6
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="d-flex align-items-center">
            <div class="card border border-300 h-100 w-100 overflow-hidden">
              <div class="bg-holder d-block bg-card"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/spot-illustrations/32.png')+ ')', backgroundPosition: 'top right'}">
              </div>
              <!--/.bg-holder-->
              <div class="card-body px-3 py-3 position-relative">
                <div class="badge badge-phoenix fs--2 badge-phoenix-warning mb-2">
                  <span class="fw-bold">
                    Основная цель текущего спринта
                  </span>
                  <span class="fa-solid fa-award ms-1"></span>
                </div>
                <p class="text-700 fw-semi-bold mb-0">
                  Перенос движка программы с vue2 на vue3
                </p>
              </div>
              <div class="card-footer border-0 py-0 px-5 z-index-1">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-xl-6 col-xxl-5">
      <div class="mx-xxl-0">
        <h3>Project: zero Roadmap</h3>
        <p class="text-700">
          Phase 2 is now ongoing
        </p>
        <div class="gantt-zero-roadmap">
          <div class="row g-2 flex-between-center mb-3">
            <div class="col-12 col-sm-auto">
              <div class="d-flex">
                <div class="d-flex align-items-end me-3">
                  <label class="form-check-label mb-0 me-2 lh-1 text-900" for="progress">Progress</label>
                  <div class="form-check form-switch min-h-auto mb-0">
                    <input class="form-check-input" id="progress" type="checkbox"
                      checked="" data-gantt-progress="data-gantt-progress">
                  </div>
                </div>
                <div class="d-flex align-items-end flex-1">
                  <label class="form-check-label mb-0 me-2 lh-1 text-900" for="links">
                    Links
                  </label>
                  <div class="form-check form-switch min-h-auto flex-1 mb-0">
                    <input class="form-check-input" id="links" type="checkbox" checked="" data-gantt-links="data-gantt-links">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-auto">
              <div class="btn-group" role="group" data-gantt-scale="data-gantt-scale">
                <input class="btn-check" id="weekView" type="radio" name="scaleView" value="week" checked="">
                <label class="btn btn-phoenix-secondary hover-bg-100 fs--2 py-1 mb-0" for="weekView">
                  Week
                </label>
                <input class="btn-check" id="monthView" type="radio" name="scaleView" value="month">
                <label class="btn btn-phoenix-secondary hover-bg-100 fs--2 py-1 mb-0" for="monthView">
                  Month
                </label>
                <input class="btn-check" id="yearView" type="radio" name="scaleView" value="year">
                <label class="btn btn-phoenix-secondary hover-bg-100 fs--2 py-1 mb-0" for="yearView">
                  Year
                </label>
              </div>
            </div>
          </div>
          <div class="gantt-zero-roadmap-chart" style="position: relative;">
            <div class="gantt_layout_cell gantt_layout_root gantt_layout gantt_layout_y gantt_container gantt_layout_cell_border_left gantt_layout_cell_border_top gantt_layout_cell_border_right gantt_layout_cell_border_bottom"
            data-cell-id="main" style="width: 537px; height: 222px; padding: 0px;">
            <div class="gantt_layout_cell gantt_layout gantt_layout_x  gantt_layout_cell_border_transparent gantt_layout_cell_border_bottom"
              data-cell-id="c1687270084347"
              style="margin-bottom: 0px; width: 535px; height: 219px; padding: 0px;">
              <div class="gantt_layout_cell  grid_cell gantt_layout_outer_scroll gantt_layout_outer_scroll_vertical gantt_layout_outer_scroll gantt_layout_outer_scroll_horizontal gantt_layout_cell_border_right" data-cell-id="1687270084348" style="margin-right: 0px; width: 70px; height: 218px;">
                <div class="gantt_layout_content" style="height: 218px;">
                  <div class="gantt_grid" style="height:inherit;width:inherit;" role="treegrid" aria-multiselectable="false">
                    <div class="gantt_grid_scale" role="row" style="width: inherit; height: 0px;">
                      <div class="gantt_grid_head_cell gantt_grid_head_text gantt_last_cell "
                        style="width:69px;" role="columnheader"
                        aria-label="Task name"
                        data-column-id="text" column_id="text" data-column-name="text" data-column-index="0">
                        Task name
                      </div>
                    </div>
                    <div class="gantt_grid_data" role="rowgroup" data-layer="true" style="width: inherit; height: 218px; left: 0px;">
                      <div class="gantt_row gantt_row_task" data-task-id="1" task_id="1" aria-label=" Task: Planning Start date: 2019-08-01 End date: 2019-08-04" aria-selected="false" role="row" aria-level="0" style="height: 36px; line-height: 36px; position: absolute; left: 0px; top: 0px;">
                        <div class="gantt_cell gantt_last_cell" data-column-index="0" data-column-name="text" style="width:69px;" role="gridcell" aria-label="Planning" aria-readonly="true">
                          <div class="gantt_tree_content">
                            Planning
                          </div>
                        </div>
                      </div>
                      <div class="gantt_row odd gantt_row_task" data-task-id="2" task_id="2" aria-label=" Task: Research Start date: 2019-08-02 End date: 2019-08-07" aria-selected="false" role="row" aria-level="0" style="height: 36px; line-height: 36px; position: absolute; left: 0px; top: 36px;">
                        <div class="gantt_cell gantt_last_cell" data-column-index="0" data-column-name="text" style="width:69px;" role="gridcell" aria-label="Research" aria-readonly="true">
                          <div class="gantt_tree_content">
                            Research
                          </div>
                        </div>
                      </div>
                      <div class="gantt_row gantt_row_task" data-task-id="3" task_id="3" aria-label=" Task: Design Start date: 2019-08-02 End date: 2019-08-12" aria-selected="false" role="row" aria-level="0" style="height: 36px; line-height: 36px; position: absolute; left: 0px; top: 72px;">
                        <div class="gantt_cell gantt_last_cell" data-column-index="0" data-column-name="text" style="width:69px;" role="gridcell" aria-label="Design" aria-readonly="true">
                          <div class="gantt_tree_content">
                            Design
                          </div>
                        </div>
                      </div>
                      <div class="gantt_row odd gantt_row_task" data-task-id="4" task_id="4" aria-label=" Task: Review Start date: 2019-08-05 End date: 2019-08-10" aria-selected="false" role="row" aria-level="0" style="height: 36px; line-height: 36px; position: absolute; left: 0px; top: 108px;">
                        <div class="gantt_cell gantt_last_cell" data-column-index="0" data-column-name="text" style="width:69px;" role="gridcell" aria-label="Review" aria-readonly="true">
                          <div class="gantt_tree_content">
                            Review
                          </div>
                        </div>
                      </div>
                      <div class="gantt_row gantt_row_task" data-task-id="5" task_id="5" aria-label=" Task: Develop Start date: 2019-08-06 End date: 2019-08-16" aria-selected="false" role="row" aria-level="0" style="height: 36px; line-height: 36px; position: absolute; left: 0px; top: 144px;">
                        <div class="gantt_cell gantt_last_cell" data-column-index="0" data-column-name="text" style="width:69px;" role="gridcell" aria-label="Develop" aria-readonly="true">
                          <div class="gantt_tree_content">
                            Develop
                          </div>
                        </div>
                      </div>
                      <div class="gantt_row odd gantt_row_task" data-task-id="6" task_id="6" aria-label=" Task: Review II Start date: 2019-08-10 End date: 2019-08-14" aria-selected="false" role="row" aria-level="0" style="height: 36px; line-height: 36px; position: absolute; left: 0px; top: 180px;">
                        <div class="gantt_cell gantt_last_cell" data-column-index="0" data-column-name="text" style="width:69px;" role="gridcell" aria-label="Review II" aria-readonly="true">
                          <div class="gantt_tree_content">
                            Review II
                          </div>
                        </div>
                      </div>
                      <div style="visibility: hidden; height: 216px; width: 1px;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gantt_layout_cell  timeline_cell gantt_layout_outer_scroll gantt_layout_outer_scroll_vertical gantt_layout_outer_scroll gantt_layout_outer_scroll_horizontal" data-cell-id="1687270084349" style="margin-right: 0px; width: 465px; height: 218px;">
                <div class="gantt_layout_content" style="height: 218px;">
                  <div class="gantt_task" style="width:inherit;height:inherit;">
                    <div class="gantt_task_scale" style="height: 0px; width: 1260px;">
                      <div class="gantt_scale_line" style="height:-1px;position:relative;line-height:-1px">
                        <div class="gantt_scale_cell" aria-label="#32, 05 Aug - 30 Jul" style="width:490px;height:-1px;position:absolute;left:350px">
                          #32, 05 Aug - 30 Jul
                        </div>
                        <div class="gantt_scale_cell gantt_last_cell" aria-label="#33, 12 Aug - 06 Aug" style="width:420px;height:-1px;position:absolute;left:840px">
                          #33, 12 Aug - 06 Aug
                        </div>
                      </div>
                      <div class="gantt_scale_line" style="height:0px;position:relative;line-height:0px">
                        <div class="gantt_scale_cell" aria-label="11 Sun" style="width:70px;height:0px;position:absolute;left:770px">
                          11 Sun
                        </div>
                        <div class="gantt_scale_cell" aria-label="12 Mon" style="width:70px;height:0px;position:absolute;left:840px">
                          12 Mon
                        </div>
                        <div class="gantt_scale_cell" aria-label="13 Tue" style="width:70px;height:0px;position:absolute;left:910px">
                          13 Tue
                        </div>
                        <div class="gantt_scale_cell" aria-label="14 Wed" style="width:70px;height:0px;position:absolute;left:980px">
                          14 Wed
                        </div>
                        <div class="gantt_scale_cell" aria-label="15 Thu" style="width:70px;height:0px;position:absolute;left:1050px">
                          15 Thu
                        </div>
                        <div class="gantt_scale_cell" aria-label="16 Fri" style="width:70px;height:0px;position:absolute;left:1120px">
                          16 Fri
                        </div>
                        <div class="gantt_scale_cell gantt_last_cell" aria-label="17 Sat" style="width:70px;height:0px;position:absolute;left:1190px">
                          17 Sat
                        </div>
                      </div>
                    </div>
                    <div class="gantt_data_area" style="height: 218px; width: 1260px;">
                      <div class="gantt_task_bg" data-layer="true" style="height: 216px; width: 1260px;">
                        <div class="gantt_task_row" data-task-id="1" task_id="1" style="position: absolute; top: 0px; width: 100%; height: 36px;">
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 770px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 840px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 910px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 980px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1050px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1120px;"></div>
                          <div class="gantt_task_cell gantt_last_cell weekend" style="width: 70px; position: absolute; left: 1190px;"></div>
                        </div>
                        <div class="gantt_task_row odd" data-task-id="2" task_id="2" style="position: absolute; top: 36px; width: 100%; height: 36px;">
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 770px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 840px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 910px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 980px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1050px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1120px;"></div>
                          <div class="gantt_task_cell gantt_last_cell weekend" style="width: 70px; position: absolute; left: 1190px;"></div>
                        </div>
                        <div class="gantt_task_row" data-task-id="3" task_id="3" style="position: absolute; top: 72px; width: 100%; height: 36px;">
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 770px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 840px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 910px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 980px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1050px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1120px;"></div>
                          <div class="gantt_task_cell gantt_last_cell weekend" style="width: 70px; position: absolute; left: 1190px;"></div>
                        </div>
                        <div class="gantt_task_row odd" data-task-id="4" task_id="4" style="position: absolute; top: 108px; width: 100%; height: 36px;">
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 770px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 840px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 910px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 980px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1050px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1120px;"></div>
                          <div class="gantt_task_cell gantt_last_cell weekend" style="width: 70px; position: absolute; left: 1190px;"></div>
                        </div>
                        <div class="gantt_task_row" data-task-id="5" task_id="5" style="position: absolute; top: 144px; width: 100%; height: 36px;">
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 770px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 840px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 910px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 980px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1050px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1120px;"></div>
                          <div class="gantt_task_cell gantt_last_cell weekend" style="width: 70px; position: absolute; left: 1190px;"></div>
                        </div>
                        <div class="gantt_task_row odd" data-task-id="6" task_id="6" style="position: absolute; top: 180px; width: 100%; height: 36px;">
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 770px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 840px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 910px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 980px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1050px;"></div>
                          <div class="gantt_task_cell weekend" style="width: 70px; position: absolute; left: 1120px;"></div>
                          <div class="gantt_task_cell gantt_last_cell weekend" style="width: 70px; position: absolute; left: 1190px;"></div>
                        </div>
                      </div>
                      <div class="gantt_links_area" data-layer="true" style="width: 1260px;">
                        <div class="gantt_task_link" data-link-id="2" link_id="2" aria-label="Link Planning (end) Design (start) ">
                          <div class="gantt_line_wrapper" style="top: 7px; left: 270px; height: 20px; width: 32px;">
                            <div class="gantt_link_line_right" style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 7px; left: 282px; height: 38px; width: 20px;">
                            <div class="gantt_link_line_down" style="height: 20px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 25px; left: 118px; height: 20px; width: 184px;">
                            <div class="gantt_link_line_left" style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 25px; left: 118px; height: 74px; width: 20px;">
                            <div class="gantt_link_line_down" style="height: 56px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 79px; left: 118px; height: 20px; width: 26px;">
                            <div class="gantt_link_line_right" style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_link_arrow gantt_link_arrow_right" style="top: 86px; left: 134px;"></div>
                        </div>
                        <div class="gantt_task_link" data-link-id="3" link_id="3" aria-label="Link Design (end) Review (start) ">
                          <div class="gantt_line_wrapper" style="top: 79px; left: 830px; height: 20px; width: 32px;">
                            <div class="gantt_link_line_right" style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 79px; left: 842px; height: 38px; width: 20px;">
                            <div class="gantt_link_line_down" style="height: 20px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 97px; left: 328px; height: 20px; width: 534px;">
                            <div class="gantt_link_line_left" style="height: 2px; width: 516px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 97px; left: 328px; height: 38px; width: 20px;">
                            <div class="gantt_link_line_down" style="height: 20px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 115px; left: 328px; height: 20px; width: 26px;">
                            <div class="gantt_link_line_right" style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_link_arrow gantt_link_arrow_right" style="top: 122px; left: 344px;"></div>
                        </div>
                        <div class="gantt_task_link" data-link-id="4" link_id="4" aria-label="Link Review II (start) Develop (end) ">
                          <div class="gantt_line_wrapper" style="top: 187px; left: 678px; height: 20px; width: 32px;">
                            <div class="gantt_link_line_left" style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 169px; left: 678px; height: 38px; width: 20px;">
                            <div class="gantt_link_line_up" style="height: 20px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 169px; left: 678px; height: 20px; width: 464px;">
                            <div class="gantt_link_line_right" style="height: 2px; width: 446px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 151px; left: 1122px; height: 38px; width: 20px;">
                            <div class="gantt_link_line_up" style="height: 20px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_line_wrapper" style="top: 151px; left: 1116px; height: 20px; width: 26px;">
                            <div class="gantt_link_line_left" style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
                          </div>
                          <div class="gantt_link_arrow gantt_link_arrow_left" style="top: 158px; left: 1120px;"></div>
                        </div>
                      </div>
                      <div class="gantt_bars_area" data-layer="true" style="width: 1260px;">
                        <div data-task-id="3" task_id="3" class="gantt_task_line design gantt_bar_task" aria-label=" Task: Design Start date: 2019-08-02 End date: 2019-08-12" aria-selected="false" style="left: 140px; top: 84px; height: 12px; line-height: 10px; width: 700px;">
                          <div class="gantt_task_progress_wrapper">
                            <div class="gantt_task_progress" style="width: 279px;"></div>
                          </div>
                          <div class="gantt_task_content"></div>
                        </div>
                        <div data-task-id="4" task_id="4" class="gantt_task_line review gantt_bar_task" aria-label=" Task: Review Start date: 2019-08-05 End date: 2019-08-10" aria-selected="false" style="left: 350px; top: 120px; height: 12px; line-height: 10px; width: 350px;">
                          <div class="gantt_task_progress_wrapper"><div class="gantt_task_progress" style="width: 278px;"></div>
                        </div>
                        <div class="gantt_task_content"></div>
                      </div>
                      <div data-task-id="5" task_id="5" class="gantt_task_line develop gantt_bar_task" aria-label=" Task: Develop Start date: 2019-08-06 End date: 2019-08-16" aria-selected="false" style="left: 420px; top: 156px; height: 12px; line-height: 10px; width: 700px;">
                        <div class="gantt_task_progress_wrapper">
                          <div class="gantt_task_progress" style="width: 209px;"></div>
                        </div>
                        <div class="gantt_task_content"></div>
                      </div>
                      <div data-task-id="6" task_id="6" class="gantt_task_line review-2 gantt_bar_task" aria-label=" Task: Review II Start date: 2019-08-10 End date: 2019-08-14" aria-selected="false" style="left: 700px; top: 192px; height: 12px; line-height: 10px; width: 280px;">
                        <div class="gantt_task_progress_wrapper">
                          <div class="gantt_task_progress" style="width: 6px;"></div>
                        </div>
                        <div class="gantt_task_content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="gantt_layout_cell  scrollHor_cell" data-cell-id="1687270084351" style="width: 535px; height: 1px;">
            <div class="gantt_layout_content" style="height: 1px;">
              <div class="gantt_layout_cell gantt_hor_scroll" style="width: 535px; height: 1px; top: auto;">
                <div style="width: 1331px;"></div>
              </div>
            </div>
          </div>
        </div>
        <iframe class="gantt_container_resize_watcher" tabindex="-1" role="none" aria-hidden="true"></iframe>
      </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-xl-6 col-xxl-5">
      <div class="card border border-300 h-100 w-100 overflow-hidden">
        <div class="bg-holder d-block bg-card"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/spot-illustrations/32.png')+ ')', backgroundPosition: 'top right'}">
        </div>
        <!--/.bg-holder-->
        <div class="card-body px-5 position-relative">
          <div class="badge badge-phoenix fs--2 badge-phoenix-warning mb-4">
            <span class="fw-bold">
              Основная цель спринта
            </span>
            <span class="fa-solid fa-award ms-1"></span>
          </div>
          <p class="text-700 fw-semi-bold">
            Phoenix CRM Dashboard is coming to
            <br class="d-none d-sm-block">
            market soon for fulfilling your every
            <br class="d-none d-sm-block">
            CRM related needs.
          </p>
        </div>
        <div class="card-footer border-0 py-0 px-5 z-index-1">
        </div>
      </div>
    </div>
  </div>
  <!-- END SECTION 2 -->

  <!-- SECTION 3 -->
  <div class="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 pb-3 border-y border-300">
    <div class="row">
      <div class="col-12 col-xl-7 col-xxl-6">
        <div class="row g-3 mb-3">
          <div class="col-12 col-md-6">
            <h3 class="text-1100 text-nowrap">
              Issues Discovered
            </h3>
            <p class="text-700 mb-md-7">
              Newly found and yet to be solved
            </p>
            <div class="d-flex align-items-center justify-content-between">
              <p class="mb-0 fw-bold">
                Issue type
              </p>
              <p class="mb-0 fs--1">
                Total count
                <span class="fw-bold">
                  257
                </span>
              </p>
            </div>
            <hr class="bg-200 mb-2 mt-2">
            <div class="d-flex align-items-center mb-1">
              <span class="d-inline-block bg-info-300 bullet-item me-2"></span>
              <p class="mb-0 fw-semi-bold text-900 lh-sm flex-1">
                Product design
              </p>
              <h5 class="mb-0 text-900">
                78
              </h5>
            </div>
            <div class="d-flex align-items-center mb-1">
              <span class="d-inline-block bg-warning-300 bullet-item me-2"></span>
              <p class="mb-0 fw-semi-bold text-900 lh-sm flex-1">
                Development
              </p>
              <h5 class="mb-0 text-900">
                63
              </h5>
            </div>
            <div class="d-flex align-items-center mb-1">
              <span class="d-inline-block bg-danger-300 bullet-item me-2"></span>
              <p class="mb-0 fw-semi-bold text-900 lh-sm flex-1">
                QA &amp; Testing
              </p>
              <h5 class="mb-0 text-900">
                56
              </h5>
            </div>
            <div class="d-flex align-items-center mb-1">
              <span class="d-inline-block bg-success-300 bullet-item me-2"></span>
              <p class="mb-0 fw-semi-bold text-900 lh-sm flex-1">
                Customer queries
              </p>
              <h5 class="mb-0 text-900">
                36
              </h5>
            </div>
            <div class="d-flex align-items-center">
              <span class="d-inline-block bg-primary bullet-item me-2"></span>
              <p class="mb-0 fw-semi-bold text-900 lh-sm flex-1">
                R &amp; D
              </p>
              <h5 class="mb-0 text-900">
                24
              </h5>
            </div>
            <button class="btn btn-outline-primary mt-5">
              See Details
              <span class="fas fa-angle-right ms-2 fs--2 text-center"></span>
            </button>
          </div>
          <div class="col-12 col-md-6">
            <v-chart class="chart" :option="option1" autoresize/>

            <!-- <div class="position-relative mb-sm-4 mb-xl-0">
              <div class="echart-issue-chart" style="min-height: 390px; width: 100%; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;" _echarts_instance_="ec_1687274360949"><div style="position: relative; width: 308px; height: 390px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="616" height="780" style="position: absolute; left: 0px; top: 0px; width: 308px; height: 390px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div class="" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(102, 102, 102); font: 14px / 21px sans-serif; padding: 10px; top: 0px; left: 0px; transform: translate3d(51px, 257px, 0px); border-color: rgb(255, 204, 133); pointer-events: none; visibility: hidden; opacity: 0;"><div style="margin: 0px 0 0;line-height:1;"><div style="font-size:14px;color:#666;font-weight:400;line-height:1;">Tasks assigned to me</div><div style="margin: 10px 0 0;line-height:1;"><div style="margin: 0px 0 0;line-height:1;"><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#ffcc85;"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">Development</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">63</span><div style="clear:both"></div></div><div style="clear:both"></div></div><div style="clear:both"></div></div></div></div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-5 col-xxl-6">
        <h3>Project: eleven Progress</h3>
        <p class="text-700 mb-0 mb-xl-3">Deadline &amp; progress</p>
        <v-chart class="line-chart" :option="option2" autoresize/>
      </div>
    </div>
  </div>
  <!-- END SECTION 3 -->

  <!-- SECTION 4 -->
  <div class="mx-lg-n4 mt-3">
    <div class="row g-3">
      <div class="col-12 col-xl-6 col-xxl-7">
        <div class="card todo-list h-100">
          <div class="card-header border-bottom-0 pb-0">
            <div class="row justify-content-between align-items-center mb-4">
              <div class="col-auto">
                <h3 class="text-1100">To do</h3>
                <p class="mb-0 text-700">Task assigned to me</p>
              </div>
              <div class="col-auto w-100 w-md-auto">
                <div class="row align-items-center g-0 justify-content-between">
                  <div class="col-12 col-sm-auto">
                    <div class="search-box w-100 mb-2 mb-sm-0" style="max-width:30rem;">
                      <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
                        <input class="form-control search-input search" type="search" placeholder="Search tasks" aria-label="Search">
                        <span class="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                  <div class="col-auto d-flex">
                    <p class="mb-0 ms-sm-3 fs--1 text-700 fw-bold">
                      <span class="fas fa-filter me-1 fw-extra-bold fs--2"></span>
                      23 tasks
                    </p>
                    <button class="btn btn-link p-0 ms-3 fs--1 text-primary fw-bold text-decoration-none">
                        <span class="fas fa-sort me-1 fw-extra-bold fs--2"></span>
                        Sorting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body py-0 scrollbar to-do-list-body">
            <div class="d-flex hover-actions-trigger py-3 border-top">
              <input class="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                type="checkbox"
                id="checkbox-todo-0"
                data-event-propagation-prevent="data-event-propagation-prevent">
              <div class="row justify-content-between align-items-md-center btn-reveal-trigger border-200 gx-0 flex-1"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="mb-1 mb-md-0 d-flex align-items-center lh-1">
                    <label class="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-0 me-2 line-clamp-1 text-900">
                      Designing the dungeon
                    </label>
                    <div class="badge badge-phoenix ms-auto fs--2 badge-phoenix-primary">
                      <span class="fw-bold badge-label">
                        ДРАФТ
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="d-flex lh-1 align-items-center">
                    <button class="btn p-0 text-700 fs--2 me-2">
                      <span class="fas fa-paperclip me-1"></span>
                      2
                    </button>
                    <p class="text-700 fs--2 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                      12 Nov, 2021
                    </p>
                    <div class="hover-md-hide hover-xl-show hover-xxl-hide">
                      <p class="text-700 fs--2 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl border-300">
                        12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style="top: 23%;"
                data-event-propagation-prevent="data-event-propagation-prevent">
                <div class="hover-actions end-0" data-event-propagation-prevent="data-event-propagation-prevent">
                  <button class="btn btn-phoenix-secondary btn-icon me-1 fs--2 text-900 px-0 me-1"
                    data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-edit"></span>
                  </button>
                  <button class="btn btn-phoenix-secondary btn-icon fs--2 text-danger px-0"
                    data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex hover-actions-trigger py-3 border-top">
              <input class="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                type="checkbox" id="checkbox-todo-1" data-event-propagation-prevent="data-event-propagation-prevent">
              <div class="row justify-content-between align-items-md-center btn-reveal-trigger border-200 gx-0 flex-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="mb-1 mb-md-0 d-flex align-items-center lh-1">
                    <label class="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-0 me-2 line-clamp-1 text-900">
                      Hiring a motion graphic designer
                    </label>
                    <div class="badge badge-phoenix ms-auto fs--2 badge-phoenix-warning">
                      <span class="fw-bold badge-label">
                        СРОЧНО
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="d-flex lh-1 align-items-center">
                    <button class="btn p-0 text-700 fs--2 me-2">
                      <span class="fas fa-paperclip me-1"></span>
                      2
                    </button>
                    <button class="btn p-0 text-warning fs--2 me-2">
                      <span class="fas fa-tasks me-1"></span>
                      3
                    </button>
                    <p class="text-700 fs--2 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                      12 Nov, 2021
                    </p>
                    <div class="hover-md-hide hover-xl-show hover-xxl-hide">
                      <p class="text-700 fs--2 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl border-300">
                        12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style="top: 23%;" data-event-propagation-prevent="data-event-propagation-prevent">
                <div class="hover-actions end-0" data-event-propagation-prevent="data-event-propagation-prevent">
                  <button class="btn btn-phoenix-secondary btn-icon me-1 fs--2 text-900 px-0 me-1" data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-edit"></span>
                  </button>
                  <button class="btn btn-phoenix-secondary btn-icon fs--2 text-danger px-0" data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex hover-actions-trigger py-3 border-top">
              <input class="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-2" data-event-propagation-prevent="data-event-propagation-prevent">
              <div class="row justify-content-between align-items-md-center btn-reveal-trigger border-200 gx-0 flex-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="mb-1 mb-md-0 d-flex align-items-center lh-1">
                    <label class="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-0 me-2 line-clamp-1 text-900">
                      Daily Meetings Purpose, participants
                    </label>
                    <div class="badge badge-phoenix ms-auto fs--2 badge-phoenix-info">
                      <span class="fw-bold badge-label">
                        В ПРОЦЕССЕ
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="d-flex lh-1 align-items-center">
                    <button class="btn p-0 text-700 fs--2 me-2">
                      <span class="fas fa-paperclip me-1"></span>
                      4
                    </button>
                    <p class="text-700 fs--2 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                      12 Dec, 2021
                    </p>
                    <div class="hover-md-hide hover-xl-show hover-xxl-hide">
                      <p class="text-700 fs--2 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl border-300">
                        05:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style="top: 23%;" data-event-propagation-prevent="data-event-propagation-prevent">
                <div class="hover-actions end-0" data-event-propagation-prevent="data-event-propagation-prevent">
                  <button class="btn btn-phoenix-secondary btn-icon me-1 fs--2 text-900 px-0 me-1" data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-edit"></span>
                  </button>
                  <button class="btn btn-phoenix-secondary btn-icon fs--2 text-danger px-0" data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex hover-actions-trigger py-3 border-top">
              <input class="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                type="checkbox" id="checkbox-todo-3" data-event-propagation-prevent="data-event-propagation-prevent">
              <div class="row justify-content-between align-items-md-center btn-reveal-trigger border-200 gx-0 flex-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="mb-1 mb-md-0 d-flex align-items-center lh-1">
                    <label class="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-0 me-2 line-clamp-1 text-900">
                      Finalizing the geometric shapes
                    </label>
                  </div>
                </div>
                <div class="col-12 col-md-auto col-xl-12 col-xxl-auto">
                  <div class="d-flex lh-1 align-items-center">
                    <button class="btn p-0 text-700 fs--2 me-2">
                      <span class="fas fa-paperclip me-1"></span>
                      3
                    </button>
                    <p class="text-700 fs--2 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                      12 Nov, 2021
                    </p>
                    <div class="hover-md-hide hover-xl-show hover-xxl-hide">
                      <p class="text-700 fs--2 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl border-300">
                        12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style="top: 23%;" data-event-propagation-prevent="data-event-propagation-prevent">
                <div class="hover-actions end-0" data-event-propagation-prevent="data-event-propagation-prevent">
                  <button class="btn btn-phoenix-secondary btn-icon me-1 fs--2 text-900 px-0 me-1" data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-edit"></span>
                  </button>
                  <button class="btn btn-phoenix-secondary btn-icon fs--2 text-danger px-0" data-event-propagation-prevent="data-event-propagation-prevent">
                    <span class="fas fa-trash"></span>
                  </button>
                </div>
              </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content bg-soft overflow-hidden">
                  <div class="modal-header px-6 py-5 border-300 pe-sm-5 px-md-6 dark__bg-1100">
                    <h3 class="text-1000 fw-bolder mb-0">
                      Designing the Dungeon Blueprint
                    </h3>
                    <button class="btn btn-phoenix-secondary btn-icon btn-icon-xl flex-shrink-0" type="button" data-bs-dismiss="modal" aria-label="Close">
                      <span class="fa-solid fa-xmark"></span>
                    </button>
                  </div>
                  <div class="modal-body bg-100 px-6 py-0">
                    <div class="row gx-14">
                      <div class="col-12 col-lg-7 border-end-lg border-300">
                        <div class="py-6">
                          <div class="mb-7">
                            <div class="d-flex align-items-center mb-3">
                              <h4 class="text-900 me-3">Description</h4>
                              <a class="btn btn-link text-decoration-none p-0" href="#!">
                                <span class="fa-solid fa-pen"></span>
                              </a>
                            </div>
                            <p class="text-1000 mb-0">
                              The female circus horse-rider is a recurring subject in Chagall’s work.
                              In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                              They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats.
                              Chagall completed 19 gouaches Chagall’s work.
                              In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                            </p>
                          </div>
                          <div class="mb-7">
                            <h4 class="mb-3">Subtasks</h4>
                            <div class="d-flex flex-between-center hover-actions-trigger border-300 py-3 border-top">
                              <div class="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                <input class="form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined1">
                                <label class="form-check-label mb-0 fs-0" for="subtaskundefined1">
                                  Study Dragons
                                </label>
                              </div>
                              <div class="hover-actions end-0">
                                <button class="btn btn-sm me-1 fs--2 text-700 px-0 me-3">
                                  <span class="fa-solid fa-pencil"></span>
                                </button>
                                <button class="btn btn-sm text-700 px-0">
                                  <span class="fa-solid fa-xmark fs-0"></span>
                                </button>
                              </div>
                            </div>
                            <div class="d-flex flex-between-center hover-actions-trigger border-300 py-3 border-top">
                              <div class="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                <input class="form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined2">
                                <label class="form-check-label mb-0 fs-0" for="subtaskundefined2">
                                  Procrastinate a bit
                                </label>
                              </div>
                              <div class="hover-actions end-0">
                                <button class="btn btn-sm me-1 fs--2 text-700 px-0 me-3">
                                  <span class="fa-solid fa-pencil"></span>
                                </button>
                                <button class="btn btn-sm text-700 px-0">
                                  <span class="fa-solid fa-xmark fs-0"></span>
                                </button>
                              </div>
                            </div>
                            <div class="d-flex flex-between-center hover-actions-trigger border-300 py-3 border-top border-bottom mb-3">
                              <div class="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                <input class="form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined3">
                                <label class="form-check-label mb-0 fs-0" for="subtaskundefined3">
                                  Staring at the notebook for 5 mins
                                </label>
                              </div>
                              <div class="hover-actions end-0">
                                <button class="btn btn-sm me-1 fs--2 text-700 px-0 me-3">
                                  <span class="fa-solid fa-pencil"></span>
                                </button>
                                <button class="btn btn-sm text-700 px-0">
                                  <span class="fa-solid fa-xmark fs-0"></span>
                                </button>
                              </div>
                            </div>
                            <a class="fw-bold fs--1 text-decoration-none" href="#!">
                              <span class="fas fa-plus me-1"></span>
                              Add subtask
                            </a>
                          </div>
                          <div class="mb-3">
                            <div>
                              <h4 class="mb-3">Files</h4>
                            </div>
                            <div class="border-top border-300 px-0 pt-4 pb-3">
                              <div class="me-n3">
                                <div class="d-flex flex-between-center">
                                  <div class="d-flex mb-1">
                                    <span class="fa-solid fa-image me-2 text-700 fs--1"></span>
                                    <p class="text-1000 mb-0 lh-1">
                                      Silly_sight_1.png
                                    </p>
                                  </div>
                                  <div class="font-sans-serif btn-reveal-trigger">
                                    <button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                                      <span class="fas fa-ellipsis-h"></span>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end py-2">
                                      <a class="dropdown-item" href="#!">Edit</a>
                                      <a class="dropdown-item text-danger" href="#!">Delete</a>
                                      <a class="dropdown-item" href="#!">Download</a>
                                      <a class="dropdown-item" href="#!">Report abuse</a>
                                    </div>
                                  </div>
                                </div>
                                <div class="d-flex fs--1 text-700 mb-2 flex-wrap">
                                  <span>768 kb</span>
                                  <span class="text-400 mx-1">| </span>
                                  <a href="#!">Shantinan Mekalan </a>
                                  <span class="text-400 mx-1">| </span>
                                  <span class="text-nowrap">21st Dec, 12:56 PM</span>
                                </div>
                                <img class="rounded-2" src="@/assets/img/generic/40.png" alt="" style="max-width:230px">
                              </div>
                            </div>
                            <div class="border-top border-300 px-0 pt-4 pb-3">
                              <div class="me-n3">
                                <div class="d-flex flex-between-center">
                                  <div>
                                    <div class="d-flex align-items-center mb-1">
                                      <span class="fa-solid fa-image me-2 fs--1 text-700"></span>
                                      <p class="text-1000 mb-0 lh-1">
                                        All_images.zip
                                      </p>
                                    </div>
                                    <div class="d-flex fs--1 text-700 mb-0 flex-wrap">
                                      <span>12.8 mb</span>
                                      <span class="text-400 mx-1">| </span>
                                      <a href="#!">Yves Tanguy </a>
                                      <span class="text-400 mx-1">| </span>
                                      <span class="text-nowrap">19th Dec, 08:56 PM</span>
                                    </div>
                                  </div>
                                  <div class="font-sans-serif btn-reveal-trigger">
                                    <button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                                      <span class="fas fa-ellipsis-h"></span>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end py-2">
                                      <a class="dropdown-item" href="#!">Edit</a>
                                      <a class="dropdown-item text-danger" href="#!">Delete</a>
                                      <a class="dropdown-item" href="#!">Download</a>
                                      <a class="dropdown-item" href="#!">Report abuse</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="border-top border-bottom border-300 px-0 pt-4 pb-3">
                              <div class="me-n3">
                                <div class="d-flex flex-between-center">
                                  <div>
                                    <div class="d-flex align-items-center mb-1 flex-wrap">
                                      <span class="fa-solid fa-file-lines me-2 fs--1 text-700"></span>
                                      <p class="text-1000 mb-0 lh-1">
                                        Project.txt
                                      </p>
                                    </div>
                                    <div class="d-flex fs--1 text-700 mb-0 flex-wrap">
                                      <span>123 kb</span>
                                      <span class="text-400 mx-1">| </span>
                                      <a href="#!">Shantinan Mekalan </a>
                                      <span class="text-400 mx-1">| </span>
                                      <span class="text-nowrap">12th Dec, 12:56 PM</span>
                                    </div>
                                  </div>
                                  <div class="font-sans-serif btn-reveal-trigger">
                                    <button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                                      <span class="fas fa-ellipsis-h"></span>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end py-2">
                                      <a class="dropdown-item" href="#!">Edit</a>
                                      <a class="dropdown-item text-danger" href="#!">Delete</a>
                                      <a class="dropdown-item" href="#!">Download</a>
                                      <a class="dropdown-item" href="#!">Report abuse</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div><a class="fw-bold fs--1 text-decoration-none" href="#!">
                            <span class="fas fa-plus me-1"></span>
                            Add file(s)
                          </a>
                        </div>
                      </div>
                      <div class="col-12 col-lg-5">
                        <div class="py-6">
                          <h4 class="mb-4 text-black">Others Information</h4>
                          <h5 class="text-1000 mb-2">Status</h5>
                          <select class="form-select mb-4" aria-label="Default select example">
                            <option selected="">Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <h5 class="text-1000 mb-2">Due Date</h5>
                          <div class="flatpickr-input-container mb-4">
                            <input class="form-control datetimepicker ps-6 flatpickr-input" type="text" placeholder="Set the due date" data-options="{&quot;disableMobile&quot;:true}" readonly="readonly">
                            <span class="uil uil-calendar-alt flatpickr-icon text-700"></span>
                          </div>
                          <h5 class="text-1000 mb-2">Reminder</h5>
                          <div class="flatpickr-input-container mb-4">
                            <div class="flatpickr-wrapper">
                              <input class="form-control datetimepicker ps-6 flatpickr-input" type="text" placeholder="Reminder" data-options="{&quot;enableTime&quot;:true,&quot;noCalendar&quot;:true,&quot;dateFormat&quot;:&quot;H:i&quot;,&quot;disableMobile&quot;:true,&quot;static&quot;:true}" readonly="readonly">
                              <div class="flatpickr-calendar hasTime noCalendar animate static" tabindex="-1">
                                <div class="flatpickr-time" tabindex="-1">
                                  <div class="numInputWrapper">
                                    <input class="numInput flatpickr-hour" type="number" aria-label="Hour" tabindex="-1" step="1" min="1" max="12" maxlength="2">
                                    <span class="arrowUp"></span>
                                    <span class="arrowDown"></span>
                                  </div>
                                  <span class="flatpickr-time-separator">:</span>
                                  <div class="numInputWrapper">
                                    <input class="numInput flatpickr-minute" type="number" aria-label="Minute" tabindex="-1" step="5" min="0" max="59" maxlength="2">
                                    <span class="arrowUp"></span>
                                    <span class="arrowDown"></span>
                                  </div>
                                  <span class="flatpickr-am-pm" title="Click to toggle" tabindex="-1">PM</span>
                                </div>
                              </div>
                            </div>
                            <span class="uil uil-bell-school flatpickr-icon text-700"></span>
                          </div>
                          <h5 class="text-1000 mb-2">Tag</h5>
                          <div class="choices-select-container mb-6">
                            <div class="choices" data-type="select-multiple" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner">
                                <select class="form-select choices__input" data-choices="data-choices" multiple="multiple" data-options="{&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true}" hidden="" tabindex="-1" data-choice="active"></select>
                                <div class="choices__list choices__list--multiple"></div>
                                <input type="text" class="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Select organizer..." placeholder="Select organizer..." style="min-width: 20ch; width: 1ch;">
                              </div>
                              <div class="choices__list choices__list--dropdown" aria-expanded="false">
                                <div class="choices__list" aria-multiselectable="true" role="listbox">
                                  <div id="choices--qw8a-item-choice-1" class="choices__item choices__item--choice choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="California Institute of Technology" data-select-text="" data-choice-selectable="" aria-selected="true">
                                    California Institute of Technology
                                  </div>
                                  <div id="choices--qw8a-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="GSAS Open Labs At Harvard" data-select-text="" data-choice-selectable="">
                                    GSAS Open Labs At Harvard
                                  </div>
                                  <div id="choices--qw8a-item-choice-3" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Massachusetts Institute of Technology" data-select-text="" data-choice-selectable="">
                                    Massachusetts Institute of Technology
                                  </div>
                                  <div id="choices--qw8a-item-choice-5" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="University of Chicago" data-select-text="" data-choice-selectable="">
                                    University of Chicago
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span class="uil uil-tag-alt choices-icon text-700" style="top: 26%;"></span>
                          </div>
                          <div class="text-end mb-9">
                            <button class="btn btn-phoenix-danger">
                              Delete Task
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer border-0">
            <a class="fw-bold fs--1 mt-4 text-decoration-none" href="#!">
              <span class="fas fa-plus me-1"></span>
              Add new task
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-6 col-xxl-5">
        <div class="card h-100">
          <div class="card-body">
            <div class="card-title mb-1">
              <h3 class="text-1100">Activity</h3>
            </div>
            <p class="text-700 mb-4">Recent activity across all projects</p>
            <div class="timeline-vertical timeline-with-details">
              <div class="timeline-item position-relative">
                <div class="row g-md-3">
                  <div class="col-12 col-md-auto d-flex">
                    <div class="timeline-item-date order-1 order-md-0 me-md-4">
                      <p class="fs--2 fw-semi-bold text-600 text-end">
                        01 DEC, 2023
                        <br class="d-none d-md-block">
                        10:30 AM
                      </p>
                    </div>
                    <div class="timeline-item-bar position-md-relative me-3 me-md-0 border-400">
                      <div class="icon-item icon-item-sm rounded-7 shadow-none bg-primary-100">
                        <span class="fa-solid fa-chess text-primary-600 fs--2 dark__text-primary-300"></span>
                      </div>
                      <span class="timeline-bar border-end border-dashed border-400"></span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="timeline-item-content ps-6 ps-md-3">
                      <h5 class="fs--1 lh-sm">Assigned as a director for Project The Chewing Gum Attack</h5>
                      <p class="fs--1">
                        by
                        <a class="fw-semi-bold" href="#!">Shantinon Mekalan</a>
                      </p>
                      <p class="fs--1 text-800 mb-5">
                        Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="timeline-item position-relative">
                <div class="row g-md-3">
                  <div class="col-12 col-md-auto d-flex">
                    <div class="timeline-item-date order-1 order-md-0 me-md-4">
                      <p class="fs--2 fw-semi-bold text-600 text-end">
                        05 DEC, 2023
                        <br class="d-none d-md-block">
                        12:30 AM
                      </p>
                    </div>
                    <div class="timeline-item-bar position-md-relative me-3 me-md-0 border-400">
                      <div class="icon-item icon-item-sm rounded-7 shadow-none bg-primary-100">
                        <span class="fa-solid fa-dove text-primary-600 fs--2 dark__text-primary-300"></span>
                      </div>
                      <span class="timeline-bar border-end border-dashed border-400"></span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="timeline-item-content ps-6 ps-md-3">
                      <h5 class="fs--1 lh-sm">Assigned as a director for Project The Chewing Gum Attack</h5>
                      <p class="fs--1">
                        by
                        <a class="fw-semi-bold" href="#!">Shantinon Mekalan</a>
                      </p>
                      <p class="fs--1 text-800 mb-5">
                        We must repurpose with SEO optimized functionalities, instead of using those over used frictioned kumbaya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="timeline-item position-relative">
                <div class="row g-md-3">
                  <div class="col-12 col-md-auto d-flex">
                    <div class="timeline-item-date order-1 order-md-0 me-md-4">
                      <p class="fs--2 fw-semi-bold text-600 text-end">
                        15 DEC, 2023
                        <br class="d-none d-md-block">
                        2:30 AM
                      </p>
                    </div>
                    <div class="timeline-item-bar position-md-relative me-3 me-md-0 border-400">
                      <div class="icon-item icon-item-sm rounded-7 shadow-none bg-primary-100">
                        <span class="fa-solid fa-dungeon text-primary-600 fs--2 dark__text-primary-300"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="timeline-item-content ps-6 ps-md-3">
                      <h5 class="fs--1 lh-sm">Archieved all the files for the Project Membrane Memories</h5>
                      <p class="fs--1">
                        by
                        <a class="fw-semi-bold" href="#!">
                          Sharuka Nijibum
                        </a>
                      </p>
                      <p class="fs--1 text-800 mb-0">
                        To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics,
                        ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END SECTION 4 -->

</template>

<script setup>
import { ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

use([
  CanvasRenderer,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);


const option1 = ref({
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Мои задачи',
      type: 'pie',
      top: 0,
      width: 'auto',
      height: 'auto',
      radius: ['50%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#9fa6bc',
          formatter: [
            '{headerStyle|{d}%}',
            '{subheaderStyle|{b}}'
          ].join('\n'),
          rich: {
            headerStyle: {
              fontSize: 30,
              fontWeight: 'bold',
              padding: 5,
            },
            subheaderStyle: {
              fontSize: 14,
              fontWeight: 'bold',
            }
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 78, name: 'Product design' },
        { value: 63, name: 'Development' },
        { value: 56, name: 'QA & Testing' },
        { value: 36, name: 'Customer queries' },
        { value: 24, name: 'R & D' }
      ]
    }
  ],
});

const option2 = ref({
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Open', 'Issues found', 'Inprogess', 'Actual']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    show: true,
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: ['#aaa', '#ddd'],
        opacity: 0.5,
      }
    },
    offset: 10,
    data: [
      '6 Jun',
      '7 Jun',
      '8 jun',
      '9 Jun',
      '10 Jun',
      '11 Jun',
      '12 Jun',
      '13 Jun',
      '14 Jun',
      '15 Jun',
      '16 Jun',
      '17 Jun',
      '18 Jun',
      '19 Jun',
      '20 Jun'
    ]
  },
  yAxis: {
    type: 'value',
    boundaryGap: false,
    nameGap: 0,
    symbolOffset: 20,

    axisLine: {
      show: true,
    }
  },
  series: [
    {
      name: 'Actual',
      type: 'line',
      symbol: 'emptyCircle',
      symbolSize: 5,
      color: 'gray',
      lineStyle: {
        type: 'dashed'
      },
      data: [20, 18, 17, 19, 19, 12]
    },
    {
      name: 'Open',
      type: 'line',
      symbol: 'emptyCircle',
      symbolSize: 5,

      data: [6, 5, 4, 6, 5, 5]
    },
    {
      name: 'Issues found',
      type: 'line',
      symbol: 'emptyCircle',
      symbolSize: 5,
      data: [3, 1, 2, 4, 3, 1]
    },
    {
      name: 'Inprogress',
      type: 'line',
      symbol: 'emptyCircle',
      symbolSize: 5,
      data: [11, 12, 11, 9, 11, 6]
    }
  ]
});

</script>

<style scoped>
@import '@/assets/js/vendors/dhtmlx-gantt/dhtmlxgantt.css';

.chart {
  padding: 0;
  width: 100%;
  min-height: 400px;
}

.line-chart {
  padding: 0;
  width: 100%;
  min-height: 200px;
  height: 250px;
}

</style>