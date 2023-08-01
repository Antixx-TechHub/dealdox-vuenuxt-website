<template>
    <div>
        <Navbar class="navbar-style-two" />
        <ThankYouPage />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import ThankYouPage from '../components/ThankYou/ThankYouPage'
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
    components: {
        Navbar,
        ThankYouPage,
        DealDoxFooter,
    },
    mounted() {
    this.refreshPageAfterDelay();
  },
  methods: {
    refreshPageAfterDelay() {
      setTimeout(() => {
        // Reload the current page after 5 seconds (5000 milliseconds)
        window.location.reload();
      }, 5000);
    },
  },
}
</script>