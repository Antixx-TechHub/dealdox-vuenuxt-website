<template>
    <div>
        <Navbar class="navbar-style-two" />
        <Banner />
        <AccelerateYourSales />
        <Experiencethefuture />
        <YourBusiness />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import Banner from '../components/AutomatedQuotesGeneration/Banner'
import AccelerateYourSales from '../components/AutomatedQuotesGeneration/AccelerateYourSales'
import Experiencethefuture from '../components/AutomatedQuotesGeneration/Experiencethefuture'
import YourBusiness from '../components/AutomatedQuotesGeneration/YourBusiness'
import FreeTrial from '../components/AutomatedQuotesGeneration/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    name: 'AutomatedQuotesGeneration',
    components: {
        Navbar,
        Banner,
        AccelerateYourSales,
        Experiencethefuture,
        YourBusiness,
        FreeTrial,
        DealDoxFooter,
    }
}
</script>
