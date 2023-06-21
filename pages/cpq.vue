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
            { hid: 'keywords', name: 'keywords', content: 'Cpq(configure, price, quote), Cpq, Configure, price, quote, Configure, price, quote (cpq) software, Cpq software, Best cpq software, Automated quoting solutions, Automated quotation software, Ai-enabled cpq for services, Service pricing and quotes, Quick and accurate quotation, Quoting and order management cpq , Cpq sales automation, Automated quote generation tool, Automate presales process, Cpq guided selling, Advanced guided selling, Cpq quoting process, Create quotes, Personalized quotes, Generate quotes, Accurate pricing and quotes, Best quote automation software Quote-to-cash process Cpq guided selling setup, Automate the process of configuring products, Sales tool to generate quick quotes accurately, Sales quotes faster and more accurately, Faster and more accurate quotes, Automates the presales process, Configuring the pricing of services Automate approval process, Best tool for sales engagement' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/cpq' }
        ],
    },
}
</script>