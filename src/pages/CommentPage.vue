<template>
   
    <!-- <my-button class="btn-success" @click="fetchComments">Get all comments</my-button> -->
    <div>

        <my-modal v-model:show="modalVisible">
            <comment-form @addComment="createComment" />
        </my-modal>
        <div class="d-flex container">
            <my-input v-model="searchQuery" class="form-control" placeholder="Search..." />
            <my-select class="w-25  m-auto bg-primary text-white" v-model="selectedShort" :options="selectOptions" />
            <my-button @click="showModal" class="btn btn-outline-primary text-decoration-none">Add
            </my-button>
        </div>
        <comment-list :comments="shortedAndSearchComments" @remove="removeComment" v-if="!isLoading" />
        <!-- bola filega yuboriw bind orqali -->
        <div v-else class="spinner-grow col-md-3 offset-md-6" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="page_wrapper container">
            <div class="btn btn-primary mx-1" :class="{'current-page' :  page===pageNum}" @click="changePage"
                v-for="pageNum in totalPage" :key="pageNum.id">
                {{pageNum}}
            </div>
        </div>
    </div>
</template>

<script>

import CommentForm from '@/components/CommentForm.vue';  /* script codlarimizni bola filega import qlib olamiz  */
import CommentList from '@/components/CommentList.vue';  /* script codlarimizni bola filega import qlib olamiz  */

import MyModal from '@/components/UI/MyModal.vue';
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios';
import MyInput from '@/components/UI/MyInput.vue';
export default {
    components: {
        CommentForm,
        CommentList,
        // Navbar,
        MyInput
    },
    data() { // for updating data 
        return { // return us the obj
            comments: [],
            modalVisible: false,
            isLoading: false,
            selectedShort: "",
            searchQuery: "",
            page: 1,
            limit: 50,
            totalPage: 0,
            selectOptions: [
                { value: "name", name: "Filter by name" },
                { value: "email", name: "Filter by email" },
            ]
        }
    },
    methods: { // its for methods 
        createComment(comment) {
            console.log(comment)
            this.comments.push(comment);
            this.modalVisible = false
        },
        removeComment(comment) {
            this.comments = this.comments.filter(c => c.id !== comment.id);
        },
        showModal() {
            this.modalVisible = true;
        },
        changePage() {
            this.page = this.page + 1;
            this.fetchComments();
        },
        async fetchComments() {
            try {
                this.isLoading = true;

                const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                    params: {
                        _limit: this.limit,
                        _page: this.page
                    }
                });
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.comments = response.data;
            } catch (e) {
                alert('Something went wrong!')

            } finally {
                this.isLoading = false
            }
        },
    },
    mounted() {
        this.fetchComments()
    },
    computed: {
        filteredComments() {
            return [...this.comments].sort((a, b) => {
                if (this.selectedShort === "name") {
                    return a.name.localeCompare(b.name);
                } else if (this.selectedShort === "email") {
                    return a.email.localeCompare(b.email);
                }
            })
        },
        shortedAndSearchComments() {
            return this.filteredComments.filter(comment => {
                return comment.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    comment.email.toLowerCase().includes(this.searchQuery.toLowerCase());
            });

        }
    },
    // watch: {
    //     selectedShort(newValue) {
    //         this.comments.sort((comm1, comm2) => {
    //             if (newValue === "name") {
    //                 return comm1.name.localeCompare(comm2.name);
    //             } else if (newValue === "email") {
    //                 return comm1.email.localeCompare(comm2.email);
    //             }
    //         })

    //     }
    // }
}
</script>

<style>
.current-page {
    background-color: #fff;
    color: #000;
}
</style>