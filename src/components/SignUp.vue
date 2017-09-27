<template>
  <b-modal ref="sign_up_modal" id="signup-modal" title="Create an Account" ok-title="Register">
      <b-form @submit="onSignUp">
        <b-form-group id="grpName" label="Name" label-for="grpName">
            <b-form-input id="txt-name" type="text" v-model="form.name" placeholder="Email" required="required"></b-form-input>
        </b-form-group>
        <b-form-group id="grpEmail" label="Email" label-for="grpEmail">
            <b-form-input id="txt-email" type="email" v-model="form.email" placeholder="Email" required="required"></b-form-input>
        </b-form-group>
        <b-form-group id="grpPass" label="Password" label-for="grpPass">
            <b-form-input id="txt-pass" type="password" v-model="form.password" placeholder="Password" required="required"></b-form-input>
        </b-form-group>
      </b-form>
  </b-modal>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        onSignUp(){

        }
    }
}
</script>

<style>

</style>
