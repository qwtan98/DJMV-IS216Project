<template>
    <NavigationBar/>
    <div id="lesson" style="margin-left: 58px;">
        <br/>
        <div class="container">
        <h1 class="">Academy</h1>
        <span v-for="(lesson, index) in lessons" :key="lesson.id">
            <div class="row" style="margin-bottom: 10px;">
                <div class="col-12">
                    <div class="card" style="width: 100%;">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <iframe width="100%" height="100%" style="aspect-ratio: 16 / 9;" :src="`https://www.youtube.com/embed/gFQNPmLKj1k?start=${lesson.Start}&end=${lesson.End}`" title="How to Invest for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <h5 class="card-title">Lesson {{ index + 1}}: {{ lesson.Title }}</h5>
                            <p class="card-text" style="font-style:italic">{{ lesson.Subtitle }}</p>
                        
                            <router-link :to="'LessonsQuiz' + (index+1)" class="btn btn-primary" :value="index + 1">Go to Quiz {{index + 1}}</router-link>

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
                { Title: "What happens to my money over time?", Subtitle: "How inflation works", Start: 56, End: 116}, 
                { Title: "Stop money from losing value over time!", Subtitle: "How to curb inflation", Start: 119, End: 154 },
                { Title: "How do I make money?", Subtitle: "Why just a savings account is insufficient", Start: 156, End: 232 },
                { Title: "What is an investment?", Subtitle: "", Start: 233, End: 333 },
                { Title: "When should I get started?", Subtitle: "", Start: 1255, End: 1418 },
            ],
        };
    },
    
}
</script>