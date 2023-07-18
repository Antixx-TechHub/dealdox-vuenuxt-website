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
                                <h3 class="comment-reply-title">Leave A Reply</h3>
                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" placeholder="Your Name*" name="author"
                                            required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" placeholder="Your Email*" name="email"
                                            required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" placeholder="Website" name="url">
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..."
                                            rows="5" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent"
                                            id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this
                                            browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit"
                                            value="Download Now">
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                    <!-- <aside class="widget-area">
                        <div class="widget widget_jexa_posts_thumb">
                            <h3 class="widget-title">Popular Posts</h3>
                            <article class="item" v-for="ebook in ebooks" :key="ebook.id">
                                <router-link :to="'/ebook-details/' + ebook.attributes.slug" class="thumb">
                                    <img :src="ebook.attributes.image.data.attributes.url" alt="blog">
                                </router-link>
                                <div class="info">
                                    <h4 class="title usmall"><router-link :to="'/blog-details/' + ebook.attributes.slug">
                                            {{ ebook.attributes.name }}
                                        </router-link></h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i> {{ ebook.attributes.date
                                    }}</span>
                                </div>
                            </article>
                        </div>
                    </aside> -->
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
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/ebooks?populate=*')
        this.ebooks = response.data.data;
    },
}
</script>