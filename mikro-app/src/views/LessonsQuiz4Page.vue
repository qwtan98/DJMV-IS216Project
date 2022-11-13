<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz4" class="container">
            <br/>
            <h3>Quiz 4: What is an investment?</h3>
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
                    { Qn: "Is buying a house considered an investment (in most countries)?", 
                    Answers:["Yes, because house prices double every 10 years.", "No, because you have just spent $100,000 on a house and will not get the money back."]},
                    { Qn: "What is 'Capital Gains'?", 
                    Answers: ["When an asset increases in value over time.", "When a country's capital city grows to a larger population."]},
                    { Qn: "Is there a way to invest without a large capital sum, and without putting in a lot of effort?", 
                    Answers: ["Yes, it is known as investing in shares.", "No, there is no thing."]},
                ],
                selected_ans: []
            }
        },
        methods: {
            checkStatus() {
                if(this.selected_ans.includes("Yes, because house prices double every 10 years.") && this.selected_ans.includes("When an asset increases in value over time.")  && this.selected_ans.includes("Yes, it is known as investing in shares."))
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