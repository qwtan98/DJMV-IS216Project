<template>
    <div class="container" style="margin-left: 78px;">
        <h1>Today's Stock News Articles</h1>
      
        <select name="stock_region" v-model="selected_topic" @change="created">
                <option disabled value="">Please select one topic</option>
                <option v-for="topic of topics" :value="topic.value" :key="topic.id">
                {{ topic.key }}
            </option>
        </select>
        Sort: 
        <button class="rounded-pill"  @click="changeStatus($event)" value="EARLIEST">
            Oldest
        </button>
        <button class="rounded-pill" @click="changeStatus($event)" value="LATEST">
            Latest
        </button>
        <div id="content" class="mt-3">
            <div v-for="article of articles" :key="article.id">
                <div class="card mb-4">
                    <h3 class=""> {{ article.time_published.substring(5,7) + "/" + article.time_published.substring(7,8) + "/" + article.time_published.substring(0,4) + "," + article.time_published.substring(10,13)}}</h3>
                    <img :src="article.banner_image" style="width: 25%;" >
                    <div class="card-body">
                        <h5 class="card-title">{{ article.title }}</h5>
                        <p class="card-text">{{ article.summary }}</p>
                        <a :href="article.url" target="__blank" class="btn btn-primary">Read More 🔍</a>
                    </div>
                    <br/>
                </div>
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
                topics: [{key: 'Technology', value: 'technology'}, 
                        {key: 'Financial Markets', value: 'financial_markets'},
                        {key: 'Energy & Transportation', value: 'energy_transportation'},
                        {key: 'Finance', value: 'finance'},
                        {key: 'Life Sciences', value: 'life_sciences'},
                        {key: 'Manufacturing', value: 'manufacturing'},
                        {key:  'Real Estate', value: 'real_estate'},
                        {key:  'Retail & Wholesale', value: 'retail_wholesale'},
                        ],
                selected_topic: '',
                selected_status: ''
            }
        },

        props: 
        {
    
        },

        methods:
        {
            // 117L1A3KOH0DR96N. ALPHA VANTAGE API KEY
            created: function() {
                console.log("--- Loading News ---")
                console.log(this.selected_topic)
      
                let api_endpoint = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${this.selected_topic}&limit=20&sort=${this.selected_status}&apikey=117L1A3KOH0DR96N`
                // Marketaux api key
                // let api_endpoint = `https://api.marketaux.com/v1/news/all?countries=${this.selected_stock_region}&filter_entities=true&limit=20&sort=${sort_status}api_token=HsxIoJ9mPcGwUbyCJGCfNgiyLyi92MEDXpaH10zN`
                axios.get(api_endpoint)
                .then(response => {
                    console.log(response.data.feed)
        
                    this.articles = response.data.feed   
                })
                
                .catch(error => {
                    console.log(error)
                })
            },

            // Sort By Earliest or Latest Article Date
            changeStatus: function(e) {
                console.log("--- Change Display Status ---", e.target.value)
                this.selected_status = e.target.value
                this.created()
            }
        },

        beforeMount(){
            this.created()
        }
    }
</script>