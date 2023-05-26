<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two"
            pageTitle="Check our Latest & Trending Blogs" 
            pageDesc="News and Insights" 
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
        title: 'DealDox - Blogs',
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