<template>
    <div>
        <b-navbar id="navbar" toggleable="md" type="dark" variant="info">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand href="#">Kaya Station</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">

                <b-nav is-nav-bar class="ml-auto">
                    <b-nav-item href="#">Create an Account</b-nav-item>
                    <b-nav-item to="/signin">Sign In</b-nav-item>
                </b-nav>
               
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

</script>

<style>

</style>