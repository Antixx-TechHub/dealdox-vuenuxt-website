<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBannerSubscription />
  <OnbaordingAssistance />
  <!-- <Pricing /> -->
  <!-- <AutomatedQuotes /> -->
  <!-- <GetInTouch /> -->
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBannerSubscription from '../components/Subscriptions/MainBannerSubscription';
import OnbaordingAssistance from '../components/Subscriptions/OnbaordingAssistance';
// import Pricing from '../components/Common/Pricing';
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
components: {
    Navbar,
    // AutomatedQuotes,
    MainBannerSubscription,
    OnbaordingAssistance,
    // Pricing,
    // GetInTouch,
    DealDoxFooter,
},
}
</script>