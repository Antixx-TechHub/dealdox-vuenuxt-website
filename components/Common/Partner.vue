<template>
    <div class="partner-area pt-70">
        <div class="container">
            <div class="partner-title">
                Trusted by Industry Leaders
            </div>
            <div class="clients-logo-list align-items-center" v-if="partners !== null">
                <div class="single-clients-logo" v-for="slide in partners.partnerSlides" :key="slide.id">
                    <a href="#">
                        <img :src="slide.image.data.attributes.url" alt="image">
                    </a>
                </div>
            </div>


            <!-- <div class="partner-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="partner-item">
                            <img :src="slide.image" alt="image">
                        </div>
                    </slide>
                </carousel>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Partner',
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        partners: null,
    }),
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/partner?populate=partnerSlides.image')
        const { data: { attributes } } = response.data
        this.partners = attributes
    },
}
</script>