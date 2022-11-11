<template>
    <div id="landing" class="container py-4 py-xl-5">
        <div class="dropdown">
            <button id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-secondary dropdown-toggle" type="button" style="font-size: 30px; float: right;"><i class="bx bx-globe"></i></button>
            
            <div class="dropdown-menu" style="width: 50%" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">English (en) <img width="" height="25px" src="../assets/ui/english_flag.webp" style="float: right"></a>
                <a class="dropdown-item" href="#">Bahasa Melayu <img width="" height="25px" src="../assets/ui/bahasa_flag.svg" style="float: right"></a>
                <a class="dropdown-item" href="#">Bengali (বাংলা) <img width="" height="25px" src="../assets/ui/bengali_flag.webp" style="float: right"></a>
                <a class="dropdown-item" href="#">Chinese (中文)  <img width="" height="25px" src="../assets/ui/china_flag.webp" style="float: right"></a>
                <a class="dropdown-item" href="#">Tagalog <img width="" height="25px" src="../assets/ui/philliphines_flag.png" style="float: right"></a>
                <a class="dropdown-item" href="#">Tamil <img width="20%" height="25px" src="../assets/ui/india_flag.svg" style="float: right"></a>
            </div>
        </div>
       
        <div class="border rounded border-0 d-flex flex-column justify-content-center align-items-center p-4 py-5" style="width: auto; height: 100vh; background: linear-gradient(rgba(0,123,255,0.2), rgba(0,123,255,0.2)), url('https://saltandlight.sg/wp-content/uploads/2020/04/shubham-verma-Tlyteh1470o-unsplash.jpg') center / cover;">
            <div class="row">
                <div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                    <div>
                        <img src="../assets/ui/mikro_logo_trim.png" style="">
                        <h1 class="text-uppercase fw-bold mb-5"><br />Migrating to a better future</h1>
                        <!-- <p class="mb-4">Etiam a rutrum, mauris lectus aptent convallis. Fusce vulputate aliquam, sagittis odio metus. Nulla porttitor vivamus viverra laoreet, aliquam netus.</p> -->
                        <router-link to="/register">
                            <button class="btn btn-primary fs-5 me-2 py-2 px-4" type="button">Get Started</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>

<style>

</style>

<script>
    export default 
    {
        name: 'LandingPage',

        components: {
           
        },

        // props:  [
        //         {
        //             code: 'en|af',
        //             title: 'Afrikaans',
        //         },
        //         {
        //             code: 'en|ar',
        //             title: 'Arabic',
        //         },
        //         {
        //             code: 'en|ko',
        //             title: 'Korean',
        //         },
        //         {
        //             code: 'en|lt',
        //             title: 'Lithuanian',
        //         }]
        // ,

        methods: (
            {
                // loadGoogleTranslate() {
                //     axios.get("http://translate.google_element.com/translate_a/element.js?cb=loadGoogleTranslate").then(response => {
                //         console.log(response.data)
                //     })
                //     new google.translate.TranslateElement("google_element")
                // }
            }
        )
    }
</script>