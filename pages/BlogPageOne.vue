<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two" pageTitle="Blog Right Sidebar" />
        <Blog />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Blog from '../components/BlogOne/Blog';
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageTitle,
        Blog,
        DealDoxFooter,
    }
}
</script>