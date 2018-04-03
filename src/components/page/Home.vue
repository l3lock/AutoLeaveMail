<template>
  <v-container fluid fill-height class="pa-0 ma-0">
    <v-layout>
      <v-flex md3 column class="pt-4 pb-2 px-2 dark">
        <slot name="avatar">
          <Avatar />
        </slot>
      </v-flex>

      <v-flex md9 secondary column class="pa-3">
        <h1 class="mt-4 mb-3 ml-1">Auto Leave</h1>
        <slot name="step">
          <Step />
        </slot>
      </v-flex>

    </v-layout>
  </v-container>
  
</template>

<script>
  import Avatar from '@/components/Avatar'
  import Step from '@/components/Step'
  export default {
    components: {
      Avatar,
      Step
    }
  }
</script>


