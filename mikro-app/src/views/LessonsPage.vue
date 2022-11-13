<template>
    <NavigationBar/>
    <div id="lesson" style="margin-left: 58px;">
        <br/>
        <div class="container">
        <h1 class="">Academy</h1>
        <span v-for="(lesson, index) in lessons" :key="lesson.id">
            <div class="row">
                <div class="col-12">
                    <div class="card" style="width: 100%; margin-bottom: 10px;">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                        <h5 class="card-title">Lesson {{ index + 1}}: {{ lesson.Title }}</h5>
                        <p class="card-text" style="font-style:italic">{{ lesson.Subtitle }}</p>
                        <router-link :to="'LessonsQuiz' + (index+1)" class="btn btn-primary" :value="index + 1">Go to Quiz {{index + 1}}</router-link>
                        <!-- <LessonsQuizPage></LessonsQuizPage> -->
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </div>
    </div>
  </template>
  
<script>
   
    import NavigationBar from "../components/NavigationBar";
    // import LessonsQuizPage from "./LessonsQuizPage";
    export default 
    {
    name: "LessonsPage",
    components: { NavigationBar,  },
    props: {},
    data() {
        return {
            lessons: [
                { Title: "What happens to my money over time?", Subtitle: "How inflation works" }, 
                { Title: "Stop money from losing value over time!", Subtitle: "How to curb inflation" },
                { Title: "How do I make money?", Subtitle: "Why just a savings account is insufficient" },
                { Title: "What is an investment?", Subtitle: "" },
                { Title: "When should I get started?", Subtitle: "" },
            ],
        };
    },
    
}
</script>