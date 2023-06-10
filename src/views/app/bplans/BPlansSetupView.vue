<template>
  <div>

    <div  v-if="activeBPlan"
      class="card mb-3">
      <div
        class="bg-holder d-none d-lg-block bg-card"
        :style="{ backgroundImage: 'url(' + require('@/assets/img/spot-illustrations/32.png') +')', backgroundPosition: 'right' }">
      </div>
      <!--/.bg-holder-->
      <div class="card-body">
        <div class="row ">
          <div class="col-lg-9">
            <h3 class="mb-0">Список доступных проектов</h3>
            <hr>
            <div v-if="activeBPlan"
              class="fs--1">
              <b-overlay
                :show="deleting"
                spinner-variant="danger"
                rounded="sm">
                <div class="d-flex align-items-center justify-content-start py-4 border rounded-2 border-100  px-lg-6 px-4">
                    <div class="notification-avatar">
                      <div class="avatar avatar-l mr-3">
                        <div class="d-flex rounded-soft bg-secondary text-center h-100 justify-content-center align-items-center ">
                          <i class="fas fa-tasks fs-2 text-primary "></i>
                        </div>
                      </div>
                    </div>
                    <div class="notification-body ms-3">
                      <span v-if="activeBPlan.active"
                        class="font-base"
                        style="position: absolute; font-size: 3rem; font-weight: 600; left: 7rem;color: #00d27a12;">
                        АКТИВНЫЙ
                      </span>
                      <h4 class="mb-1">{{activeBPlan.title}}</h4>
                      <span class="text-info">
                        {{activeBPlan.startYear}} - {{activeBPlan.startYear + (activeBPlan.periods - 1)}} года
                      </span>
                    </div>
                    <div class="ms-auto">
                      <router-link to="/plan"
                        class="btn btn-phoenix-success btn-sm ms-2 ">
                        Выбрать
                      </router-link>
                      <div class="btn btn-phoenix-primary btn-sm ms-2" 
                        @click="setBPlanToEdit(activeBPlan)">
                        Настроить
                      </div>
                      <div class="btn btn-phoenix-danger btn-sm ms-2"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteProjectModal">
                        <i class="far fa-trash-alt"></i>
                      </div>
                    </div>
                </div>
              </b-overlay>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2">
        <small class="text-600 mt-2 ">
          Вы достигли предельного количества активных проектов. <br>
          Для создания нового проекта, необходимо удалить текущий или связаться с администрацией для увеличения квоты.
        </small>
      </div>
    </div>

    <!-- Редактирование данных проекта -->
    <div v-if="editing"
      class="card">
      <div class="card-body overflow-hidden p-3">
        <div class="row align-items-center justify-content-between">
          <div class="col-4">
            <img class="img-fluid" src="@/assets/img/spot-illustrations/22_2.png" alt="">
          </div>
          <div class="col-lg-8 pl-lg-4 text-center text-lg-left">
            <div class="row">

              <div class="col-8 px-0">
                <b-form-group
                  label="Название проекта:"
                  labele-for="directCostTitle"
                  :invalid-feedback="invalidFeedback"
                  :state="titleState">
                  <b-form-input
                    id="direcCostTitle"
                    v-model="title"
                    :state="titleState">
                  </b-form-input>
                </b-form-group>
              </div>
              <b-form-group
                class="col-4 pr-4"
                label="Начало проекта:">
                <custom-dropdown
                  v-model="bplanStart"
                  :selected="selectedBPlanStart"
                  :defaultItem="bplanStartDefault"
                  placeholder="----">
                </custom-dropdown>
              </b-form-group>
              <b-form-group
                class="col-3 p-0 mt-3 text-start py-1"
                label="Срок планирования:">
                <b-form-radio-group
                  v-model="selectedBPlanPeriod"
                  :options="bplanPeriods"
                  value-field="item"
                  text-field="name"
                  disabled-field="disabled"
                  size="sm"
                  class="mt-0"
                  name="radio-component">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group
                class="col-9 p-0 py-1 mt-3 text-start"
                label="Режим налогооблажения:">
                <b-form-radio-group
                  v-model="taxSelected"
                  :options="taxOptions"
                  value-field="id"
                  text-field="name"
                  disabled-field="disabled"
                  size="sm" >
                </b-form-radio-group>
              </b-form-group>

              <div class="d-flex align-items-center justify-content-start mt-4 ps-0">
                <div v-if="loading"
                  class="btn btn-phoenix-success"
                  disabled>
                  <b-spinner small type="grow"></b-spinner>
                  В процессе...
                </div>
                <div v-if="!loading"
                  class="btn btn-phoenix-primary mt-2"
                  @click='updateBPlan(activeBPlan)'>
                  Сохранить изменения
                </div>
                <div v-if="!loading"
                  class="btn btn-phoenix-danger mt-2 ms-2"
                  @click='setDefault'>
                  Отменить
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Конец формы редактирования проекта -->

    <div class="d-flex flex-center content-min-h">
      <div class="text-center py-9">
        <div v-if="!activeBPlan"
          class="card" style="max-width: 70rem;">
          <div class="card-body overflow-hidden p-lg-4">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6">
                <img class="img-fluid" src="@/assets/img/spot-illustrations/22_2.png" alt="">
              </div>
              <div class="col-lg-6 ps-lg-4 text-center text-lg-left">
                <div  v-if="creating"
                  class="row p-0 px-4">

                  <div class="col-12 px-0 mb-4">
                    <b-form-group
                      label="Название проекта:"
                      labele-for="bplanTitle"
                      :invalid-feedback="invalidFeedback"
                      :state="titleState">
                      <b-form-input
                        id="bplanTitle"
                        v-model="title"
                        :state="titleState"
                        :disabled="loading">
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <b-form-group
                    class="col-6 p-0 text-start mb-4"
                    label="Срок планирования:">
                    <b-form-radio-group
                      v-model="selectedBPlanPeriod"
                      :options="bplanPeriods"
                      value-field="item"
                      text-field="name"
                      disabled-field="disabled"
                      :disabled="loading"
                      class="mt-0"
                      name="radio-component">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group
                    class="col-6 pr-6"
                    label="Начало проекта:">
                    <custom-dropdown
                      v-model="bplanStart"
                      :selected="selectedBPlanStart"
                      :defaultItem="bplanStartDefault"
                      :disabled="loading"
                      placeholder="----"
                      size="sm">
                    </custom-dropdown>
                  </b-form-group>
                  <b-form-group
                    class="col-12 p-0 text-start mb-5"
                    label="Режим налогооблажения:">
                    <b-form-radio-group
                      v-model="taxSelected"
                      :options="taxOptions"
                      value-field="id"
                      text-field="name"
                      disabled-field="disabled"
                      :disabled="loading"
                      class="mt-0">
                    </b-form-radio-group>
                  </b-form-group>
                  <div class="row">
                    <div class="d-grid gap-2">
                      <button v-if="loading"
                        class="d-flex align-items-center justify-content-center btn btn-outline-success btn-sm me-2" type="button" disabled="true">
                        <span class="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                        Идет создание проекта...
                      </button>
                    </div>
                    <div class="col-8">
                      <div v-if="!loading"
                        class="btn btn-phoenix-primary d-block me-2 mt-2"
                        @click='createBPlan'>
                        Создать
                      </div>
                    </div>
                    <div class="col-4">
                      <div v-if="!loading"
                        class="btn btn-phoenix-danger mt-2"
                        @click='creating = false'>
                        Отменить
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="!creating">
                  <h3 class="">Еще нет проектов!</h3>
                  <p class="text-700">Давайте изменять мир к лучшему</p>
                  <div class="btn btn-phoenix-primary"
                    @click="creating = true">
                    Новый проект
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="activeBPlan"
    class="modal fade" id="deleteProjectModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            ВНИМАНИЕ!
          </h5>
          <button class="btn p-1" type="button" data-bs-dismiss="modal" aria-label="Close">
            <span class="fas fa-times fs--1"></span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-700 lh-lg mb-0">
            Вы действительно хотите удалить проект: <br> 
            <span class="fw-bold">"{{ activeBPlan.title }}"</span>?
          </p>
        </div>
        <div class="modal-footer">
          <button v-if="deleting"
            class="d-flex align-items-center btn btn-danger btn-sm me-2" type="button" disabled="" data-bs-dismiss="modal">
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Удаление проекта...
          </button>
          <button v-if="!deleting" @click.prevent="deleteBPlan(activeBPlan)"
            class="btn btn-phoenix-danger" type="button">
            Да!
          </button>
          <button v-if="!deleting"
            class="btn btn-phoenix-primary" type="button" data-bs-dismiss="modal">
            Отменить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomDropdown from '@/views/app/components/widgets/CustomDropdown.vue';

export default {
  data: () => ({
    modal: false,
    loading: false,
    deleting: false,
    creating: false,
    editing: false,
    title: '',
    bplanStartDefault: 1,
    selectedBPlanStart: null,
    bplanPeriods: [
      { item: 3, name: '3 года' },
      { item: 5, name: '5 лет', disabled: true },
    ],
    selectedBPlanPeriod: 3,
    taxOptions: [
      { id: 0, name: '6% (от выручки)' },
      { id: 1, name: '15% (доходы - расходы)' },
      { id: 2, name: '20% (ОСН)', disabled: true },
    ],
    taxSelected: 1,
  }),

  components: {
    CustomDropdown
  },

  async beforeMount() {
    if (!this.$store.getters.getActiveBPlan) {
      await this.$store.dispatch('fetchCurrentBPlan');
    }
  },

  computed: {

    activeBPlan() {
      console.log(this.$store.getters.getActiveBPlan);
      return this.$store.getters.getActiveBPlan;
    },

    // Устанавливаем начальную дату проекта.
    bplanStart: {
      get: function() {
        console.log("start making project years");
        var options = [];
        const currentYear = new Date().getFullYear() - 1;
        for (let i = 0; i < 5; i ++) {
          options.push( { id: currentYear + i, title: `${currentYear + i} год` })
        }
        return options
      },
      set: function(value) {
        if (value) {
          console.log("Set BPlan start", value);
          this.selectedBPlanStart = value;
        }
      }
    },

    titleState() {
      if (this.title.length > 3) {
        return  true
      } else {
        return false
      }
    },

    invalidFeedback() {
      if (!this.title) {
        return 'Пожалуйства, введине название...'
      } else if (this.title.length < 4) {
        return 'Название должно быть не менее 4-х символов'
      } else {
        return ''
      }
    },
  },

  methods: {
    async createBPlan() {
      this.loading = true;
      if (!this.titleState) {
        this.loading = false;
        return
      }

      var payload = {
        title: this.title,
        active: true,
        startYear: this.selectedBPlanStart.id,
        periods: this.selectedBPlanPeriod,
        taxRate: this.taxSelected,
      };

      console.log(payload);

      await this.$store.dispatch('createBPlan', payload);
      this.loading = false;
      this.creating = false;
      this.title = '';
    },

    setBPlanToEdit(bplan) {
      console.log(bplan);
      this.title = bplan.title;
      this.bplanStart = {id: bplan.startYear, title: `${bplan.startYear} год` };
      this.bplanStartDefault = this.bplanStart.findIndex( item => item.id === bplan.startYear );
      this.selectedBPlanPeriod = bplan.periods;
      this.taxSelected = bplan.taxRate;
      this.editing = true;
    },

    async updateBPlan(bplan) {
      this.loading = true;
      if (!this.titleState) {
        this.loading = false;
        return
      }

      bplan.id = this.activeBPlan.id;
      bplan.path = this.activeBPlan.path;
      bplan.title = this.title;
      bplan.startYear = this.selectedBPlanStart.id;
      bplan.periods = this.selectedBPlanPeriod;
      bplan.taxRate = this.taxSelected; 
   
      await this.$store.dispatch('updateBPlan', bplan);  
   
      this.loading = false;
      this.editing = false;
      this.title = '';
    },

    async deleteBPlan(bplan) {
      this.deleting = true;
      await this.$store.dispatch('deleteBPlan', bplan.path);
      this.setDefault();
      this.deleting = false;
    },

    setDefault() {
      this.title = '';
      this.selectedBPlanStart = null;
      this.bplanStartDefault = 0;
      this.selectedBPlanPeriod = 3;
      this.taxSelected = 1;
      this.editing = false;
    }
  }

}
</script>

<style scoped>
.form-label {
  text-transform: none;
  text-align: start;
}

.notification:not(.notification-flush) {
    border: 1px solid #132238;
    background-color: #0e1c2f;
    -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.5);
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.5);
    border-radius: 0.375rem;
    padding: 1rem;
}
.position-relative {
    position: relative!important;
}
</style>