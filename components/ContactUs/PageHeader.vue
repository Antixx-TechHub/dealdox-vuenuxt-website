<template>
    <div class="contact-page-header-form-app-download-area pb-80 bg-F7F7FF">
        <div class="container">
            <div class="contact-page-header-form-app-download-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner bg-gradient-color">
                            <div class="features-content-improve-sales">
                                <h2>Generate your quotes in <span class="sub-title">2 seconds.</span></h2>
                                <p>Dealdox speeds up contract consent with AI-powered quotes. Streamline sales, automate</p>
                            </div>
                            <div class="contact-limited-offer">
                                <div class="signup-button">
                                    <div class="btn-box">
                                        <router-link to="/SignUp" class="default-btn">Sign Up</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-area pbt-75">
                            <div class="container">
                                <div class="contact-form">
                                    <form id="contactForm">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Your good name!</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="Eg: Sarah">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Last Name</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="Eg: Taylor">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Your email</p>
                                                    <input type="email" name="email" required class="form-control"
                                                        id="email" placeholder="hello@sarah.com">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Mobile</p>
                                                    <input type="text" name="phone_number" required class="form-control"
                                                        id="phone_number" placeholder="Enter your phone number">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Company</p>
                                                    <input type="text" name="name" class="form-control" required id="name"
                                                        placeholder="Eg: Lorem Ipsum">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Website</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="Eg: www.yourdomain.com">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Please write your message</p>
                                                    <textarea name="message" id="message" required class="form-control"
                                                        cols="30" rows="6"
                                                        placeholder="This just a dummy message! please dont mind"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <button type="submit" required class="default-btn"><i
                                                        class='bx bx-paper-plane'></i>
                                                    Submit</button>
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
    </div>
</template>

<script>
export default {
    name: 'AppDownload'
}
</script>