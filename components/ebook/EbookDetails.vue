<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>
                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><i class="ri-calendar-2-line"></i>{{ details[0].attributes.date }}</li>
                                </ul>
                            </div>
                            <h4>{{ details[0].attributes.name }}</h4>
                            <span v-html="details[0].attributes.description"></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="blog-details-desc">
                        <div class="comments-area">
                            <div class="comment-respond">
                                <form class="comment-form">
                                    <iframe width="600" height="600" :src="url" frameborder="0" allowfullscreen
                                        referrerpolicy="origin-when-cross-origin"></iframe>
                                </form>
                            </div>
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
    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            blogs: [],
            ebooks: [],
            url: "https://spmglobaltech.my.salesforce-sites.com/eBook",
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/ebooks?populate=*')
        this.ebooks = response.data.data;
    },
}
</script>