<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBanner />
        <Stats />
        <IAQSolutions />
        <ChallengesAndTrack />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/CPQ/MainBanner'
import IAQSolutions from '../components/CPQ/IAQSolutions'
import ChallengesAndTrack from '../components/CPQ/ChallengesAndTrack'
import Stats from '../components/CPQ/Stats'
import FreeTrial from '../components/CPQ/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBanner,
        IAQSolutions,
        ChallengesAndTrack,
        Stats,
        FreeTrial,
        DealDoxFooter,
    }
}
</script>