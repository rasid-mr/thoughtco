<template>
<div class="flexbox-row">
 <input
        id="email"
        type="text"
        :=$attrs
        class="email-input"
      />
     
      <div class="sign">
        <button class="email-button" >Sign up</button>
      </div>
</div>
 
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/_functions.scss";
@import "../../assets/styles/abstracts/_mixins.scss";

.flexbox-row {
    display: flex;
    margin-top: 2rem;
}
.email-input {
//   max-width: 53.334rem;
  width: #{scaleValue(500)};
  height: 4.2rem;
  padding: 0.94rem 1.04rem;
  font-size: 2rem;
  color:black;

  @include respond(tab-port) {
      width: #{scaleValue(700)};
  }
}
.email-button {
    height: 100%;
    // padding: 1.4rem 1.04rem;
   
    font-size: 1.6rem;
    color: #cccccc;
    background-color: #c41e24;
    outline: none;
    cursor: pointer;
    border: none;
     width: 10.66rem;
    
  }
</style>
