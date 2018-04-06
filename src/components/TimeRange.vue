<template>
  <v-layout column>
    <div class="mb-4">
      Select time
    </div>

    <v-layout row class="mt-1">
      <v-flex xs6 class="mr-2">
        <v-menu
          ref="startTimeRange"
          lazy
          :close-on-content-click="false"
          v-model="startTimeRange"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
          :return-value.sync="startTime"
        >
          <v-text-field
            slot="activator"
            label="From"
            v-model="startTime"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker color="primary" v-model="startTime" @change="$refs.startTimeRange.save(startTime)"></v-time-picker>
        </v-menu>
      </v-flex>

      <v-flex xs6>
        <v-menu
          ref="endTimeRange"
          lazy
          :close-on-content-click="false"
          v-model="endTimeRange"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
          :return-value.sync="endTime"
        >
          <v-text-field
            slot="activator"
            label="To"
            v-model="endTime"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker color="primary" v-model="endTime" @change="$refs.endTimeRange.save(endTime)"></v-time-picker>
        </v-menu>
      </v-flex>
    </v-layout>   
  </v-layout>
</template>

<script>
import { getHours, getMinutes } from 'date-fns'

export default {
  data () {
    const hours = getHours(new Date())
    const minutes = getMinutes(new Date())
    const time = `${hours}:${minutes}`

    return {
      startTime: time,
      endTime: time,
      startTimeRange: false,
      endTimeRange: false,
    }
  },
}
</script>

<style scoped>
</style>
