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
                                    <input type="checkbox"/>{{que}}<br>
                                </span>
                            </div>
                        </div>
                    </div>    
                </div>
            </span>
            <div>
                <router-link to="Lessons" class="btn btn-primary" value="" style="margin-bottom: 10px">Submit Quiz</router-link>
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
                ]
            }
        }
    }
</script>