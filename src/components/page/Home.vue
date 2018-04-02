<template>
  <v-layout fluid fill-height>

    <v-layout class="left-bar pt-4 pb-2 py-1 dark">
      <slot name="avatar">
        <Avatar />
      </slot>
    </v-layout>

    <v-content>
      <v-container fluid fill-height secondary>
        <v-layout column>
          <h1 class="mt-4 mb-3 ml-1">Auto Leave</h1>
          <slot name="step">
            <Step />
          </slot>
        </v-layout>
      </v-container>
    </v-content>

  </v-layout>
  
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

<style scoped>
  .left-bar {
    max-width: 330px;
  }
</style>

