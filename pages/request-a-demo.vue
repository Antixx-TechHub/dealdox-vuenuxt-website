<template>
    <div>
        <demo />
    </div>
</template>
  
<script>

import demo from '../components/RequestDemo/demo'


export default {
    components: {
        demo,
    },
    methods: {
    refreshPage() {
      // Delay the page refresh by 2 seconds (2000 milliseconds)
      setTimeout(() => {
        // Redirect the user to the current page URL, effectively refreshing the page
        this.$nuxt.$router.replace(this.$nuxt.$route.fullPath);
      }, 2000);
    },
  },
  mounted() {
    // Call the refreshPage method when the component is mounted
    this.refreshPage();
  },
}
</script>