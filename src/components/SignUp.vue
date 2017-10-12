<template>
  <b-modal ref="sign_up_modal" id="signup-modal" title="Create an Account" ok-title="Register" @ok="onSignUp">
      <b-form>
        <b-form-group id="grpName" label="Name" label-for="grpName">
            <b-form-input id="txt-name" type="text" v-model="form.hotelName" placeholder="Email" required="required"></b-form-input>
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
                hotelName: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async onSignUp(){
            let tokens = await this.$store.dispatch('user/signup', this.form)
            if(tokens){
                this.$store.dispatch('user/signin', this.form)
            }
        }
    }
}
</script>

<style>

</style>
