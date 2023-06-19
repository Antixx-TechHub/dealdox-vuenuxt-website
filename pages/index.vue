<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBanner />
  <Partner />
  <EasyIntegration />
  <LightningFast />
  <ImproveSales />
  <EasyCPQ />
  <AdditionalFeature />
>  <AutomatedQuotes />
  <GetInTouch />
  <Faq />
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBanner from '../components/IndexPage/MainBanner';
import Partner from '../components/Common/Partner'
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
    Partner,
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
            { hid: 'keywords', name: 'keywords', content: 'DealDox CPQ, CPQ Software, deal management, automated quoting tool, automated quoting solution, CPQ SaaS Solution, Quote-to-Cash process,  Quotation Generation, Automated Quotes, effortless quoting solution, subscription-based quoting solution, SaaS Quoting Software, CPQ SaaS Solution, Quote-to-Cash process, Lightning-Fast Quote Approvals , best CPQ Solutions, CPQ solutions, quick & accurate quote automation, services CPQ, quote generation process DealDox CPQ , Quoting software, Automated Deal Documents, CPQ for Services Software, CPQ SaaS Software, Leading CPQ Solution' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io' }
        ],
    },
}
</script>