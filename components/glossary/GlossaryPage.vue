<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="section-title">
                <h2>Glossary</h2>
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
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <div class="nav-links">
                            <span class="page-numbers current">1</span>
                            <router-link to="/blog-grid" class="page-numbers">2</router-link>
                            <router-link to="/blog-grid" class="page-numbers">3</router-link>
                            <router-link to="/blog-grid" class="next page-numbers" title="Next Page"><i
                                    class="ri-arrow-right-line"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Glossary',
    data() {
        return {
            glossaries: []
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/glossaries?populate=*')
        this.glossaries = response.data.data
    },
}
</script>