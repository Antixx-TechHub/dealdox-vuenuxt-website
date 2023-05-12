<template>
    <div class="footer-wrap-area pt-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../assets/images/footer-logo.svg" alt="logo">
                        </router-link>
                        <p>DealDocx, a unique cost-effective, CRM and AI enabled quote management software specially
                            designed for IT services.</p>
                        <ul class="social-links">
                            <li>
                                <a href="#" target="_blank"><i class="ri-facebook-fill"></i></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><i class="ri-instagram-fill"></i></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><i class="ri-linkedin-fill"></i></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><i class="ri-twitter-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-2">
                        <h3>Features</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/">CPQ</router-link>
                            </li>
                            <li>
                                <router-link to="/">Integrations</router-link>
                            </li>
                            <li>
                                <router-link to="/">Swift Quotes</router-link>
                            </li>
                            <li>
                                <router-link to="/">Simplified Deals</router-link>
                            </li>
                            <li>
                                <router-link to="/">Quick Approvals</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Integrations</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/">Salesforce</router-link>
                            </li>
                            <li>
                                <router-link to="/">Hubspot</router-link>
                            </li>
                            <li>
                                <router-link to="/">Freshworks</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Company</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/">About Us</router-link>
                            </li>
                            <li>
                                <router-link to="/">Collaborators</router-link>
                            </li>
                            <li>
                                <router-link to="/">Contact us</router-link>
                            </li>
                            <li>
                                <router-link to="/">Glossary</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Resources</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/">Blog</router-link>
                            </li>
                            <li>
                                <router-link to="/">Success</router-link>
                            </li>
                            <li>
                                <router-link to="/">Stories</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Get in touch</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/">Locate us on map</router-link>
                            </li>
                            <li>
                                <router-link to="/">Mail us - Info@dealdocx.io</router-link>
                            </li>
                            <li>
                                <router-link to="/">Call us - 999999999</router-link>
                            </li>
                        </ul>
                        <!-- <p>Best solution for your it startup business, consecteturadipiscing elit.</p>
                        <form class="newsletter-form" data-toggle="validator">
                            <input type="text" class="input-newsletter" placeholder="Your Email" name="EMAIL">
                            <button type="submit">
                                <i class="ri-send-plane-2-line"></i>
                            </button>
                        </form> -->
                    </div>
                </div>
            </div>
            <!-- <div class="copyright-area">
                <div class="row col-lg-12 col-md-6 col-sm-6">
                    <div className="col-lg-6 col-md-6">
                        <p>Copyright {{ currentYear }} <strong>All right reserved @2023, </strong><a
                                href="https://dealdox.io/" target="_blank">DealDocx</a></p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <p><router-link to="/terms-conditions">Terms & conditions</router-link> | <router-link to="/privacy-policy">Privacy Policy</router-link></p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterStyleFour',

}
</script>