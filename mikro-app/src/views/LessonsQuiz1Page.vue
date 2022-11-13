<template>
    <NavigationBar/>
    <div id="lessonsquiz" style="margin-left: 58px;">
        
        <div id="quiz1" class="container">
            <h1>Quiz 1: How inflation works!</h1>
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
                    { Qn: "What is the cause of your money losing value over time?", 
                    Answers:["Inflation", "Deflation", "Inhalation", "Exhalation"]},
                    { Qn: "What is the average rate of inflation?", 
                    Answers: ["0 - 0.5%", "2 - 2.5%", "5 - 6%", "10 - 15%"]},
                    { Qn: "If you put $1000 under your mattress, how much is it's monetary value in 10 years time?", 
                    Answers: ["$1000", "$1000 * interest", "$1000 / interest", "$0"]},
                    { Qn: "Which statement is a correct example of inflation in action?", 
                    Answers: ["A cup of coffee in 1970 is worth $0.25. Now it is worth $1.59 in 2022.", "A bowl of noodles is $3.50. When I ask for extra noodles, the bowl now costs $4.00."]},
                    { Qn: "Where should I keep my savings to make sure my money doesn't lose its value?", 
                    Answers: ["Savings/Investment account", "Under my mattress"]}
                ]
            }
        }
    }
</script>