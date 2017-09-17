<template>
  <h1>Welcome {{user}}!</h1>
</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.state.user.name;
        }
    }
}
</script>

<style>

</style>
