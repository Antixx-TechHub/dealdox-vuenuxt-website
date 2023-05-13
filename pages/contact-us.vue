<template>
    <div>
        <Navbar class="navbar-style-two" />

        <Partner />
        <Blog />
        <Faq />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';

import Partner from '../components/Common/Partner'
import Blog from '../components/Common/Blog'
import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
    components: {
        Navbar,

        Partner,
        Blog,
        Faq,
        DealDoxFooter,
    },
}
</script>