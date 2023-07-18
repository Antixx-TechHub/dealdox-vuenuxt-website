<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <router-link class="navbar-brand" to="/#">
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
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Features</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/cpq" class="nav-link">CPQ</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/integration" class="nav-link">Integration</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/quotations" class="nav-link">Automated Quotations
                                            </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/approvals" class="nav-link">Quick
                                            Approvals</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/localizeddealdocuments" class="nav-link">
                                            Localized Deal Documents
                                            </router-link>
                                    </li>
                                </ul>
                            </li>


                            <li class="nav-item"><a href="/subscriptions" class="toggle nav-link">Subscriptions</a>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Company</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">Our Team</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/contactus" class="nav-link">Get In Touch</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="dropdown-toggle nav-link">Resources</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/blogs" class="nav-link">Blogs</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/success-stories" class="nav-link">Success Stories</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/glossary" class="nav-link">Glossary</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/ebook" class="nav-link">Ebook</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/requestdemo" class="nav-link">Request a demo</router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- <div class="others-option">
                        <router-link to="/SignIn" class="default-btn">Login</router-link>
                    </div> -->
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