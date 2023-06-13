<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="section-title">
                <h2>Success Stories</h2>
            </div>
            <div class="row justify-content-center" v-if="projects !== []">
                <div class="col-lg-4 col-md-6" v-for="project in projects" :key="project.id">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link :to="'/success-stories-details/' + project.attributes.slug" class="d-block">
                                <img :src="project.attributes.image.data.attributes.url" alt="blog">
                            </router-link>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link :to="'/success-stories-details/' + project.attributes.slug">
                                    {{ project.attributes.title }}
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
    name: 'SuccessStories',
    data() {
        return {
            projects: []
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/projects?populate=*')
        this.projects = response.data.data
    },
}
</script>