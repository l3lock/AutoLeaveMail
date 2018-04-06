<template>
  <v-layout column>
    <v-flex class="pl-3 mb-3">
      From:
      <v-chip>{{ formattedChipStartDate }}</v-chip> To:
      <v-chip>{{ formattedChipEndDate }}</v-chip>
    </v-flex>

    <v-flex row>
      <div class="date-range__pickers">
        <div class="px-3">
          <v-text-field
            v-model="formattedStartDate"
            :label="`Start Date (${format})`"
            class="input-group--focused"
            name="startDate"
            prepend-icon="event"
            readonly/>
          <v-date-picker
            color="primary"
            :next-icon="nextIcon"
            :prev-icon="prevIcon"
            :dark="dark"
            v-model="startDate"
            :min="options.minDate"
            no-title
            @change="onDateRangeChange"/>
        </div>
        <div class="px-3">
          <v-text-field
            v-model="formattedEndDate"
            :label="`End Date (${format})`"
            class="input-group--focused"
            name="endDate"
            readonly/>
          <v-date-picker
            color="primary"
            :next-icon="nextIcon"
            :prev-icon="prevIcon"
            :dark="dark"
            :min="startDate"
            v-model="endDate"
            no-title
            @change="onDateRangeChange"/>
        </div>
      </div>
    </v-flex>
  </v-layout>   
</template>

<script>
import { format } from 'date-fns';

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    noPresets: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    nextIcon: {
      type: String,
      default: 'chevron_right',
    },
    prevIcon: {
      type: String,
      default: 'chevron_left',
    },
  },
  data() {
    return {
      startDate: format(this.options.startDate, 'YYYY-MM-DD'),
      endDate: format(this.options.endDate, 'YYYY-MM-DD'),
      format: this.options.format,
      chipFormat: this.options.chipFormat,
      presets: this.options.presets,
    };
  },
  computed: {
    formattedStartDate() {
      return format(new Date(this.startDate), this.format)
    },
    formattedEndDate() {
      return format(new Date(this.endDate), this.format)
    },
    formattedChipStartDate() {
      return format(new Date(this.startDate), this.chipFormat || this.format)
    },
    formattedChipEndDate() {
      return format(new Date(this.endDate), this.chipFormat || this.format)
    }
  },
  watch: {
    startDate () {
      this.onDateRangeChange()
    },
    endDate () {
      this.onDateRangeChange()
    },
  },
  methods: {
    onDateRangeChange () {
      this.$emit('input', [this.startDate, this.endDate])
    },
  },
}
</script>

<style scoped>
.date-range__pickers {
  display: flex;
}
</style>
