<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
        <div v-if="details !== null">
            <SuccessStories v-bind:detailsContent="details" />
        </div>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import SuccessStories from '../../../components/success-stories/SuccessStoriesDetails'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    components: {
        Navbar,
        PageTitle,
        SuccessStories,
        DealDoxFooter,
    },

    data() {
        return {
            details: null,
            seoData: null,

        }
    },

    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://dealdoxstrapi.pbwebvision.com/api/successstories?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
            // console.log( this.seoData ,' this.seoData ');
        }
        // console.log("this.details....", this.details);
    },
    head({ $seo }) {

        return $seo({
            title: this.seoData?.metaTitle,
            description: this.seoData?.metaDescription,
            keywords: this.seoData?.keywords,
            // image: this.post.image || '',
        });
    },

};
</script>