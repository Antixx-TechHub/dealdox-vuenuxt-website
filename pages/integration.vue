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
        title: 'CPQ Integration|DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Enhance sales performance with DealDox CPQ integrations. Integrate seamlessly with major CRMs and ERPs to optimize your quoting workflow.' },
            { hid: 'keywords', name: 'keywords', content: 'Cpq integration, Easy cpq integration, Integrating CPQ, CPQ Integration work, Cpq for services, Cpq crm integration, Quote-to-cash cycle, Deal closures, Quote-to-delivery process, Revenue forecasting, Automate sales quoting process, Cpq guided selling configuration, Quoting & order management cpq, Generate detailed statements of work, Convert opportunities into cash, Cpq software integrated with other platforms like crm, Erp and e-commerce ' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/integration' }
        ],
    },
}
</script>