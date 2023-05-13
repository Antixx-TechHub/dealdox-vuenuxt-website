<template>
    <div>
        <Navbar class="navbar-style-two" />
        <Stats />
        <IAQSolutions />
        <OurTeam />
        <Feedback />
        <Partner />
        <Blog />
        <GetInTouch />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import IAQSolutions from '../components/AboutUs/IAQSolutions';
import OurTeam from '../components/Common/OurTeam';
import Feedback from '../components/Common/Feedback';
import Partner from '../components/Common/Partner';
import Blog from '../components/Common/Blog';
import Stats from '../components/AboutUs/Stats';
import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
    components: {
        Navbar,
        IAQSolutions,
        OurTeam,
        Feedback,
        Partner,
        Blog,
        Stats,
        GetInTouch,
        DealDoxFooter,
    },
}
</script>