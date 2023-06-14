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
        title: 'CPQ (Configure, Price, Quote)|DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Streamline quoting processes with DealDox CPQ. Configure, price, and quote with precision, empowering sales teams for success.' },
            { hid: 'keywords', name: 'keywords', content: 'CPQ(Configure, Price, Quote), best cpq software, price quote software, configure price quote (cpq) software, automate presales process, CPQ guided selling, guidded selling cpq, best quote automation software, Automated Quoting Solutions, AI-enabled CPQ for Services, Quote-to-cash process, Advanced guided selling, cpq guided selling setup, automate the process of configuring products sales tool to generate quick quotes accurately, automated quoting software, best tool for sales engagement, CPQ Quoting Process' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/cpq' }
        ],
    },
}
</script>