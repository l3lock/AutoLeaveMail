<template>
  <v-layout align-center column>
    <v-avatar 
      size="135px" 
      class="my-4"
      slot="avatar"
      > 
        <img :src="avatar">
    </v-avatar>
    <h2>{{ name }}</h2>
  </v-layout>
</template>

<script>
export default {
  name: 'avatar',
  data() {
    return {
      avatar: require('@/assets/chris.jpg'),
      name: 'Thawinwats Uggaravisee'
    }
  }
}
</script>

