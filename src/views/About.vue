<template>
    <main>
        <h1>Hello, people.🎉🎉</h1>
        <p>I recreate this website by vue js.</p>
        <a href="https://github.com/rasid-mr/thoughtco.git">github repo of this site</a><br>
        <a href="https://www.thoughtco.com/" target="_blank">Go to the original.😎👌</a>
    </main>
</template>

<style lang="scss" scoped>

    * {
        margin: 2rem 0;
    }
    h1 {
        font-size: 3rem;
        color: orangered;


    }
    p {
        font-size: 2rem;
        color: hsl(155, 54%, 33%);
    }
    a:first-of-type {
         margin-bottom: 7.8rem;
    }
    a {
        font-size: 1.7rem;
        color: rgb(0, 155, 103);
        position: relative;
        width: fit-content;
        

       
    }
     a::after {
            content:'';
            position: absolute;
            left:0;
            top:105%;
            width: 100%;
            border-bottom: 1.8px solid rgb(35, 122, 111);
              
        }
</style>