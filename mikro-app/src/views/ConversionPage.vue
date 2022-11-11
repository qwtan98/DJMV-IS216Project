<template>
    <NavigationBar/>
    <div id="progress" style="margin-left: 63px;">
        <h1>This is the Conversion Page.</h1>
        {{ rates }}
    </div>
  </template>
  
<script>
import axios from 'axios';
import NavigationBar from '../components/NavigationBar.vue';

    export default 
    {
    name: "ConversionPage",
    components: { NavigationBar },
    
    data() {
        return {
            rates: []
        }
    },  

    props: {},
    
    methods: 
    {
        created: function(){
            let api_endpoint = "https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=10eafb90-11a2-4fbd-b7a7-ac15a42d60b6&limit=10&filters[end_of_month]=2022-10,2022-11"
            axios.get(api_endpoint).then(response => {
                console.log(response.data)
                this.rates = response.data
            })

            .catch(error => {
                    console.log(error)
            })
        }
    },

    beforeMount() {
        this.created()
    }
}
</script>