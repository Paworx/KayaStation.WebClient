<template>
    <b-modal ref="sign_in_modal" id="signin-modal" title="Sign In"
        ok-title="Submit" close-title="Cancel" @ok="onSubmit">
        <b-form>
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
  data: () => {
    return {
      form: {
       email: '',
       password: ''
      }
    }
  },
  methods: {
    async onSubmit(evt) {
      let tokens = await this.$store.dispatch('user/signin', this.form);
      let hotel = await this.$store.dispatch('hotels/getByCurrentUser', tokens);
      this.$router.push('home');
    }
  }
}
</script>

<style>

</style>
