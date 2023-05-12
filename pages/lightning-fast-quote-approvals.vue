<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <ChallengesAndTrack />
        <Stats />
        <About />
        <SoftwareIntegrations />
        <Funfacts />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageHeader from '../components/LightningFastQuoteApprovals/PageHeader'
import ChallengesAndTrack from '../components/LightningFastQuoteApprovals/ChallengesAndTrack'
import Stats from '../components/LightningFastQuoteApprovals/Stats'
import About from '../components/LightningFastQuoteApprovals/About'
import SoftwareIntegrations from '../components/LightningFastQuoteApprovals/SoftwareIntegrations'
import Funfacts from '../components/LightningFastQuoteApprovals/Funfacts'
import FreeTrial from '../components/LightningFastQuoteApprovals/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageHeader,
        ChallengesAndTrack,
        Stats,
        About,
        SoftwareIntegrations,
        Funfacts,
        FreeTrial,
        DealDoxFooter,
    }
}
</script>
