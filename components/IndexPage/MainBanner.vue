<template>
    <div class="main-banner">
        <div class="screenshots-area pb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Experience Unbeatable Sales <br>Efficiency with DealDocx NOW!</h2>
                    <p>Are you still using spreadsheets? Toss it! and start using DealDox now <br>generate AI-Enabled quotes
                        with just few clicks</p>
                    <router-link to="/" class="default-btn">Boost Your Sales Now</router-link>
                    <div class="section-title-button">
                        <p>It’s completely FREE to start</p>
                    </div>
                </div>
                <div class="stats-map text-center">
                    <img src="../../assets/images/banner/banner-home.png" alt="cpq">
                </div>
                <!-- <div class="screenshots-swiper-slides">
                    <carousel :autoplay="5000" :settings='settings' :breakpoints='breakpoints' :wrap-around="true">
                        <slide v-for="slide in carouselItems" :key="slide.id">
                            <div class="swiper-slide">
                                <img :src="slide.image" alt="screenshots">
                            </div>
                        </slide>

                        <template #addons>
                            <navigation>
                                <template #next>
                                    <i class='ri-arrow-right-s-line'></i>
                                </template>
                                <template #prev>
                                    <i class='ri-arrow-left-s-line'></i>
                                </template>
                            </navigation>
                        </template>
                    </carousel>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    name: 'Screenshots',
})
</script>