<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({ items: {
  type: Array,
  default: () => [],
} })

const emit = defineEmits(['removeItem', 'toggleCheck'])

function removeItem(index) {
  emit('removeItem', index)
}

function toggleCheck(index) {
  emit('toggleCheck', index)
}
</script>

<template>
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
        <v-checkbox :value="item.isChecked" title="mark product as purchased" density="compact" variant="plain" class="d-flex" @click="toggleCheck(index)" />
      </v-card>
    </div>
  </div>
</template>
