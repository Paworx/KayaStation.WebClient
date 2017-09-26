<template>
  <div>
    <b-row>
        <h1>Welcome {{user}}!</h1>
    </b-row>
    <b-row>
        <h1>Rooms</h1>
    </b-row>
    <b-row>
        <b-nav>
            <b-nav-item @click="addRoom()">Add Room</b-nav-item>
        </b-nav>
    </b-row>
        <b-table striped hover :items="rooms" :fields="fields"></b-table>
    </b-row>

    <b-modal ref="room_add_modal" title="Add Room" ok-title="Add" close-title="Cancel"
        @ok="onSubmit" >

        <b-form>
            <b-form-group label="Name:">
                <b-form-input type="text" v-model="form.Name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Type:">
                <b-form-input type="text" v-model="form.Type" required></b-form-input>
            </b-form-group>
            <b-form-group label="Price:">
                <b-form-input type="number" v-model="form.Price" required></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
  </div>


</template>

<script>

export default {
    data: () => {
        return {
            fields: ['Name', 'Price', 'Type'],
            form: {
                Name: '',
                Price: '',
                Type: ''
            }
        };
    },
    created () {
        this.$store.dispatch('rooms/getById', this.$store.state.user.email);
    },
    methods: {
        addRoom() {
            console.log('adding room');
            this.$refs.room_add_modal.show();
        },
        onSubmit() {
            this.$store.dispatch('rooms/add', this.form);
        }
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
