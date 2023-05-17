<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle pageTitle="Terms Conditions" />
        <PrivacyPolicy />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import PrivacyPolicy from '../components/TermsConditions/TermsConditions';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        DealDoxFooter,
    },
}
</script>