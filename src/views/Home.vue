<template>
  <v-container>
    <v-layout>
      <v-btn @click="alert" text icon>close</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home",
  methods: {
    alert() {
      alert("Hi");
    }
  }
};
</script>
