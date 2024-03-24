<template>
  <v-container class="fill-height">
    <v-row justify="center" class="bg-bluex">


      <v-col cols="6" class="bg-redx">
    <v-responsive class="align-center text-center fill-height">
      <!-- <v-img height="60" src="@/assets/logo.svg" /> -->

      <h1 class="text-h6 font-weight-light">Shopping List</h1>

      <v-text-field label="Shop" variant="underlined" v-model="newItem" @keyup.enter="addItem" />

      <div v-for="(item, index) in items" :key="index">
        <div class="ma-3" >
         <v-card class="bg-teal-lighten-2 pa-1 d-flex justify-end" >
          {{ item.title }} 
           <v-btn density="compact" class="lowercase ml-16">delete</v-btn> 
         </v-card>
       </div>
      </div>

      <div class="py-14" />

    </v-responsive>
  </v-col>

  <v-btn density="compact" icon="mdi-plus" class="bg-teal-lighten-1 mt-16" @click="addItem"/>

  </v-row>
  </v-container>
</template>

<script> 

// - - -  object API - - - 

export default {
    name: "todo-list",
    data() {
        return {
            newItem: "",
            items: []
        }
    },
    methods: {
        addItem() {
            if(this.newItem.trim() == 0) {
                return
            }
            this.items.push({
                id: this.idTodo,
                title: this.newItem, 
            })
            this.newItem = '',
            this.idTodo++
        }, 
        removeTodo(index) {
           this.todos.splice(index, 1)
        }
    }
}

// - - -  Composition API - - - 

// import {ref} from 'vue'

// const items = ref([])
// const newItem = ref('')

// function addItem() {
//   if (newItem.value.trim() === "") {
//     return;
//   }
//   items.value.push({
//     title: newItem.value
//   })
//   newItem.value = ''
// }


</script>

<style scoped>
.v-btn.lowercase{
    text-transform: unset;
}
</style>