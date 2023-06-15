<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="section-title">
                <h2>Featured Blogs</h2>
            </div>
            <ul>
                <li v-for="blog in details[0]?.attributes?.blogs?.data">
                    <h3>
                        <router-link :to="'/blog-details/' + blog.attributes.slug">
                            {{ blog.attributes.title }}
                        </router-link>
                    </h3>
                </li>
            </ul>
            <!-- <div class="row justify-content-center" v-if="categories !== []">
                <div class="col-lg-4 col-md-6" v-for="category in categories" :key="category.id">
                    <div class="single-blog-post" v-for="blog in details[0]?.attributes?.blogs?.data">
                        <div class="image">
                            <router-link :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> {{ blog.attributes.date }}</li>
                            </ul>
                            <h3>
                                <router-link :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            categories: []
        }
    },
    created() {
        console.log("########### details....", this.details);
        //   axios
        //     .get('http://localhost:1337/api/categories') // Update the endpoint URL if needed
        //     .then(response => {
        //       this.categories = response.data.data;
        //       console.log("categories....",this.categories)
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
    }
}
</script>