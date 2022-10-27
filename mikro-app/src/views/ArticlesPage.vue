<template>
    <div class="articles" style="margin-left: 78px;">
        <h1>This is the Articles Page.</h1>
        <button @click="created" style="width:100px; height:50px">See news</button>
        <div id="content">
            <div v-for="article of articles" :key="article.id">
                {{ article.id || article.title }}
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
                articles: []

            }
        },

        props: 
        {
    
        },

        methods:
        {
            created: function() {
                console.log("--- Loading News ---")

                let api_endpoint = 'https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=HsxIoJ9mPcGwUbyCJGCfNgiyLyi92MEDXpaH10zN'

                axios.get(api_endpoint)
                .then(response => {
                    console.log(response.data.data)
                    this.articles = response.data.data      
                })
                
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>