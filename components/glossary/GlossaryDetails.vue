<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-content">
                            <h4>{{ details[0].attributes.title }}</h4>
                            <span v-html="details[0].attributes.longDesc"></span>
                        </div>

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
                                            value="Post A Comment">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area">
                        <div class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>
                            <ul>
                                <li v-for="category in categories" :key="category.id">
                                    <router-link :to="`/category-details/${category.attributes.slug}`">{{
                                        category.attributes.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </aside>
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
            categories: []
        }
    },
    created() {
        axios
            .get('http://localhost:1337/api/blog-categories') // Update the endpoint URL if needed
            .then(response => {
                this.categories = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>