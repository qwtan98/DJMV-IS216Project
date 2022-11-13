<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz2" class="container">
            <br/>
            <h3>Quiz 2: How to curb inflation</h3>
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
                    { Qn: "With a savings account with interest of 2.5% per annum, and if inflation is at 2.5%, will my savings lose its value?", 
                    Answers:["Yes, it will lose its value", "No, it will not lose its value"]},
                    { Qn: "Is investment the same as interest?", 
                    Answers: ["Yes, it is the same", "No, it is not the same"]},
                    { Qn: "Is having a savings account enough?", 
                    Answers: ["Yes!", "No!"]},
                ],
                selected_ans: []
            }
        },
        methods: {
            checkStatus() {
                if(this.selected_ans.includes("No, it will not lose its value") && this.selected_ans.includes("No, it is not the same") && this.selected_ans.includes("No!"))
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