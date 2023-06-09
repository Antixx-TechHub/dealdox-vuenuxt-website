<template>
    <div>
      <h1>Blog Categories</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">
            <nuxt-link :to="`/categories-details/${category.slug}`">{{ category.attributes.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        categories: []
      };
    },
    created() {
      axios
        .get('http://localhost:1337/api/categories') // Update the endpoint URL if needed
        .then(response => {
          this.categories = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
