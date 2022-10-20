<template>
    <div id="nav-bar">

    <!-- <v-btn text fab dark small icon>
        <router-link to="/"><v-icon>mdi-home</v-icon></router-link>
    </v-btn> -->
        <router-link to="/">Home </router-link>
        <router-link to="/lessons">Lessons</router-link>

    </div>

</template>

<script>

    export default 
    {
        data()
        {
            return{
                name: 'NavigationBar',
                
            }
        },

        props: 
        {

        }
    }
</script>