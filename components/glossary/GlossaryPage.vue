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
                <div class="col-lg-3 col-md-6" v-for="glossary in glossaries" :key="glossary.id">
                    <div class="single-blog-post">
                        <div class="content">
                            <h3>
                                <router-link :to="'/glossary-details/' + glossary.attributes.slug">
                                    {{ glossary.attributes.title }}
                                </router-link>
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
        }
    },
    created: async function () {
        axios.get('https://dealdoxstrapi.pbwebvision.com/api/glossary-categories')
            .then(response => {
                this.categories = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/glossaries?populate=*')
        this.glossaries = response.data.data;
    },
}
</script>