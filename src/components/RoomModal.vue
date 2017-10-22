<template>
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
</template>

<script>
export default {
    data: () => {
        return {
            form: {
                name: '',
                price: '',
                type: ''
            },
            mode: 'add'
        }
    },
    methods: {
        onSubmit() {
            let room = Object.assign({}, this.form, {
                hotelId: this.$store.state.hotels.currentHotel.id
            })
            this.form = {
                name: '',
                price: '',
                type: ''
            }
            console.log(this.mode)
            switch(this.mode){
                case 'edit':
                    this.$store.dispatch('rooms/update', room)
                    delete this.form.id
                    break
                case 'add':
                    this.$store.dispatch('rooms/add', room);
                    break
            }
        },
        show(room){
            console.log(room)
            if(room){
                this.mode = 'edit'
                this.form = room
            } else{
                this.mode = 'add'
            }
            this.$refs.room_add_modal.show()
        }
    }
}
</script>

<style>

</style>
