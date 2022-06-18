<template>
  <div class="home">
    <board-list id="notice"/>
    <board-list id="qna"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BoardList from "../components/BoardList.vue";

export default {
  name: "HomeView",
  components: {
    BoardList
  },
};
</script>
