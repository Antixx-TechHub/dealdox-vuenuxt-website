<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <Partner />
        <Blog />
        <Faq />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageHeader from '../components/ContactUs/PageHeader'
import Partner from '../components/Common/Partner'
import Blog from '../components/Common/Blog'
import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
    components: {
        Navbar,
        PageHeader,
        Partner,
        Blog,
        Faq,
        DealDoxFooter,
    },
    head: {
        title: '',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: '#' }
        ],
    },
}
</script>