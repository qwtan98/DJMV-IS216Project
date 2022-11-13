<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz2" class="container">
            <h1>Quiz 2: How to curb inflation</h1>
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

                            <div class="modal-body" v-if='selected_ans.includes("No, it will not lose its value") && selected_ans.includes("No, it is not the same") && selected_ans.includes("No!")'>
                                You've got it all correct! Good job!<br><small>You can now return to the Lessons page.</small>
                            </div>

                            <div class="modal-body" v-else>Oh no! You've got a question or two wrong. Go back and try again!</div>

                            <div class="modal-footer">

                                <router-link to="Lessons" class="btn btn-secondary" value="" style="margin-bottom: 10px" data-bs-dismiss="modal" v-if='selected_ans.includes("No, it will not lose its value") && selected_ans.includes("No, it is not the same") && selected_ans.includes("No!")'>Return to Lessons</router-link>
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
                    { Qn: "With a savings account with interest of 2.5% per annum, and if inflation is at 2.5%, will my savings lose its value?", 
                    Answers:["Yes, it will lose its value", "No, it will not lose its value"]},
                    { Qn: "Is investment the same as interest?", 
                    Answers: ["Yes, it is the same", "No, it is not the same"]},
                    { Qn: "Is having a savings account enough?", 
                    Answers: ["Yes!", "No!"]},
                ],
                selected_ans: []
            }
        }
    }
</script>