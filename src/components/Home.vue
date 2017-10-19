<template>
  <div>
      <b-navbar id="navbar" toggleable="md" type="dark">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand href="#">Kaya Station</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">

                <b-nav is-nav-bar class="ml-auto">
                    <b-nav-item href="#" @click="onLogout()">Logout</b-nav-item>
                </b-nav>
               
            </b-collapse>
        </b-navbar>
    <b-row>
        <h1>Welcome {{name}}!</h1>
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
                <b-form-input type="text" v-model="form.name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Type:">
                <b-form-input type="text" v-model="form.type" required></b-form-input>
            </b-form-group>
            <b-form-group label="Price:">
                <b-form-input type="number" v-model="form.price" required></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
  </div>


</template>

<script>

export default {
    data: () => {
        return {
            fields: ['name', 'price', 'type'],
            form: {
                name: '',
                price: '',
                type: ''
            }
        };
    },
    async created () {
        let hotel = await this.$store.dispatch('hotels/getByCurrentUser');
        this.$store.dispatch('rooms/getById', this.$store.state.hotels.currentHotel.id);
    },
    methods: {
        addRoom() {
            console.log('adding room');
            this.$refs.room_add_modal.show();
        },
        onSubmit() {
            let room = Object.assign({}, this.form, {
                hotelId: this.$store.state.hotels.currentHotel.id
            })
            this.$store.dispatch('rooms/add', room);
        },
        onLogout() {
            this.$store.dispatch('user/logout');
        }
    },
    computed: {
        name () {
            return this.$store.state.hotels.currentHotel.name;
        },
        rooms () {
            return this.$store.state.rooms.all;
        }
    }
}
</script>

<style>
    #navbar {
        background-color: rgb(233,78,119)
    }
</style>
