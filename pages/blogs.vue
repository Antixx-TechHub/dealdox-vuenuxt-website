<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two" pageTitle="Blogs"
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" />
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
};
</script>