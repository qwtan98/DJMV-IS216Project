<template>
    <div class="articles" style="margin-left: 78px;">
        <h1>This is the Articles Page.</h1>
      
        <select name="stock_region" v-model="selected_stock_region" @change="created">
                <option disabled value="">Please select one</option>
                <option v-for="region of regions" :value="region.value" :key="region.id">
                {{ region.key }}
            </option>
        </select>
        <div id="content">
            <div v-for="article of articles" :key="article.id">
                <img :src="article.image_url" style="width: 100px; height: 50px;" >
                {{ article.id || article.title }}
                Date {{ article.published_at}}
            </div>
        </div>
    </div>
    
  </template>

  
<script>
    /* import axios */
    import axios from 'axios'
    export default 
    {
        name: 'ArticlesPage',
        data()
        {
            return {
                articles: [],
                regions: [{key: 'Australia (au)', value: 'au'}, 
                        {key: 'Canada (ca)', value: 'ca'},
                        {key: 'China (cn)', value: 'cn'},
                        {key: 'Denmark (dk)', value: 'dk'},
                        {key: 'Finland (fi)', value: 'fi'},
                        {key: 'France (fr)', value: 'fr'},
                        {key:  'India (in)', value: 'in'},
                        {key:  'United States (us)', value: 'us'},
                        ],
                selected_stock_region: ''
            }
        },

        props: 
        {
    
        },

        methods:
        {
            created: function() {
                console.log("--- Loading News ---")
                console.log(this.selected_stock_region)
                // let api_endpoint = 'https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&api_token=HsxIoJ9mPcGwUbyCJGCfNgiyLyi92MEDXpaH10zN'
                let api_endpoint = `https://api.marketaux.com/v1/news/all?countries=${this.selected_stock_region}&filter_entities=true&limit=100&api_token=HsxIoJ9mPcGwUbyCJGCfNgiyLyi92MEDXpaH10zN`
                axios.get(api_endpoint)
                .then(response => {
                    console.log(response.data.data)
                    this.articles = response.data.data      
                })
                
                .catch(error => {
                    console.log(error)
                })
            }
        },

        beforeMount(){
            this.created()
        }
    }
</script>