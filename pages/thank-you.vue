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
    methods: {
        closePageAfterDelay() {
            setTimeout(() => {
                // Close the current page or redirect to another page
                // You can use window.close() to close the current tab/window.
                // Note: window.close() may not work in some browsers if the window was not opened by a script.
                // Alternatively, you can use Vue Router's `push` method to navigate to another page.
                // For example:
                // this.$router.push('/another-page')
            }, 5000); // 5000 milliseconds = 5 seconds (adjust the delay as needed)
        },
    },
    mounted() {
        // Call the method when the component is mounted to start the countdown.
        this.closePageAfterDelay();
    },
}
</script>