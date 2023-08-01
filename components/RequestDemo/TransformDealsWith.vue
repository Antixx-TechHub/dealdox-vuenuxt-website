<template>
    <div class="features-area pt-60 bg-FAFAFA">
        <div class="container">
            <div class="software-integrations-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="features-content">
                            <ul class="features-list">
                                <h2>Transform Deals with <br><span class="sub-title">DealDox</span> in Action!</h2>
                                <p>A centralized platform for automated quote generation, Accurate Pricing, Product Bundling
                                    and Upselling, Margin Optimization, Cost Visibility, Efficient Pricing Strategy,
                                    Customize Deal Documents in your desired language, and more! </p>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p class="with-top-border">Easy to Use</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p class="with-top-border">Totally Unified</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p>Close Deals Faster</p>
                                </li>
                            </ul>
                            <div class="btn-box">
                                <router-link to="/integration" class="default-btn">Know more</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 ptb-100">
                        <div class="contact-area">
                            <div class="container">
                                <div class="contact-form">
                                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                        method="POST">
                                        <input name="oid" type="hidden" value="00D2v000003PByK" />
                                        <input name="retURL" type="hidden"
                                            value="https://dealdox.pbwebvision.com/thank-you" />
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
    </div>
</template>

<script>
export default {
    name: 'EasyIntegration',
}
</script>