<template>


</template>

<script>
import axios from 'axios'

export default {
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            categories: []
        }
    },
    created() {
        console.log("########### details....", this.details);
        //   axios
        //     .get('http://localhost:1337/api/categories') // Update the endpoint URL if needed
        //     .then(response => {
        //       this.categories = response.data.data;
        //       console.log("categories....",this.categories)
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
    }
}
</script>