<template>
  <v-layout row class="mb-4 m--10">
    <template v-for="leaveType in leaveTypes">
      <v-flex 
        xs5 sm5 md4
        class="mx-2 my-2"
        :key="leaveType.id"
      >
        <v-card ripple>
          <v-card-media
            height="230px"
            :src="leaveType.thumbnail"
          >
            <v-card-title 
              d-flex
              class="thumbnail primary--text" 
              @click="selectTypeOfLeave(leaveType.id)"
              :class="{ 'active': leaveType.id === leaveTypesSelectID }" 
            >
              <h1 class="text-xs-center">
                {{leaveType.name}}
              </h1>
            </v-card-title>
          </v-card-media>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      selected: undefined,
    }
  },
  methods: {
    ...mapActions(['selectTypeOfLeave'])
  },
  computed: {
    ...mapState(['leaveTypes', 'leaveTypesSelectID'])
  }
}
</script>

<style scoped>
.thumbnail {
  cursor: pointer;
  width: 100%;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
  background-color: rgba(0,0,0, 0.7);
}

.thumbnail:hover,
.thumbnail.active {
  background-color: rgba(0,0,0, 0.9);
}

.thumbnail:hover > h1,
.thumbnail.active > h1 {
  color: #ffffff;
}
</style>
