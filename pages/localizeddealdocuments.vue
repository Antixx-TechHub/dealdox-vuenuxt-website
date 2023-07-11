<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerLoacalized/>
        <HowLocalizedDeal />
        <KeyBenefitsof />
        <HowLocalized />
        <EmpoerGlobal />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerLoacalized from '../components/LocalizedDealDocuments/MainBannerLoacalized'
import HowLocalizedDeal from '../components/LocalizedDealDocuments/HowLocalizedDeal'
import KeyBenefitsof from '../components/LocalizedDealDocuments/KeyBenefitsof'
import HowLocalized from '../components/LocalizedDealDocuments/HowLocalized'
import EmpoerGlobal from '../components/LocalizedDealDocuments/EmpoerGlobal'
import FreeTrial from '../components/LocalizedDealDocuments/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerLoacalized,
        HowLocalizedDeal,
        KeyBenefitsof,
        HowLocalized,
        EmpoerGlobal,
        FreeTrial,
        DealDoxFooter,
    },
    head: {
        title: 'Salesforce CRM',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/salesforce' }
        ],
    },
}
</script>