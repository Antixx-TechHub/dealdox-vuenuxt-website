<template>
    <div class="partner-area pt-70">
        <div class="container">
            <div class="partner-title">
                Trusted by Industry Leaders
            </div>
            <!-- <div class="clients-logo-list align-items-center" v-if="partners !== null">
                <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
                          :perPageCustom="[[0, 2], [576, 3], [768, 3], [1200, 5]]" v-if="partners !== null">
                          <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                                <div class="single-partner-item">
                                    <a>
                                        <img :src="slide.image.data.attributes.url" alt="image">
                                    </a>
                                </div>
                            </slide>
                </carousel>
            </div> -->

            <div class="partner-slides">
                <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
                          :perPageCustom="[[0, 2], [576, 3], [768, 3], [1200, 5]]" v-if="partners !== null">
                          <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                                <div class="single-partner-item">
                                    <a>
                                        <img :src="slide.image.data.attributes.url" alt="image">
                                    </a>
                                </div>
                            </slide>
                </carousel>
            </div>
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