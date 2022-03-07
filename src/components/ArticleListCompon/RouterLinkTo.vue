<template>
  <div v-if="type == resources && number <= 4">
    <h2 class="small uppercase">{{ subtype }}</h2>
    <router-link   :to="{
            name: 'ArticleDetail',
            params: { id: id },
            query: { type: type },
          }" 
      ><h2 class=" big-header">
        {{ header }}
      </h2></router-link
    >
  </div>
  <!-- <div v-for="index in ten" :key="index"> 
    {{index }}
    <span>what is this</span>
  </div> -->

</template>

<script>
export default {
  props: ["id", "type", "subtype", "resources", "header", "number"],

 

  // computed: {
  //   articleDetailLink() {
  //     return this.$route.path + "/" + this.id;
  //   },
  // },

  
};
</script>

<style lang="scss" scoped>
 
.big-header {
  font-weight: 600;
  line-height: 1.3;
  color: rgb(22, 22, 22);
  font-size: 1.8rem;
  &:hover {
    color: red;
  }

}
 
 
 

</style>
