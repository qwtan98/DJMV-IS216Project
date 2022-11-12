<template>
    <NavigationBar/>
    <div class="container" id="lesson" style="margin-left: 58px;">
        <br/>
        <h1 class="">Academy</h1>
        <span v-for="(lesson, index) in lessons" :key="lesson.id">
            <div class="row" style="margin-bottom: 10px;">
                <div class="col-12">
                    <div class="card" style="width: 100%;">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                        <h5 class="card-title">Lesson {{ index + 1}}: {{ lesson.Title }}</h5>
                        <p class="card-text">{{ lesson.Subtitle }}</p>
                        <a href="LessonsQuiz" class="btn btn-primary">Go to LessonsQuiz</a>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </div>
  </template>
  
<script>
   
    import NavigationBar from "../components/NavigationBar";
    export default 
    {
    name: "LessonsPage",
    components: { NavigationBar },
    props: {},
    data() {
        return {
            lessons: [{ Title: "The Basics of Investment", Subtitle: "Understand concepts of investment" }, { Title: "Dive into Investment", Subtitle: "" }
            ]
        };
    },
    
}
</script>