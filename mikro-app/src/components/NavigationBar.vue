<template>
    <div id="nav-bar">
    <!-- <v-btn text fab dark small icon>
        <router-link to="/"><v-icon>mdi-home</v-icon></router-link>
    </v-btn> -->
        <nav id = "mikro-navbar" class="navbar navbar-expand-md navbar-light bg-light py-4" >
            <div class="container-fluid">

                <router-link to="/" class="navbar-brand col-md-4">
                    <img alt="Mikro logo" src="../assets/ui/mikro_logo_trim.png" style="height:25px;"/>
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-0">
                        <router-link to="Lessons" class="navbar-brand col-md-4">
                            Lessons
                        </router-link>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Lessons
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Lessons
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> 
                        <!-- <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>  -->
                    </ul> 
                    <div class = "col-md-4">
                        <router-link to="Login">
                            <button class="btn btn-dark">
                                Log in
                            </button>
                        </router-link>
                        <router-link to="Lessons" class="ms-1">
                            <button class="btn btn-outline-dark">
                                Register
                            </button>
                        </router-link>
                    </div>

                    <!-- <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>
    </div>

</template>

<style>

* {
    padding: 0;
    margin: 0;
}

#mikro-navbar {
    padding: 50px;
}

.mikro-navbar-btn:hover {
    background-color: gray;
}

</style>

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