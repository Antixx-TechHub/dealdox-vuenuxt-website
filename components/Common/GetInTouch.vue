<template>
    <div class="app-download-area pt-70">
        <div class="container">
            <div class="app-download-inner bg-gray">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner bg-gradient-color">
                            <div class="features-content">
                                <h2>Get in Touch</h2>
                                <p>Have an query or some feedback for us? Write to our team, and will get back ASAP.</p>
                            </div>
                            <div class="software-integrations-list" data-aos="fade-up">
                                <img src="../../assets/images/HomePage/get-in-touch.png" alt="image">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 pt-70">
                        <div class="contact-area pbt-75">
                            <div class="container">
                                <div class="contact-form">
                                    <form id="contactForm">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group ">
                                                    <p>First Name</p>
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
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Job Title</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="Eg: Software Developer">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Company</p>
                                                    <input type="text" name="name" class="form-control" required id="name"
                                                        placeholder="Eg: Lorem Ipsum">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Employees</p>
                                                    <select required name="experience" class="form-select">
                                                        <option>1 – 20</option>
                                                        <option>21 – 200</option>
                                                        <option>201 – 10,000</option>
                                                        <option>10,001 +</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Country Region</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="Eg: India">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Phone Number</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="Eg: 91 9878454345">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">                                                <div class="form-group">
                                                    <p>Business Email</p>
                                                    <input type="email" name="email" required class="form-control"
                                                        id="email" placeholder="hello@sarah.com">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Leave your message</p>
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