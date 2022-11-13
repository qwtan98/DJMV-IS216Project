<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz5" class="container">
            <br/>
            <h3>Quiz 5: When should I get started?</h3>
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
                    { Qn: "When is a good time to start investing?", 
                    Answers:["When I am in my late 80s, and have accumulated a large amount of savings.", "As soon as possible."]},
                    { Qn: "Should you have an emergency fund?", 
                    Answers: ["Yes, for a rainy day.", "No, because I have liquid assets."]},
                    { Qn: "Should I invest money that I might need in the next 3-5 years?", 
                    Answers: ["Yes, because my investments will definitely pay off.", "No, because the market is volatile and I should make sensible decisions."]},
                ],
                selected_ans: []
            }
        },
        methods: {
            checkStatus() {
                if(this.selected_ans.includes("As soon as possible.") && this.selected_ans.includes("Yes, for a rainy day.") && this.selected_ans.includes("No, because the market is volatile and I should make sensible decisions."))
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