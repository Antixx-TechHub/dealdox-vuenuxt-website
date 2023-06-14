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
    },
    head: {
        title: '',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: '#' }
        ],
    },
}
</script>