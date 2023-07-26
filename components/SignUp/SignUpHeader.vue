<template>
    <div class="contact-page-header-form-app-download-area pb-80 bg-F7F7FF">
        <div class="container">
            <div class="contact-page-header-form-app-download-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner bg-gradient-color">
                            <div class="features-content-improve-sales">
                                <h2>Sign Up Now and Start Using DealDox CPQ! </h2>
                                <h6>Tired of tedious Quoting? Boost Your Sales with DealDox CPQ. Sign up now and unleash its
                                    power!</h6>
                                <h5><strong>With DD CPQ platform, you'll experience: </strong>
                                </h5>
                                <div class="features-content">
                                    <ul class="features-list">
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Streamlined Quotation Process
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Faster Deal Closures </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Dynamic Pricing and Product Bundling</h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Real-time Pricing and Availability
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Enhanced Customer Experience
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Actionable Analytics
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Multi-lingual Deal Document Capabilities
                                            </h6>
                                        </li>
                                        <h5>Sign up Now and Boost Your Sales Process with DealDox CPQ!</h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-area pt-70">
                            <div class="container">
                                <div class="contact-form">
                                    <form id="contactForm">
                                        <div class="row">
                                            <iframe width="600" height="800" :src="url" frameborder="0" allowfullscreen
                                                referrerpolicy="origin-when-cross-origin"></iframe>
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
    name: 'AppDownload',
    data() {
        return {
            url: "https://spmglobaltech.my.salesforce-sites.com/signup"
        };
    },
}
</script>