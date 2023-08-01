<template>
  <div>
    <!-- <Navbar class="navbar-style-two" /> -->
    <ThankYouPage />
    <!-- <DealDoxFooter /> -->
  </div>
</template>
  
<script>

// import Navbar from '../layouts/Navbar';
import ThankYouPage from '../components/ThankYou/ThankYouPage'
// import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
  components: {
    // Navbar,
    ThankYouPage,
    // DealDoxFooter,
  },
  mounted() {
    // Redirect to the external URL after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      window.location.href = 'https://dealdox.pbwebvision.com/request-a-demo';
    }, 5000); // 3 seconds delay before redirecting
  },

  // created() {
  //   setTimeout(() => this.$router.push({ path: '/request-a-demo' }), 5000)
  // }
}
</script>