<template>
    <div class="container">
        <h1>Welcome</h1>
        <b-form @submit="onSubmit">
            <b-form-group id="grpEmail" label="Email" label-for="grpEmail">
                <b-form-input id="txt-email" type="email" v-model="form.email" placeholder="Email" required="required"></b-form-input>
            </b-form-group>
            <b-form-group id="grpPass" label="Password" label-for="grpPass">
                <b-form-input id="txt-pass" type="password" v-model="form.password" placeholder="Password" required="required"></b-form-input>
            </b-form-group>
            <div class="float-right">
                <b-button type="reset" variant="secondary">Reset</b-button>
                <b-button type="submit" variant="primary">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import store from '@/store';
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
    onSubmit(evt) {
      evt.preventDefault();
      store.dispatch('user/signin', this.form);
    }
  }
}
</script>

<style>

</style>
