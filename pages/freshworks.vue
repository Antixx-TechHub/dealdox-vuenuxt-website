<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerLoacalized/>
        <HowLocalizedDeal />
        <KeyBenefitsof />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerLoacalized from '../components/freshworks/MainBannerLoacalized'
import HowLocalizedDeal from '../components/freshworks/HowLocalizedDeal'
import KeyBenefitsof from '../components/freshworks/KeyBenefitsof'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerLoacalized,
        HowLocalizedDeal,
        KeyBenefitsof,
        DealDoxFooter,
    },
    head: {
        title: 'Localized Deal Documents',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: 'Localized deal documents, Non-english cpq for services, Area-specific deal documents, Regionally customed agreements, Geographically customized quotations, Deal management, Deal documents, Dealdox cpq, Close deals faster, Regional cpq automated quote generation, Localized versions of deal documents, Customized automated quotation, How localized deal documents work, Multilingual document creation capability,' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/localizeddealdocuments' }
        ],
    },
}
</script>