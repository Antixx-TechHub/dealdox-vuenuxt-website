<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].attributes.title" 
            pageDesc="News and Insights" 
        />
        <div v-if="details !== null">
            <BlogDetails 
                v-bind:detailsContent="details"
            />
        </div>
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import BlogDetails from '../../../components/single-blog/BlogDetails'
import FreeTrial from '../../../components/single-blog/FreeTrial'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    components: {
        Navbar,
        PageTitle,
        BlogDetails,
        FreeTrial,
        DealDoxFooter,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function (){
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://cms.dealdox.io/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug }})
        this.details = reaponse.data.data
    }
};
</script>