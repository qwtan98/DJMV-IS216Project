<template>
    <div class="container py-4 py-xl-5">
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

<script>
    export default 
    {
        name: 'LandingPage',
        props: 
        {
    
        }
    }
</script>