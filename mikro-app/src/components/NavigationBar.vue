<template>
    <div class="sticky-top" id="nav-bar">
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
                            <font-awesome-icon class="icon" icon="fa-solid fa-graduation-cap"/> Academy
                        </router-link>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <font-awesome-icon class="icon" icon="fa-solid fa-book"/> Articles
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
                                <font-awesome-icon class="icon" icon="fa-solid fa-trophy" />Achievements
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <li><a class="dropdown-item" href="#">Lesson Progress</a></li>
                                <li><a class="dropdown-item" href="#">Badges</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> 
                        <!-- <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>  -->
                        <li>
                            <font-awesome-icon class="icon" icon="fa-solid fa-globe" />
                        </li>
                    </ul> 
                    <div class = "col-md-4">
                        <router-link to="Login">
                            <button class="btn btn-primary">
                                Log in
                            </button>
                        </router-link>
                        <router-link to="Lessons" class="ms-1">
                            <button class="btn btn-outline-primary">
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
            
                    <div class="wrapper d-flex align-items-stretch">
                        <nav id="sidebar">
                            <div class="custom-menu">
                                <button type="button" id="sidebarCollapse" class="btn btn-primary" v-on:click="sideBarStatus">
                        <i class="fa fa-bars"></i>
                        <span class="sr-only">Toggle Menu</span>
                        </button>
                    </div>
                            <div class="p-4">
                            <router-link to="/" class="navbar-brand col-md-4">
                                <img alt="Mikro logo" src="../assets/ui/mikro_logo_trim.png" style="height:25px;"/>
                            </router-link>
                        <ul class="list-unstyled components mb-5">
                        <li class="active">
                            <a href="#"><span class="fa fa-home mr-3"></span> Home</a>
                        </li>
                        <li>
                            <router-link to="Lessons" class="navbar-brand col-md-4">
                                <font-awesome-icon class="icon" icon="fa-solid fa-graduation-cap"/> Academy
                            </router-link>
                        </li>
                        <li>
                            <router-link to="Articles" class="navbar-brand col-md-4">
                                <font-awesome-icon class="icon" icon="fa-solid fa-book"/> Articles
                            </router-link>
                        </li>
                        <li>
                        <a href="#"><span class="fa fa-sticky-note mr-3"></span> Blog</a>
                        </li>
                        <li>
                        <a href="#"><span class="fa fa-suitcase mr-3"></span> Gallery</a>
                        </li>
                        <li>
                        <a href="#"><span class="fa fa-cogs mr-3"></span> Services</a>
                        </li>
                        <li>
                        <a href="#"><span class="fa fa-paper-plane mr-3"></span> Contacts</a>
                        </li>
                        </ul>

                        <div class="mb-5">
                            <h3 class="h6 mb-3">log Out</h3>
                        </div>



                    </div>
                    </nav>

                    <!-- Page Content  -->
                <div id="content" class="p-4 p-md-5 pt-5">
                    <h2 class="mb-4">Sidebar #05</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                    </div>



    </div>

</template>

<style>

* {
    padding: 0;
    margin: 0;
}



.icon:hover {
    transform: translateY(-4px);
}

#mikro-navbar {
    padding: 50px;
}

.mikro-navbar-btn:hover {
    background-color: gray;
}

#sidebar {
    background-color: rgb(24, 24, 24);
}

</style>

<script>
 
    import './NavBar.css'

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

        },
        
        methods: 
        {
            sideBarStatus()
            {
                
                alert("Im clicked!")
            }
        }

    }
</script>
