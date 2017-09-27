<template>
    <div id="landing-page">
        <b-navbar id="navbar" toggleable="md" type="dark">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand href="#">Kaya Station</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">

                <b-nav is-nav-bar class="ml-auto">
                    <b-nav-item href="#" @click="onCreate()">Create an Account</b-nav-item>
                    <b-nav-item href="#" @click="onSignIn()">Sign In</b-nav-item>
                </b-nav>
               
            </b-collapse>
        </b-navbar>
        <b-jumbotron header="Kaya Station" lead="Satisfaction. In Reach">

        </b-jumbotron>
        <sign-up ref="sign_up_component" name="sign_up_modal"></sign-up>
        <sign-in ref="sign_in_component" name="sign_in_modal"></sign-in>
    </div>
</template>

<script>
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'
export default {
    methods: {
        onCreate() {
            this.$refs.sign_up_component.$refs.sign_up_modal.show();
        },
        onSignIn() {
            this.$refs.sign_in_component.$refs.sign_in_modal.show();
        }
    },
    components: {
        SignUp,
        SignIn
    }
}
</script>

<style>
    #navbar {
        background-color: rgb(233,78,119)
    }

    #landing-page .jumbotron {
        background-color: #ffe8ef
    }
</style>