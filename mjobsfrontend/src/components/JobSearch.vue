<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
    <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <div class="w-full md:w-1/2">
        <label class="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left" for="job-title">
          {{ $t('message.what') }}
        </label>
        <input 
          v-model="jobTitle"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="job-title"
          type="text"
          :placeholder="$t('message.job_keywords_company')"
        />
      </div>
      <div class="w-full md:w-1/2">
        <label class="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left" for="location">
          {{ $t('message.where') }}
        </label>
        <input 
          v-model="location"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          :placeholder="$t('message.city_state_zip')"
        />
      </div>
    </div>
    <div class="flex items-center justify-center mt-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="searchJobs"
      >
        {{ $t('message.find_jobs') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobTitle: '',
      location: ''
    }
  },
  methods: {
    searchJobs() {
      console.log(`Searching for ${this.jobTitle} jobs in ${this.location}`);
      // Add your search logic here
    }
  }
}
</script>

<style scoped>
</style>
