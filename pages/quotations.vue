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
            { hid: 'keywords', name: 'keywords', content: 'Quote automation, Automated quotations, Quote automation software, Quotation software, Automated quotes generation, Automate contracts and renewals, Automated quoting solutions, Intelligent quoting solution, Automated document generation, Dealdox automation software, Automate billing process, Quick and accurate quoting, Pricing & quote generator, Cpq for services, Create quotations, Maximize profit margins, Cpq software, Cpq software to analyze sales data and generate reports, Create quotes using automation software, Automates the document creation process, Cpq software to automate their sales processes, Cpq software to automate the generating quotes, Cpq software to automate the generating proposals, Cpq software to automate the generating contracts, Cpq software to optimize pricing strategies, Switch between price listings, Easily generating custom quotes in any desired language, Automate the process of generating proposals, Advanced cpq software generates quotations' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/automated-quotations' }
        ],
    },
}
</script>
