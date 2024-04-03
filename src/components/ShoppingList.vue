<script setup>
defineProps({ items: {
  type: Array,
  default: () => [],
} })

const emit = defineEmits(['removeItem', 'toggleCheck', 'showItemName'])

function removeItem(index, title) {
  emit('removeItem', index, title)
}

function toggleCheck(index, title) {
  emit('toggleCheck', index, title)
}

function showItemName(title) {
  emit('showItemName', title)
}
</script>

<template>
  <div v-for="(item, index) in items" :key="index">
    <div class="my-2">
      <v-card class="bg-teal-lighten-2 pa-1 pl-8 d-flex align-center">
        <div class="spacer d-flex align-center" :class="{ 'item-checked': item.isChecked }" @click="showItemName(item.title)">
          {{ item.title }}
          <v-divider v-if="item.isChecked" :thickness="2" color="white" class="border-opacity-75" />
        </div>

        <div>
          <v-btn
            title="remove product" variant="plain" icon="mdi-trash-can" density="compact"
            class="lowercase mr-2" @click="removeItem(index, item.title)"
          />
        </div>

        <v-checkbox :model-value="item.isChecked" title="mark product as purchased" density="compact" variant="plain" class="d-flex" @click="toggleCheck(index, item.title)" />
      </v-card>
    </div>
  </div>
</template>
