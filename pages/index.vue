<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBanner />
  <TransformYourSales />
  <Partner />
    <WithOurSubscrip />
  <EasyIntegration />
  <LightningFast />
  <ImproveSales />
  <EasyCPQ />
  <AdditionalFeature />
  <AutomatedQuotes />
  <GetInTouch />
  <Faq />
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBanner from '../components/IndexPage/MainBanner';
import TransformYourSales from '../components/IndexPage/TransformYourSales';
import Partner from '../components/Common/Partner'

import WithOurSubscrip from '../components/IndexPage/WithOurSubscrip';

import EasyIntegration from '../components/IndexPage/EasyIntegration';
import LightningFast from '../components/IndexPage/LightningFast';
import ImproveSales from '../components/IndexPage/ImproveSales';
import EasyCPQ from '../components/IndexPage/EasyCPQ';
import AdditionalFeature from '../components/IndexPage/AdditionalFeature';
import AutomatedQuotes from '../components/IndexPage/AutomatedQuotes';
import GetInTouch from '../components/Common/GetInTouch';
import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
components: {
    Navbar,
    MainBanner,
    TransformYourSales,
    Partner,
    WithOurSubscrip,
    EasyIntegration,
    LightningFast,
    ImproveSales,
    EasyCPQ,
    AdditionalFeature,
    AutomatedQuotes,
    GetInTouch,
    Faq,
    DealDoxFooter,
},
    head: {
        title: 'DealDox|An AI-enabled Quoting Solution',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Discover DealDox, the AI-enabled quoting solution revolutionizing the sales process. Streamline your quoting workflows with advanced artificial intelligence capabilities, improving accuracy and efficiency. ' },
            { hid: 'keywords', name: 'keywords', content: 'CPQ, CPQ for Services, Quoting software, Quotation Generation, Automated Quotes, Automated Quotations, Quotation software,Automated quoting tool, Best cpq solutions, Cpq saas solution, Saas quoting software, Cpq saas software, Saas quotation software, Leading cpq for services, Advanced quoting solution, Cpq saas software, Saas-based quotation product, Automating price quote generation, Cpq streamlines sales processes, Deal management, Cpq software, Cpq solutions, Services cpq, Leading cpq solution, Swift deal creation, Agile price list switching, Dynamic discounts, Easy integrations, Quote creation, Multi-level approval, Sales process, Quote generation process, Guided selling, Price and cost management, Cpq integration, Quotations generated, Automated quoting solution, Quick & accurate quote automation, Quote generation process, Automated deal documents, Quote-to-cash process, Effortless quoting solution, Subscription-based quoting solution, Lightning-fast quote approvals, Effortless quoting with dealdox, Quick and accurate quote generation , Shorten the sales cycles, Localized deal documents, Deal documents in non-english language, Guided selling approach, Best cpq saas software, Complete sales life cycle process with automation capabilities, Quote analytics and reporting, Automate the quote generation process, Accurate pricing quotes and contracts, Cloud-based quoting solution, Cpq for services software ' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io' }
        ],
    },
}
</script>