<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <ChallengesAndTrack />
        <Stats />
        <Funfacts />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageHeader from '../components/AutomatedQuotesGeneration/PageHeader'
import ChallengesAndTrack from '../components/AutomatedQuotesGeneration/ChallengesAndTrack'
import Stats from '../components/AutomatedQuotesGeneration/Stats'
import Funfacts from '../components/AutomatedQuotesGeneration/Funfacts'
import FreeTrial from '../components/AutomatedQuotesGeneration/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AutomatedQuotesGeneration',
    components: {
        Navbar,
        PageHeader,
        ChallengesAndTrack,
        Stats,
        Funfacts,
        FreeTrial,
        DealDoxFooter,
    }
}
</script>
