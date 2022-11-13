<template>
    <NavigationBar/>
    <div id="conversion" class="h-100" style="margin-left: 55px;">
        <br/>
        <div class="container">
            <h4 style="width:" class="m-0"></h4>
            <div class="form-group w-100 card p-2" style="box-shadow: 0 2px 18px 1px rgb(49 53 72 / 10%); ">
                <div class="card-header mt-3">
                    <h4 class="text-bold-500 info text-center" id="words">
                        <i class="pt-2 bx bx-calculator"></i>&nbsp;Currency conversion calculator
                    </h4>
                </div>
                <div class="card-subtitle p-0 mt-3 mx-2">	                   
                    <h5 class="" style="font-weight: 400; font-size: 15px; text-align:center">View current rates now.</h5>
                </div>
                <br/>
                <div class="input-group-prepend">
                    <span class="input-group-text" style="border-radius: 0; padding: 5; text-align:center">Amount to be converted</span>
                </div>
                <input type="number" 
                    class="form-control searchBox" 
                    placeholder="0" 
                    style="border-radius:0; text-align:center"
                    v-model="input_amt">
                <br/>
            

            <div class="row">
                    <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                            <span style="border-radius:0;" class="input-group-text">From</span>
                        </div>
                        <select class="form-control to" v-model="from_currency" aria-describedby="describeTo">
                            <option value="">Select base currency</option>
                            <option value="USD">USD</option>
                            <option value="AED">AED</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="GTQ">GTQ</option>
                            <option value="HKD">HKD</option>
                            <option value="HRK">HRK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="KZT">KZT</option>
                            <option value="MVR">MVR</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK"></option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="RON">RON</option>
                            <option value="RUB">RUB</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="UYU">UYU</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                        <small id="describeTo" class="form-text text-muted" style="text-align:center; margin-left: 18px; font-size: 12px;">Choose a currency you want to convert from</small>
                    </div>
            
                </div>
                <i class="bx bx-down-arrow text-center" style="margin-left: 10px;"></i>

                <div class="row mt-3">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="border-radius:0;">To</span>
                        </div>
                        <select class="form-control to" id="sel2" v-model="to_currency">
                            <option value="">Select convert currency</option>
                            <option value="USD">USD</option>
                            <option value="AED">AED</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="GTQ">GTQ</option>
                            <option value="HKD">HKD</option>
                            <option value="HRK">HRK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="KZT">KZT</option>
                            <option value="MVR">MVR</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK">NOK</option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="RON">RON</option>
                            <option value="RUB">RUB</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="UYU">UYU</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                        <small id="describeTo" class="form-text text-muted" style="margin-left: 20px; font-size: 12px;">Choose a currency you want to convert to</small>
                    </div> 
            </div>
                
    
            <div class="text-center"> 
                <!-- convert button -->
                <button class="btn btn-primary convert m-2" 
                        type="submit"
                        style="animation: pulse 5s ease-out infinite"
                        @click="convert()">
                    Convert 💱
            </button>
            </div>


            <div class="" id="converted_output">
                <span v-for="[key, value] of Object.entries(rates_array)" :key="key.id" class="">
                    <span v-if= "key == to_currency">
                        1 {{ from_currency }} -> {{ value }} {{ to_currency}}
                        <span v-if="!isNaN(input_amt)">
                            <br/>You get 💸{{ (value * input_amt).toFixed(2) }} {{ to_currency }}
                        </span>
                        <span v-else>
                            <br/><p class="btn btn-danger">Please input an amount to be converted</p>
                        </span>
                    </span>
                </span>
            </div>
        </div>
        </div>
    </div>

    
    
  </template>
  <style>
    body {
        background-color: aliceblue;
        height: 100%;
    }

    .searchBox {
        
    }

    .form-group {
      background-color: rgb(246, 250, 255);
    }
    
    .form-control {

    }
    
    .input-group-text {
        background-color: rgb(221, 221, 238)
    }



  </style>
<script>
import axios from 'axios';
import NavigationBar from '../components/NavigationBar.vue';

    export default 
    {
    name: "ConversionPage",
    components: { NavigationBar },
    
    data() {
        return {
            rates_array: "",
            to_currency: "",
            from_currency: "",
            output: 0,
            words: ["Real-time rates updates", "From over 20+ countries"]
            // input_amt: 0
        }
    },  

    props: {},
    
    methods: 
    {
        created: function(){
            var api_endpoint = `https://v6.exchangerate-api.com/v6/57e39002971ecd6690cfd1cc/latest/` + this.from_currency;
        //     var request = new XMLHttpRequest();
        //     request.open('GET', api_endpoint);
        //     request.responseType = 'json';
        //     request.send();

        //     request.onload = function() {
        //     var response = request.response;
        //     console.log(response.conversion_rates)
        //     this.rates_array = response.conversion_rates
        // }
            // let api_endpoint = "https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=10eafb90-11a2-4fbd-b7a7-ac15a42d60b6&limit=10&sort=end_of_month%20desc"
            axios.get(api_endpoint).then(response => {
                console.log(response.data.conversion_rates)
                this.rates_array = response.data.conversion_rates
            })

            .catch(error => {
                    console.log(error)
            })
        },

        convert() {
            this.created()
            console.log(this.rates_array)
            console.log(this.to_currency)
            console.log(this.from_currency)
            console.log(this.input_amt)
            
        },

        doConversion() {
            for ([this.key, this.value] in Object.entries(this.rates_array))
            {
                console.log(this.key)
                console.log(this.value)
                if (this.key == this.to_currency)
                {
                    this.output = this.value * this.input_amt
                }
            }
            console.log(this.output)
        },

    }
}
</script>