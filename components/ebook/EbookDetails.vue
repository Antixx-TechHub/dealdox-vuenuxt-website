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
                <div class="col-lg-5 col-md-12 ptb-100">
                    <div class="contact-area">
                        <div class="container">
                            <div class="section-title-about">
                                <h3>Download Now</h3>
                            </div>
                            <div class="contact-form">
                                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                    method="POST">
                                    <input name="oid" type="hidden" value="00D2v000003PByK" />
                                    <input name="retURL" type="hidden" value="https://dealdox.pbwebvision.com/thank-you" />
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>First Name</p>
                                                <input type="text" maxlength="40" name="first_name" required
                                                    class="form-control" id="first_name" placeholder="Eg: Sarah">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Last Name</p>
                                                <input type="text" maxlength="40" name="last_name" required
                                                    class="form-control" id="last_name" placeholder="Eg: Sarah">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Phone</p>
                                                <input type="number" maxlength="40" name="phone" required
                                                    class="form-control" id="phone" placeholder="Eg: Sarah">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>e-mail</p>
                                                <input type="email" maxlength="40" name="email" required
                                                    class="form-control" id="email" placeholder="Eg: Sarah">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Company</p>
                                                <input type="text" maxlength="40" name="company" required
                                                    class="form-control" id="company" placeholder="Eg: Sarah">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Country</p>
                                                <input type="text" maxlength="40" name="country" required
                                                    class="form-control" id="country" placeholder="Eg: Sarah">
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <p>Leave your message</p>
                                                <textarea name="00N2v00000XQu8f" id="00N2v00000XQu8f" required
                                                    class="form-control" cols="30" rows="6"
                                                    placeholder="This just a dummy message! please dont mind"></textarea>
                                            </div>
                                        </div>

                                        <tr style="display: none;">
                                            <td><label for="Contact_us__c">Contact</label>
                                            </td>
                                            <td><input id="Contact_us__c" maxlength="40" name="Contact_us__c" size="20"
                                                    type="text" value="True" /><br />
                                            </td>
                                        </tr>

                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" name="submit" required class="default-btn"><i
                                                    class='bx bx-paper-plane'></i>
                                                Submit </button>
                                        </div>

                                    </div>
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
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/ebooks?populate=*')
        this.ebooks = response.data.data;
    },
}
</script>