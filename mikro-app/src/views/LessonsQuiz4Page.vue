<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz1" class="container">
            <h1>Quiz 4: What is an investment?</h1>
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

                            <div class="modal-body" v-if='selected_ans.includes("Yes, because house prices double every 10 years.") && selected_ans.includes("When an asset increases in value over time.")  && selected_ans.includes("Yes, it is known as investing in shares.")'>
                                You've got it all correct! Good job!<br><small>You can now return to the Lessons page.</small>
                            </div>

                            <div class="modal-body" v-else>Oh no! You've got a question or two wrong. Go back and try again!</div>

                            <div class="modal-footer">
                                <router-link to="Lessons" class="btn btn-secondary" value="" style="margin-bottom: 10px" v-if='selected_ans.includes("Yes, because house prices double every 10 years.") && selected_ans.includes("When an asset increases in value over time.")  && selected_ans.includes("Yes, it is known as investing in shares.")'>Return to Lessons</router-link>
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
                    { Qn: "Is buying a house considered an investment (in most countries)?", 
                    Answers:["Yes, because house prices double every 10 years.", "No, because you have just spent $100,000 on a house and will not get the money back."]},
                    { Qn: "What is 'Capital Gains'?", 
                    Answers: ["When an asset increases in value over time.", "When a country's capital city grows to a larger population."]},
                    { Qn: "Is there a way to invest without a large capital sum, and without putting in a lot of effort?", 
                    Answers: ["Yes, it is known as investing in shares.", "No, there is no thing."]},
                ],
                selected_ans: []
            }
        }
    }
</script>