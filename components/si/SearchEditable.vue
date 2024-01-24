
<template>
    <div
      class=" "
      contenteditable="true"
      @input="$emit('input', $event.target.innerText)"
    >
      {{ value }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
    },
  };
  </script>
  
  <style>
  </style>
  