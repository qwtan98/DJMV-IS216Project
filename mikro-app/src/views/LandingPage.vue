<template>
    <div id="landing" class="container py-4 py-xl-5" style="width: 100%">
        <div class="border rounded border-0 d-flex flex-column justify-content-center align-items-center p-4 py-5" style="width: 100%; height: 100vh; background: linear-gradient(rgba(0,123,255,0.2), rgba(0,123,255,0.2)), url('https://saltandlight.sg/wp-content/uploads/2020/04/shubham-verma-Tlyteh1470o-unsplash.jpg') center; background-size: cover">
            <div class="row">
                <div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                    <div>
                        <img src="../assets/ui/mikro_logo_trim.png" style="width: 300px;">
                        <h1 class="text-uppercase fw-bold mb-5"><br />Migrating to a better future</h1>
                        <!-- <p class="mb-4">Etiam a rutrum, mauris lectus aptent convallis. Fusce vulputate aliquam, sagittis odio metus. Nulla porttitor vivamus viverra laoreet, aliquam netus.</p> -->
                        <h6 class="text-uppercase mb-5"><br />Make smarter choices for your money with this one-stop investment application</h6>
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
  body {
    margin: 0;
    padding: 0;
  }

  *{
    margin: 0;
    padding: 0;
  }

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