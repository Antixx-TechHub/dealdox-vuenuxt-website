<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two"
            pageTitle="Blogs" 
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" 
        />
        <Blog />
        <AutomatedQuotes />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Blog from '../components/blogs/Blog'
import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    components: {
        Navbar,
        PageTitle,
        Blog,
        AutomatedQuotes,
        DealDoxFooter,
    },
    head: {
        title: 'Dealdox - Blogs',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' }
       
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: '' }
        ],
    },
};
</script>