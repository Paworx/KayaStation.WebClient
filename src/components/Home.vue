<template>
    <div>
        <h1>Welcome</h1>
        <b-form @submit="onSubmit">
            <b-form-group id="sign-in-form" label="Sign-in" label-for="sign-in-form">
                <b-form-input id="txt-email" type="email" v-model="form.email" placeholder="Email" required="required"></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
       email: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    }
  }
}
</script>

<style>

</style>
