<template>
    <div>
        <Navbar class="navbar-style-two" />
        <BannerLighteningFast />
        <AchieveSalesExcellence />
        <EffortlessAutomation />
        <RoutingCapabilitiess />
        <ModesofApprovals />
        <ApprovalsInsights />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import BannerLighteningFast from '../components/LightningFastQuoteApprovals/BannerLighteningFast'
import AchieveSalesExcellence from '../components/LightningFastQuoteApprovals/AchieveSalesExcellence'
import EffortlessAutomation from '../components/LightningFastQuoteApprovals/EffortlessAutomation'
import RoutingCapabilitiess from '../components/LightningFastQuoteApprovals/RoutingCapabilitiess'
import ModesofApprovals from '../components/LightningFastQuoteApprovals/ModesofApprovals'
import ApprovalsInsights from '../components/LightningFastQuoteApprovals/ApprovalsInsights'
import FreeTrial from '../components/LightningFastQuoteApprovals/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        BannerLighteningFast,
        AchieveSalesExcellence,
        EffortlessAutomation,
        RoutingCapabilitiess,
        ModesofApprovals,
        ApprovalsInsights,
        FreeTrial,
        DealDoxFooter,
    },
    head: {
        title: 'CPQ Quick Approvals|DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Efficient CPQ approvals made easy with DealDox. Empower sales teams with streamlined processes for faster deal closures.' },
            { hid: 'keywords', name: 'keywords', content: 'CPQ Quick Approvals, Smart approval in CPQ, CPQ advanced approvals, AI-enabled quoting tool, Lightening-Fast Quote Approvals, Digital Quoting Tool, Fast Quote Approvals, smart and automated agreement of deals, automated quotation solution, quote-to-cash platform, automated quoting tool, CPQ Approval process, streamlined approvals' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/quick-approvals' }
        ],
    },
}
</script>
