<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle pageTitle="Cookie Preference" />
        <Cookie />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Cookie from '../components/Cookies/Cookie';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
    components: {
        Navbar,
        PageTitle,
        Cookie,
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