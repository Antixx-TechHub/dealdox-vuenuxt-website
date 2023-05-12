<template>
    <div class="app-pricing-gradient-area ptb-75">
        <div class="container">
            <div class="section-title">
                <h2>Let’s get started?</h2>
                <p>Choose a plan that works best for your team and boost <br> your sales with DealDocx.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-app-pricing-box">
                        <div class="title">
                            <h3>FREE</h3>
                            <p>Powerful & awesome elements</p>
                        </div>
                        <div class="price">
                            0$ <span>/Month</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="ri-check-line"></i> All free Features</li>
                            <li><i class="ri-check-line"></i> Personalized Document</li>
                            <li><i class="ri-check-line"></i> Templates Sales Dashboard</li>
                            <li><i class="ri-check-line"></i> API</li>
                            <li><i class="ri-check-line"></i> SSO Support</li>
                            <li><i class="ri-check-line"></i> Online forms</li>

                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="default-btn">Start Using for Free</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-app-pricing-box active">
                        <div class="title">
                            <h3>Premium</h3>
                            <p>Powerful & awesome elements</p>
                        </div>
                        <div class="price">
                            $27 <span>/Month</span>
                        </div>
                        
                        <ul class="features-list">
                            <li><i class="ri-check-line"></i> All free Features</li>
                            <li><i class="ri-check-line"></i> Personalized Document</li>
                            <li><i class="ri-check-line"></i> Templates Sales Dashboard</li>
                            <li><i class="ri-check-line"></i> API</li>
                            <li><i class="ri-check-line"></i> SSO Support</li>
                            <li><i class="ri-check-line"></i> Online forms</li>

                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="default-btn">Purchase Plan</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-app-pricing-box">
                        <div class="title">
                            <h3>Business</h3>
                            <p>Powerful & awesome elements</p>
                        </div>
                        <div class="price">
                            $69 <span>/Month</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="ri-check-line"></i> All free Features</li>
                            <li><i class="ri-check-line"></i> Personalized Document</li>
                            <li><i class="ri-check-line"></i> Templates Sales Dashboard</li>
                            <li><i class="ri-check-line"></i> API</li>
                            <li><i class="ri-check-line"></i> SSO Support</li>
                            <li><i class="ri-check-line"></i> Online forms</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="default-btn">Request a Quote</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="app-pricing-bottom-text">
                <router-link to="/pricing">See All Pricing Plan</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing'
}
</script>