<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz3" class="container">
            <br/>
            <h3>Quiz 3: Why just a savings account is insufficient</h3>
            <span v-for="(value, index) in questions" :key="value.id">
                <div class="row" style="margin-bottom: 10px;">
                    <div class="col-12">
                        <div class="card" style="width: 100%;">
                            <div class="card-body">
                                <p class="card-text">Q{{index+1}}: {{value.Qn}}</p>
                                <span v-for="que in value.Answers" :key="que.id">
                                    <input type="checkbox" v-model="selected_ans" :value="que"/>&nbsp;{{que}}<br>
                                </span>
                            </div>
                        </div>
                    </div>    
                </div>
            </span>
            <div>
                <div class="btn btn-primary" href="#supportModal" data-bs-toggle="modal" style="margin-bottom: 10px" @click="checkStatus()">Submit Quiz</div>
                <span v-if= 'status == true' style="color: green" class="mb-2">
                    <br/>{{ message }}
                    <button class="btn btn-primary">
                        <router-link to="lessons" style="color: white; text-decoration: none">Back to Lessons</router-link>
                    </button>
                </span> 
                <span v-else style="color: red" class="mb-2">
                  <br/>{{ message }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
    export default 
    {
        name: 'LessonsQuizPage',
        components: { NavigationBar },
        props: {},
        data() {
            return {
                message: "",
                status: false,
                questions: [
                    { Qn: "Why do 10% interest rate savings accounts not exist?", 
                    Answers:["The interest rate is too low", "The interest rate is too high"]},
                    { Qn: "In 10 years time, how much would $100 in a 10% interest rate savings account grow to?", 
                    Answers: ["$239", "$249", "$259", "$269"]},
                    { Qn: "In comparison, how much would $100 (adjusted for inflation) be worth in 10 years time, without this savings account?", 
                    Answers: ["$196", "$206", "$216", "$226"]},
                    { Qn: "What type of interest have we been referring to?", 
                    Answers: ["Compound interest", "Simple interest"]},
                ],
                selected_ans: []
            }
        },
        methods: {
            checkStatus() {
                if(this.selected_ans.includes("The interest rate is too high") && this.selected_ans.includes("$259") && this.selected_ans.includes("$206")  && this.selected_ans.includes("Compound interest"))
                {
                    this.status = true
                    this.message = "You've got it all correct! Good job!\nYou can now return to the Lessons page."
                }
                else 
                {
                    this.message = "Oh no! You've got a question or two wrong. Go back and try again!"
                    this.status = false
                }
             }
        }
    }
</script>