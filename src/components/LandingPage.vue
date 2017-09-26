<template>
    <div id="landing-page">
        <b-navbar id="navbar" toggleable="md" type="dark">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand href="#">Kaya Station</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">

                <b-nav is-nav-bar class="ml-auto">
                    <b-nav-item href="#">Create an Account</b-nav-item>
                    <b-nav-item to="/signin">Sign In</b-nav-item>
                </b-nav>
               
            </b-collapse>
        </b-navbar>
        <b-jumbotron header="Kaya Station" lead="Satisfaction. In Reach">

        </b-jumbotron>
    </div>
</template>

<script>

</script>

<style>
    #navbar {
        background-color: rgb(233,78,119)
    }

    #landing-page .jumbotron {
        background-color: #ffe8ef
    }
</style>