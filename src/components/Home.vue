<template>
  <b-container>
    <b-row>
        <h1>Welcome {{user}}!</h1>
    </b-row>
    <b-row>
        <h1>Rooms</h1>
        <b-table striped hover :items="rooms"></b-table>
    </b-row>
  </b-container>


</template>

<script>

export default {
    created () {
        this.$store.dispatch('rooms/getById', this.$store.state.user.email);
    },
    computed: {
        user () {
            return this.$store.state.user.name;
        },
        rooms () {
            return this.$store.state.rooms.all;
        }
    }
}
</script>

<style>

</style>
