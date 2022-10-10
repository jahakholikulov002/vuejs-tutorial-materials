<template>
    <div class="comment">
        <div>
            <p> <b>Name:  </b>{{ comment.name }} </p>
            <p><b>Content: </b> {{comment.body}} <br>  <b>{{ comment.email }}</b></p>
        </div>
        <div class="d-flex">

            <my-button class="btn-secondary" @click="$router.push(`/comment/${comment.id}`)">Open</my-button>
            <my-button class="btn-danger" @click="$emit('remove', comment)">Delete</my-button>
        </div>
    </div>
</template>



<script>
    
// 
export default {

    // components:{
    // MyButton,
    
// },
    props: {
        comment: {
            type: Object,
            required: true
        }
    }
}
</script>


<style>
.comment {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>