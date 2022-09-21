<template>
    <header>
        <div class="left-container">
            <img class="logo" src="@/assets/vueLogo.svg" />
        </div>
        <div class="middle-container">
            <div class="app-title">
                Vue App 1: gym customers data
            </div>
        </div>
        <div class="right-container">

        </div>
    </header>
</template>

<style scoped>
    @import "../assets/globalStyles.css";

    header{
        width:100%;
        height:var(--header-height);
        background:white;
    }
    .left-container{
        display:flex;
        align-items: center;
        border:1px solid black;
        width: 110px;
    }
    .middle-container{
        border:1px solid black;
        width:1000px;
        height:100%;
        display:flex;
        align-items: center;
        padding:0 0 0 20px;
    }
    .logo{
        margin-left:30px;
        height:55px;
        aspect-ratio: 1;
    }
    .app-title{
        font-size:25px;
    }
</style>