<template>
    <div>
        <div class="w-75 mx-auto">
            <h3>Add Comments</h3>
            <form @submit.prevent>
                <my-input v-model="comment.name" class=" form-control" type="text" placeholder="Enter Your Name" />
                <my-input v-model="comment.email" class=" form-control my-3" type="email"
                    placeholder="Enter Your Email" />
                <my-input v-model="comment.body" class=" form-control" type="text" placeholder="Enter Your Content" />
                <div class="d-flex flex-row-reverse">
                    <my-button @click="createComment" class="btn btn-primary mt-3">Add comments</my-button>
                </div>

            </form>
        </div> 
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';

// import { emit } from 'process';

export default {
    components: {
        MyButton
    },
    data() {
        return {
            comment: {
                name: "",
                email: "",
                body: ""
            }
        };
    },
    methods: {
        createComment() {
            this.comment.id = Date.now();
            this.$emit("addComment", this.comment);
            this.comment = {
                name: "",
                email: "",
                body: ""
            };
        }
    },
    watch:{
        comment:{
           handler(newValue){
            console.log(newValue)
           }, 
           deep:true
        }
    }
    
}
</script>

<style>

</style>