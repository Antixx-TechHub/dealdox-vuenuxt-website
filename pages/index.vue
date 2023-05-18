<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBanner />
  <Partner />
  <EasyIntegration />
  <LightningFast />
  <Pricing />
  <AutomatedQuotes />
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
import Pricing from '../components/Common/Pricing';
import AutomatedQuotes from '../components/Common/AutomatedQuotes';
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
    AutomatedQuotes,
    Pricing,
    GetInTouch,
    Faq,
    DealDoxFooter,
},
}
</script>