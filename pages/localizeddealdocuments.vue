<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerLoacalized/>
        <HowLocalizedDeal />
        <KeyBenefitsof />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerLoacalized from '../components/LocalizedDealDocuments/MainBannerLoacalized'
import HowLocalizedDeal from '../components/LocalizedDealDocuments/HowLocalizedDeal'
import KeyBenefitsof from '../components/LocalizedDealDocuments/KeyBenefitsof'
import FreeTrial from '../components/LocalizedDealDocuments/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerLoacalized,
        HowLocalizedDeal,
        KeyBenefitsof,
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