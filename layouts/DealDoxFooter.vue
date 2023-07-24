<template>
    <div class="footer-wrap-area pt-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../assets/images/footer-logo.svg" alt="logo">
                        </router-link>
                        <p>DealDox CPQ: the all-in-one solution that streamlines quoting, closes deals faster, and boosts sales efficiency.</p>
                        <ul class="social-links">
                            <li>
                                <a href="https://www.facebook.com/dealdox.io" target="_blank"><i class="ri-facebook-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/dealdox.io/" target="_blank"><i class="ri-instagram-fill"></i></a>
                            </li>
                            <li>
                                <a href="/" target="_blank"><i class="ri-linkedin-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDealdox_io" target="_blank"><i class="ri-twitter-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCUyG5sKBn2yVwLG0PbbE8IA" target="_blank"><i class="ri-youtube-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Features</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/quotations">Automated Quotations</router-link>
                            </li>
                            <li>
                                <router-link to="/approvals">Quick Approvals</router-link>
                            </li>
                            <li>
                                <router-link to="/cpq">CPQ</router-link>
                            </li>
                            <li>
                                <router-link to="/integration">Integration</router-link>
                            </li>
                            <li>
                                <router-link to="/localizeddealdocuments">Localized Deal Documents</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Integrations</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/salesforce">Salesforce
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/microsoft-dynamics">Microsoft Dynamics
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/freshworks">Freshworks
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/hubspot">HubSpot
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/sugar-crm">SugarCRM</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Resources</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/blogs">Blogs</router-link>
                            </li>
                            <li>
                                <router-link to="/success-stories">Success Stories</router-link>
                            </li>
                            <li>
                                <router-link to="/glossary">Glossary </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Company </h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/team">Our Team</router-link>
                            </li>
                            <li>
                                <router-link to="/contactus">Get in Touch</router-link>
                            </li>
                            <li>
                                <router-link to="/sign-up-free-trial">Sign Up</router-link>
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
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Get in Touch </h3>
                        <ul class="links-list">
                            <li>
                                <p>Locate us on map</p>
                            </li>
                            <li>
                                <p>Mail us - <a href="mailto:info@dealdox.io">info@dealdox.io</a></p>
                            </li>
                            <li>
                                <p>Call us - +91 9999999999</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="row">
                    <router-link to="/" class="logo">
                            <img src="../assets/images/footer-logo.svg" alt="logo">
                        </router-link>
                    <div class="col-lg-6 col-sm-6">
                        <p class="text-left"><router-link to="/security">Security</router-link> |
                            <router-link to="/terms-conditions">Terms of Use</router-link>
                        </p>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <p class="text-right"><router-link to="/privacy-policy">Privacy Policy</router-link> |
                            <router-link to="/cookiepreference">Cookie Preference</router-link>
                        </p>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                    </div>
                </div>
                <br>
                <div class="about-content">
                <p class="text-center">Copyright @ 2023 DealDox Pvt Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DealDoxFooter',

}
</script>