<template>
    <div>
        <Navbar class="navbar-style-two"/>
        <PageTitle class="page-title-style-two"
            v-if="details !== null"
            :pageTitle="details[0].attributes.title" 
        />
        <div v-if="details !== null">
            <BlogDetails 
                v-bind:detailsContent="details"
            />
        </div>
        <DealDoxFooter />
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogDetails from '../components/BlogDetails/BlogDetails'
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageTitle,
        BlogDetails,
        DealDoxFooter,
    },
    data (){
        return {
            details: null
        }
    },
    created: async function (){
        const { slug } = this.$route.params
        const reaponse = await axios.get(`http://cms.dealdox.io/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug }})
        this.details = reaponse.data.data
    }
}
</script>