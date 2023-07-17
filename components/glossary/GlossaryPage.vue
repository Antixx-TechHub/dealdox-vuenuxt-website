<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="pagination-area">
                <div class="nav-links">
                    <ul v-for="category in categories" :key="category.id">
                        <!-- <li > -->
                        <router-link :to="`/glossary-category-details/${category.attributes.slug}`" class="page-numbers">{{
                            category.attributes.name }}</router-link>
                        <!-- </li> -->
                    </ul>
                </div>
            </div>
            <div class="section-title">
                <!-- <h2>Glossary</h2> -->
            </div>
            <div class="row justify-content-center" v-if="glossaries !== []">
                <div class="col-lg-12 col-md-12" v-for="glossary in groupby" :key="glossary.value">
                    <div class="single-blog-post">
                        <div class="content">
                            <h3>
                                {{ glossary.value }}
                                <!-- <router-link :to="'/glossary-details/' + glossary.attributes.slug">
                                    {{ glossary.attributes.title }}
                                </router-link> -->
                                <div class="col-lg-3 col-md-6" v-for="glossData in glossary.data" :key="glossData.id">
                                    {{ glossData.attributes.title }}
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            categories: [],
            glossaries: [],
            groupby: {}
        }
    },
    created: async function () {
        const response1 = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/glossary-categories')
        this.categories = response1.data.data;
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/glossaries?populate=*')
        this.glossaries = response.data.data;
        let groupby = {};
        this.categories.map(x => {
            const r = this.glossaries.filter(v =>
                v.attributes.glossary_categories.data.map(e => e.id).includes(x.id)
            )
            groupby = { ...groupby, [x.attributes.name]: r };

        })
        const dd = []
        Object.keys(groupby).map(key => {
            dd.push({ value: key, data: groupby[key] })
        });
        this.groupby = dd;
        console.log(this.groupby, 'groupby');

    },
}
</script>