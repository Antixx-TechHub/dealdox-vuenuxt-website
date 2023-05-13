<template>
    <div class="blog-area bg-FAFAFA">
        <div class="container ptb-100">
            <div class="section-title">
                <span class="sub-title"></span>
                <h2>In the news</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/About-US/Blog1.png" alt="blog">
                            </router-link>
                            <router-link to="/blog-grid" class="tag">Branding</router-link>
                        </div>
                        <div class="content">
                            
                            <h3><router-link to="/blog-details">AI Innovation in Quote </router-link></h3>
                            <p>“Our team includes experienced developers and architects who are experts in building cutting-edge”</p>
                            <ul class="meta">
                                <br>
                                <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(0) Comment</router-link></li>
                                <li><i class="ri-time-line"></i> April 14, 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/About-US/Blog2.png" alt="blog">
                            </router-link>
                            <router-link to="/blog-grid" class="tag">Agency</router-link>
                        </div>
                        <div class="content">
                            
                            <h3><router-link to="/blog-details">AI Innovation in Quote </router-link></h3>
                            <p>“Our team includes experienced developers and architects who are experts in building cutting-edge”</p>
                            <br>
                            <ul class="meta">
                                <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(4) Comment</router-link></li>
                                <li><i class="ri-time-line"></i> April 13, 2021</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/About-US/Blog3.png" alt="blog">
                            </router-link>
                            <router-link to="/blog-grid" class="tag">Marketing</router-link>
                        </div>
                        <div class="content">
                            
                            <h3><router-link to="/blog-details">AI Innovation in Quote </router-link></h3>
                            <p>“Our team includes experienced developers and architects who are experts in building cutting-edge”</p>
                            <br>
                            <ul class="meta">
                                <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(2) Comment</router-link></li>
                                <li><i class="ri-time-line"></i> April 12, 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>