<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerCPQ />
        <WhatisCPQService />
        <TransformYourSales />
        <QuickandAccurate />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerCPQ from '../components/CPQ/MainBannerCPQ'
import TransformYourSales from '../components/CPQ/TransformYourSales'
import QuickandAccurate from '../components/CPQ/QuickandAccurate'
import WhatisCPQService from '../components/CPQ/WhatisCPQService'
import FreeTrial from '../components/CPQ/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerCPQ,
        TransformYourSales,
        QuickandAccurate,
        WhatisCPQService,
        FreeTrial,
        DealDoxFooter,
    },
    head: {
        title: '',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: '#' }
        ],
    },
}
</script>