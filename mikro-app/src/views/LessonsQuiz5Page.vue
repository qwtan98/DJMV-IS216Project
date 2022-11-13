<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz5" class="container">
            <h1>Quiz 5: When should I get started?</h1>
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

                            <div class="modal-body" v-if='selected_ans.includes("As soon as possible.") && selected_ans.includes("Yes, for a rainy day.")  && selected_ans.includes("No, because the market is volatile and I should make sensible decisions.")'>
                                You've got it all correct! Good job!<br><small>You can now return to the Lessons page.</small>
                            </div>

                            <div class="modal-body" v-else>Oh no! You've got incorrect answers. Go back and try again!</div>

                            <div class="modal-footer">
                                <router-link to="Lessons" class="btn btn-secondary" value="" style="margin-bottom: 10px" data-bs-dismiss="modal" v-if='selected_ans.includes("As soon as possible.") && selected_ans.includes("Yes, for a rainy day.")  && selected_ans.includes("No, because the market is volatile and I should make sensible decisions.")'>Return to Lessons</router-link>
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
                    { Qn: "When is a good time to start investing?", 
                    Answers:["When I am in my late 80s, and have accumulated a large amount of savings.", "As soon as possible."]},
                    { Qn: "Should you have an emergency fund?", 
                    Answers: ["Yes, for a rainy day.", "No, because I have liquid assets."]},
                    { Qn: "Should I invest money that I might need in the next 3-5 years?", 
                    Answers: ["Yes, because my investments will definitely pay off.", "No, because the market is volatile and I should make sensible decisions."]},
                ],
                selected_ans: []
            }
        }
    }
</script>