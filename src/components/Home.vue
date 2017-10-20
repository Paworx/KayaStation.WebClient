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
    <room-modal ref="room_modal_component"></room-modal>
    
  </div>


</template>

<script>
import RoomModal from './RoomModal.vue'
export default {
    data: () => {
        return {
            fields: ['name', 'price', 'type'],
            
        };
    },
    async created () {
        let hotel = await this.$store.dispatch('hotels/getByCurrentUser');
        // this.$store.dispatch('rooms/getById', this.$store.state.hotels.currentHotel.id);
    },
    methods: {
        addRoom() {
            console.log('adding room');
            this.$refs.room_modal_component.$refs.room_add_modal.show();
        },
        
        onLogout() {
            this.$store.dispatch('user/logout');
        }
    },
    components: {
        RoomModal
    },
    computed: {
        name () {
            return this.$store.state.hotels.currentHotel.name;
        },
        rooms () {
            return this.$store.state.hotels.currentHotel.rooms;
        }
    }
}
</script>

<style>
    #navbar {
        background-color: rgb(233,78,119)
    }
</style>
