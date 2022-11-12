<template>
    <NavigationBar/>
    <div id="conversion" style="margin-left: 63px; background-color: aliceblue; height: 100vh;">
        <h1>Real time currency conversion rates</h1>
        <div class="form-group">
            <br/>
            <label for="input_amt">
                Amount to Convert : 
            </label>
            <input type="number" 
                   class="form-control searchBox" 
                   placeholder="0.00" 
                   v-model="input_amt">

            <span v-for="[key, value] of Object.entries(rates_array)" :key="key.id" class="">
                <span v-if= "key == input_amt">
                    {{ value }} hi
                </span>
                {{ key }} - {{ value }}<br/>
            </span>
        </div>

        <div class="row">
            
            <div class="col-sm-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">From</span>
                    </div>
                    <select class="form-control to" v-model="from_currency">
                        <option value="">Select One …</option>
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
                </div>
            </div>

            <div class="col-sm-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">To</span>
                    </div>
                    <select class="form-control to" id="sel2" v-model="to_currency">
                        <option value="">Select One …</option>
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
                </div>
            </div>
        </div>
        <div class="text-center">
            
            <!-- convert button -->
            <button class="btn btn-primary convert m-2" 
                    type="submit"
                    @click="convert()">
                 Convert
          </button>
        </div>

        <div class="" id="converted_output">
            You get {{ output }}
        </div>

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
            rates_array: "",
            to_currency: "",
            from_currency: "",
            output: 0,
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
            console.log(this.to_currency)
            console.log(this.from_currency)
            console.log(this.input_amt)
            this.doConversion()
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
        }

    }
}
</script>