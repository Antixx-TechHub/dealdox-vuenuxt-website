<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBanner />
  <Pricing />
  <AutomatedQuotes />
  <GetInTouch />
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBanner from '../components/IndexPage/MainBanner';
import Pricing from '../components/Common/Pricing';
import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
components: {
    Navbar,
    MainBanner,
    AutomatedQuotes,
    Pricing,
    GetInTouch,
    DealDoxFooter,
},
}
</script>