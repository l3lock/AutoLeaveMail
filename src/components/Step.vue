<template>
  <v-stepper v-model="steps" vertical slot="step">
    <v-stepper-step step="1" :complete="steps > 1" editable>
      Select the type of leave
      <!-- <small>Summarize if needed</small> -->
    </v-stepper-step>
    <v-stepper-content step="1">

      <LeaveType/>
      
      <v-btn color="primary ml-0" @click.native="steps = 2">Continue</v-btn>
      <v-btn flat @click="clearSelectTypeOfLeave">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="2" :complete="steps > 2" :editable="steps > 2">Configure analytics for this app</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-4" height="200px"></v-card>
      <v-btn color="primary ml-0" @click.native="steps = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3" :complete="steps > 3" :editable="steps > 3">Select an ad format and name ad unit</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-4" height="200px"></v-card>
      <v-btn color="primary ml-0" @click.native="steps = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-4" height="200px"></v-card>
      <v-btn color="primary ml-0" @click.native="steps = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import LeaveType from '@/components/LeaveType'
  export default {
    data () {
      return {
        steps: 1
      }
    },
    components: {
      LeaveType
    },
    methods: {
      // handleClearSelectTypeOfLeave () {
      //   this.$store.dispatch('clearSelectTypeOfLeave')
      // },
      ...mapActions(['clearSelectTypeOfLeave'])
    }
  }
</script>



