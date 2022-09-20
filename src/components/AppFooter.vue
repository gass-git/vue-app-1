<template>
    <footer>
        <div class="container">
            <h1>Footer</h1>
        </div>
    </footer>
</template>

<style scoped>
    @import "../assets/globalStyles.css";

    footer{
        height:var(--footer-height);
        background: #c6cccc;
    }
    .container{
        display:grid;
        place-items: center;
    }
    h1{
        color:white;
        font-size:30px;
    }
</style>