<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <Stats />
        <Funfacts />
        <IAQSolutions />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageHeader from '../components/CPQIntegration/PageHeader'
import IAQSolutions from '../components/CPQIntegration/IAQSolutions'
import Funfacts from '../components/CPQIntegration/Funfacts'
import Stats from '../components/CPQIntegration/Stats'
import FreeTrial from '../components/CPQIntegration/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageHeader,
        IAQSolutions,
        Funfacts,
        Stats,
        FreeTrial,
        DealDoxFooter,
    }
}
</script>