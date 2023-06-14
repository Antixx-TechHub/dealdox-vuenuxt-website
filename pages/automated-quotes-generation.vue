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
    },
    head: {
        title: 'Quote Automation|DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Automate quoting processes with DealDox. Experience efficient quote generation and streamline your sales workflow. Empower your team for success.' },
            { hid: 'keywords', name: 'keywords', content: 'Quote Automation, Automated Quotes Generation, Automate contracts and renewals, automate billing process, Automated Quoting Solutions, Quick and Accurate Quoting, Pricing & Quote Generator, create quotes using automation software, automates the document creation process, CPQ software to automate their sales processes, CPQ software to automate the generating quotes, CPQ software to automate the generating proposals, CPQ software to automate the generating contracts, intelligent quoting solution, Automated Document Generation, Document automation, advanced CPQ software generates quotations, AI-enabled quoting solution, CPQ for Services, DealDox Automation Software' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/automated-quotations' }
        ],
    },
}
</script>
