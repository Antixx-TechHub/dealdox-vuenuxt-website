<template>
    <div class="features-area pt-60 bg-FAFAFA">
        <div class="container">
            <div class="software-integrations-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="features-content">
                            <ul class="features-list">
                                <h2>Transform Deals with <br><span class="sub-title">DealDox</span> in Action!</h2>
                                <p>A centralized platform for automated quote generation, Accurate Pricing, Product Bundling
                                    and Upselling, Margin Optimization, Cost Visibility, Efficient Pricing Strategy,
                                    Customize Deal Documents in your desired language, and more! </p>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p class="with-top-border">Easy to Use</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p class="with-top-border">Totally Unified</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p>Close Deals Faster</p>
                                </li>
                            </ul>
                            <div class="btn-box">
                                <router-link to="/integration" class="default-btn">Know more</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 pt-70">
                        <div class="contact-area pbt-75">
                            <div class="container">
                                <div class="contact-form pt-70">
                                    <form id="contactForm">
                                        <div class="row">

                                            <!-- Your thank you message -->
                                            <div v-if="showThankYouMessage">Thank you for your submission!</div>

                                            <!-- Your iframe element -->
                                            <iframe ref="myIframe" :src="iframeUrl" width="600" height="800"></iframe>



                                            <!-- <iframe ref="myIframe" :src="iframeUrl" frameborder="0" width="600"
                                                height="800"></iframe> -->

                                            <!-- <iframe width="600" height="800" :src="url" frameborder="0" allowfullscreen
                                                referrerpolicy="origin-when-cross-origin"></iframe> -->

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EasyIntegration',
    data() {
        return {
            showThankYouMessage: false,
            iframeUrl: 'https://spmglobaltech.my.salesforce-sites.com/requestdemo', // Initial URL for the iframe
        };
    },
    mounted() {
        // Check if the URL contains the "thankyou" parameter to determine if it's the thank you page
        const isThankYouPage = this.$route.query.thankyou === 'true';
        if (isThankYouPage) {
            // Show the thank you message
            this.showThankYouMessage = true;
            // Reload the iframe after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                this.reloadIframe();
            }, 5000);
        }
    },
    methods: {
        reloadIframe() {
            // Use the iframe's contentWindow to access the window object of the iframe
            const iframeWindow = this.$refs.myIframe.contentWindow;
            // Reload the iframe
            iframeWindow.location.reload();
        },
    },
}
</script>