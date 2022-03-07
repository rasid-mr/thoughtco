<template>
  <div class="email">
    <form @submit.prevent="formSubmit" class="email-form">
      <label for="email"
        ><h2 class="email-header">Learn Something New Everyday</h2></label
      >
      <the-email placeholder="Enter your Email"></the-email>
      
    </form>
    <div class="social">

 
    <div class="email-image">
       <router-link to="/">
        <h2 class="header_logo">
          Thought<span class="header_logo-sub">Co.</span>
        </h2></router-link
      >
    </div>
    <div class="follow">
      <label for="icon" class="follow-us">Follow Us</label>
      <legend class="follow-social">
         <img class="footer-follow-social-facebook" src="../../assets/image/facebook-svgrepo-com.svg" alt="Facebook Logo">
            <img class="footer-follow-social-flipboard" src="../../assets/image/flipboard-svgrepo-com.svg" alt="Flipboard Logo">
        
      </legend>
    </div>
    </div>
  </div>
</template>

<script>
import TheEmail from '../Layout/TheEmail.vue'
export default {
  components: {
    TheEmail
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/_mixins.scss";
@import "../../assets/styles/abstracts/_functions.scss";
@include respond(tab-port) {
 
}

.social {
  // background-color: red;
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  justify-content: space-evenly;
   margin-top: 3rem;
  @include respond(phone) {
    display: none;
  }
}
.follow {
  // margin-left: 9.5rem;
  // margin-top: 4rem;
  justify-self: center;
  font-size: 2.1rem;
  font-weight: 700;
  &-social {
    display: flex;

    // @include respond(tab-port) {
    //   display: none;
    // }

    &-facebook {
      color: rgb(255, 255, 255);
      background-color: #344e86;
      display: flex;
      width: 4.2rem;
      height: 4.2rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus {
        background-color: #578b9e;
      }
    }
    &-flipboard {
      margin-left: 0.4rem;
      color: white;
      background-color: rgb(225, 2, 2);
      display: flex;
      width: 4.2rem;
      height: 4.2rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus {
        background-color: rgb(182, 5, 5);
      }
    }
  }
}

.email {
  max-width: 120rem;
  min-height: 14.846rem;
  background-color: #e5ddcf;
  margin: 10rem 0 2rem 0;
  padding: 1.12rem 2.56rem;
  box-sizing: border-box;
  display: flex;
   
    

  &-header {
    font-size: 1.8rem;
    color: #282828;
    font-weight: 1200;
    margin-top: 3rem;
  }
   
}
.header_logo {
  font-size: 3rem;
  text-decoration: none;
  color: black;
 
   
   @include respond(tab-port) {
     display: none;
   }
  &-sub {
    color: #ffe186;
  }
}
</style>
