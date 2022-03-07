<template>
  
  <header class="primary-header flex">
    <div>
      <router-link to="/">
        <h2 class="header_logo">
          Thought<span class="header_logo-sub">Co.</span>
          
        </h2></router-link
      >
       
    </div>
    <button class="mobile-nav-toggle" aria-controls="primary-navigation">
      <span class="sr-only" aria-expanded="false"></span>
    </button>
    <nav>
      <ul
        id="primary-navigation"
        data-visible="false"
        class="primary-navigation underline-indicators flex"
      >
        <router-link @click="hideNav" class="router-link" tag="li" to="/section-list/science"
          >Science,Tech,Math</router-link
        >
        <router-link @click="hideNav" class="router-link" tag="li" to="/section-list/language"
          >Languages</router-link
        >
        <router-link @click="hideNav" class="router-link" tag="li" to="/section-list/resources"
          >Resources</router-link
        >
        <router-link @click="hideNav" class="router-link" tag="li" to="/section-list/humanities"
          >Humanities</router-link
        >
        <router-link @click="hideNav" class="router-link" tag="li" to="/about"
          >About</router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    navToggle.addEventListener("click", () => {
      const visiblity = nav.getAttribute("data-visible");
      if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
      } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    });

    const primary = document.querySelector(".primary-navigation");
    const att = primary.getAttribute("data-visivle");
    if (!att == "true") {
      primary.classList.add("hide-nav");
    } else return;
  },
  methods: {
    hideNav() {
      const primary = document.querySelector(".primary-navigation");
      primary.classList.add("hide-nav");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/_mixins.scss";
.logo {
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
}

.primary-header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
}

.primary-navigation {
  --gap: clamp(1.5rem, 5vw, 3.5rem);
  --underline-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  // background: hsl( var(--clr-white) / 0.05);
  backdrop-filter: blur(1.5rem);
}

.primary-navigation a {
  text-decoration: none;
}

 

.mobile-nav-toggle {
  display: none;
}

 @media (max-width:50em) {
  .primary-navigation {
    
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    list-style: none;
     
    padding: 2rem;
    margin: 0;
    display: flex;
    flex-direction: column;

    transform: translateX(100%);
    transition: transform 500ms ease-in-out;

    &::before {
      content: "";
      display: block;
      position: relative;
      height: 5rem;
      width: 100%;
      background: transparent;
    }

    & > * {
      flex-basis: 6rem;
    }
  }

  .primary-navigation[data-visible="true"] {
    transform: translateX(0);
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 2rem;
    // top: 2rem;
    background: transparent;
    background-image: url("../../assets/image/menu-outline.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 4.5rem;
    aspect-ratio: 1;
    border: 0;
    cursor: pointer;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    background-image: url("../../assets/image/close-outline.svg");
  }

  .mobile-nav-toggle:focus-visible {
    outline: 5px solid white;
    outline-offset: 5px;
  }
}

@media (min-width: 35em) {
  .primary-navigation {
    // padding-inline: clamp(3rem, 7vw, 7rem);
    padding: 2rem 0 2rem 2rem;
  }
}

// @media (min-width: 35em) and (max-width: 44.999em) {
//   .primary-navigation a > span {
//     display: none;
//   }
// }

@media (min-width: 45em) {
  //  .primary-header::after {
  //      content: '';
  //      display: block;
  //      position: relative;
  //      height: 1px;
  //      width: 100%;
  //      margin-right: -2.5rem;
  //     //  background: hsl( var(--clr-white) / .25);
  //     background: white;
  //      order: 1;
  //  }

  nav {
    order: 2;
  }

  .primary-navigation {
    margin-block: 2rem;
  }
}

.hide-nav {
  transform: translateX(0%);
}

.router-link {
  text-decoration: none;
  padding: 1.3rem 1.8rem;
  font-size: 1.8rem;
  color: black;
  font-weight: 600;
  position: relative;
  transition: opacity 0.2s;
  @include respond(tab-land) {
    font-size: 1.6rem;
  }
  @include respond(tab-port) {
    font-size: 2rem;
  }
   @media (max-width:50em) {
     font-size: 2rem;
   }
  &:hover {
    opacity: 0.7;
  }
}

.router-link:last-of-type {
  padding-right: 0;
  margin-right: 0;
}

.router-link-exact-active {
  text-decoration: underline #ffe186 2px !important ;
  text-underline-offset: 5px;
}
.header_logo {
  font-size: 4rem;
  justify-self: stretch;
  margin-top: -0.4rem;
  color: black;
  &:hover {
    color: #beab72;
  }
  @include respond(tab-land) {
    font-size: 3.5rem;
  }
  @media (max-width:50em) {
    height: 9vh;
    display: flex;
    align-items: center;
  }
  &-sub {
    color: #beab72;
  }
}
</style>
