<script setup>
import { ref } from 'vue'

const items = ref([])
const newItem = ref('')

function addItem() {
  if (newItem.value.trim() === '')
    return

  items.value.push({
    title: newItem.value,
    isChecked: false,
  })
  newItem.value = ''
}

function removeItem(index) {
  items.value.splice(index, 1)
}

function removeAllItems() {
  items.value = []
}

function toggleAllItems() {
  const allItemsSelected = items.value.every(item => item.isChecked)
  items.value.forEach((item) => { item.isChecked = !allItemsSelected })
}
// - - -  object API - - -

// export default {
//     name: "todo-list",
//     data() {
//         return {
//             newItem: "",
//             items: []
//         }
//     },
//     methods: {
//         addItem() {
//             if(this.newItem.trim() == 0) {
//                 return
//             }
//             this.items.push({
//                 id: this.idTodo,
//                 title: this.newItem,
//             })
//             this.newItem = '',
//             this.idTodo++
//         },
//         removeTodo(index) {
//            this.items.splice(index, 1)
//         }
//     }
// }

// - - -  Composition API - - -
</script>

<template>
  <v-container class="fill-height">
    <v-row justify="center" class="bg-bluex">
      <v-col cols="6" class="bg-redx">
        <v-responsive class="align-center text-center fill-height">
          <!-- <v-img height="60" src="@/assets/logo.svg" /> -->

          <h1 class="text-h6 font-weight-light">
            Shopping List
          </h1>

          <v-text-field v-model="newItem" label="Add product" variant="underlined" @keyup.enter="addItem">
            <template #append-inner>
              <v-btn density="compact" icon="mdi-plus" class="bg-teal-lighten-1" @click="addItem" />
            </template>
          </v-text-field>

          <v-card v-if="items.length > 0" class="pa-1 pl-8 d-flex align-center justify-end" flat>
            <div>
              <v-btn
                title="remove all products" variant="plain"
                density="compact"
                class="lowercase ml-4 pr-8"
                @click="removeAllItems"
              >
                Remove all
              </v-btn>
            </div>

            <v-checkbox title="check all products" density="compact" variant="plain" class="d-flex" @click="toggleAllItems" />
          </v-card>

          <div v-for="(item, index) in items" :key="index">
            <div class="my-2">
              <v-card class="bg-teal-lighten-2 pa-1 pl-8 d-flex align-center">
                <div class="spacer d-flex align-center" :class="{ 'item-checked': item.isChecked }">
                  {{ item.title }}
                  <v-divider v-if="item.isChecked" :thickness="2" color="white" class="border-opacity-75" />
                </div>

                <div>
                  <v-btn
                    title="remove product" variant="plain" icon="mdi-trash-can" density="compact"
                    class="lowercase ml-4 pr-8" @click="removeItem(index)"
                  />
                </div>
                <v-checkbox v-model="item.isChecked" title="check product" density="compact" variant="plain" class="d-flex" />
              </v-card>
            </div>
          </div>

          <div class="py-14" />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-btn.lowercase {
  text-transform: unset;
}
.item-checked {
  text-decoration: line-through;
}
.spacer {
  width: 100%;
}
input.item-checked {
  color: whitesmoke
}
</style>
