<template>
  <v-layout row class="mb-4">
    <template v-for="(leaveType, index) in leaveTypes">
      <v-flex xs4 
        :key="leaveType.id"
        :class="index === 0 ? 'mr-2' : 'mx-2'"
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
export default {
  data () {
    return {
      leaveTypes: [
        {
          id: 1,
          name: 'Sick',
          thumbnail: require('@/assets/leaveTypes/SickLeave.jpg')
        },
        {
          id: 2,
          name: 'Personal',
          thumbnail: require('@/assets/leaveTypes/PersonalLeave.jpg')
        },
        {
          id: 3,
          name: 'Annual',
          thumbnail: require('@/assets/leaveTypes/AnnualLeave.png')
        }
      ],
      leaveTypesSelectID: null,
      selected: undefined,
    }
  },
  methods: {
    selectTypeOfLeave (id) {
      this.leaveTypesSelectID = id
    }
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
