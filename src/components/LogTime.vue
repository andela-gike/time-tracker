<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input
          type="date"
          class="form-control"
          v-model="timeEntry.date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input
          type="number"
          class="form-control"
          v-model="timeEntry.totalTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input
          type="text"
          class="form-control"
          v-model="timeEntry.comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">Save</button>
    <button class="btn btn-danger"><router-link to="/time-entries">Cancel</router-link></button>
    <hr>
  </div>

</template>

<script>
/* eslint no-mixed-spaces-and-tabs: "off" */
/* eslint-disable */

  export default {
    data() {
      return {
        // We default the user object on
        // the timeEntry to have some user details
        timeEntry: {
          user: {
            firstName: 'Grace',
            lastName: 'Ike',
            email: 'ikgraceuc@gmail.com',
            image: 'https://s.gravatar.com/avatar/fb0b87cc8b49f406ac375c7818980ee8?s=80',
          },
        },
      };
    },
    methods: {
      save() {
        const timeEntry = this.timeEntry;
        // We dispatch the timeEntry so it can be pushed
        // onto the timeEntries array in the parent component
        // this.$dispatch('timeUpdate', timeEntry);
        this.$emit('timeUpdate', timeEntry);
        this.$parent.$emit('timeUpdate', timeEntry);
        this.timeEntry = {
      	  user: {
      			firstName: 'Ryan',
      			lastName: 'Chenkie',
      			email: 'ryanchenkie@gmail.com',
      			image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g',
      		}
		    };
      }
    }
  }
</script>
