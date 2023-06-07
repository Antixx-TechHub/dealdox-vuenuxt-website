<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two"
            pageTitle="Success Stories" 
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" 
        />
        <SuccessStories />
        <AutomatedQuotes />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import SuccessStories from '../components/success-stories/SuccessStories'
import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    components: {
        Navbar,
        PageTitle,
        SuccessStories,
        AutomatedQuotes,
        DealDoxFooter,
    },
};
</script>