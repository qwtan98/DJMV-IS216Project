<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz3" class="container">
            <h1>Quiz 3: Why just a savings account is insufficient</h1>
            <span v-for="(value, index) in questions" :key="value.id">
                <div class="row" style="margin-bottom: 10px;">
                    <div class="col-12">
                        <div class="card" style="width: 100%;">
                            <div class="card-body">
                                <p class="card-text">Q{{index+1}}: {{value.Qn}}</p>
                                <span v-for="que in value.Answers" :key="que.id">
                                    <input type="checkbox" v-model="selected_ans" :value="que"/>{{que}}<br>
                                </span>
                            </div>
                        </div>
                    </div>    
                </div>
            </span>
            <div>
                <div class="btn btn-primary" href="#supportModal" data-bs-toggle="modal" style="margin-bottom: 10px">Submit Quiz</div>

                <div class="modal fade" id="supportModal" tabindex="-1" aria-labelledby="supportModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="supportModalLabel">Support</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" v-if='selected_ans.includes("The interest rate is too high") && selected_ans.includes("$259")  && selected_ans.includes("$206") && selected_ans.includes("Compound interest")'>
                                You've got it all correct! Good job!<br><small>You can now return to the Lessons page.</small>
                            </div>

                            <div class="modal-body" v-else>Oh no! You've got incorrect answers. Go back and try again!</div>

                            <div class="modal-footer">
                                <router-link to="Lessons" class="btn btn-secondary" value="" style="margin-bottom: 10px" data-bs-dismiss="modal" v-if='selected_ans.includes("The interest rate is too high") && selected_ans.includes("$259")  && selected_ans.includes("$206") && selected_ans.includes("Compound interest")'>Return to Lessons</router-link>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-else>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
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
        }
    }
</script>