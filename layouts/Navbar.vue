<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../assets/images/logo.svg" alt="logo">
                        <!-- <img src="../../assets/images/black-logo.png" alt="logo"> -->
                    </router-link>

                    <div class="navbar-toggler" @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="/" class="toggle nav-link">Home</a>
                                <!-- <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link">Home Demo - 1</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-one" class="nav-link">Home Demo - 2</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-three" class="nav-link">Home Demo - 3</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-four" class="nav-link">Home Demo - 4</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-five" class="nav-link">Home Demo - 5</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-six" class="nav-link">Home Demo - 6</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-seven" class="nav-link">Home Demo - 7</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-eight" class="nav-link">Home Demo - 8</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/home-nine" class="nav-link">Home Demo - 9</router-link>
                                    </li>
                                </ul> -->
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Features</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/cpq" class="nav-link">CPQ</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/cpq-integration" class="nav-link">Integrations</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/automated-quotes-generation" class="nav-link">Swift
                                            Quotes</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/lightning-fast-quote-approvals" class="nav-link">Quick
                                            Approvals</router-link>
                                    </li>
                                </ul>
                            </li>

                        
                            <li class="nav-item"><a href="/subscriptions" class="toggle nav-link">Subscriptions</a>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Company</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/about-us" class="nav-link">About us</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/contact-us" class="nav-link">Contact us</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Resources</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/blogs" class="nav-link">Blogs</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/coming-soon" class="nav-link">Case Studies</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/coming-soon" class="nav-link">Success Stories</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/coming-soon" class="nav-link">Glossary</router-link>
                                    </li>
                                </ul>
                            </li>

                            <!-- <li class="nav-item megamenu">
                                <a href="#" class="dropdown-toggle nav-link">Pages</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <h6 class="submenu-title">Pages I</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li>
                                                            <router-link to="/team-one">Team 1</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/team-two">Team 2</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/how-it-works">How It Works</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/gallery">Gallery</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/services">Services</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/pricing">Pricing Plan</router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="submenu-title">Pages II</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li>
                                                            <router-link to="/feedback">Reviews</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/sign-in">Sign In</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/sign-up">Sign Up</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/forget-password">Forget Password</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/privacy-policy">Privacy Policy</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/terms-conditions">Terms &
                                                                Conditions</router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="submenu-title">Pages III</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li>
                                                            <router-link to="/screenshots">Screenshots</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/faq">FAQ</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/coming-soon">Coming Soon</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/error">404 Error Page</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/app-download">App Download</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/contact">Contact Us</router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <router-link to="/" target="_blank" class="d-block p-0">
                                                        <img src="../../assets/images/navbar.jpg" alt="image">
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="dropdown-toggle nav-link">Features</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/features-one" class="nav-link">Features 1</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/features-two" class="nav-link">Features 2</router-link>
                                    </li>
                                </ul>
                            </li> -->

                            <li class="nav-item">
                                <router-link to="/coming-soon" class="nav-link">Request a demo</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="others-option">
                        <router-link to="/SignIn" class="default-btn">Login</router-link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isSticky: false,
            isMenu: false,
            active: false,
            button_active_state: false,
        }
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>