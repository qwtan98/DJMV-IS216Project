<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz2" class="container">
            <h1>Quiz 2: How to curb inflation!</h1>
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
                    { Qn: "With a savings account with interest of 2.5% per annum, and if inflation is at 2.5%, will my savings lose its value?", 
                    Answers:["Yes", "No"]},
                    { Qn: "Is investment the same as interest?", 
                    Answers: ["Yes", "No"]},
                    { Qn: "Is having a savings account enough?", 
                    Answers: ["Yes", "No"]},
                ]
            }
        }
    }
</script>