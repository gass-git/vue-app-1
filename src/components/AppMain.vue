<template>
    <main>
        <CustomerData />
    </main> 
</template>

<script>
import CustomerData from "../pages/CustomerData/CustomerData.vue";

export default {
    name:'AppMain',
    components:{
        CustomerData
    }
}
</script>

<style scoped>
    main{
        min-height:var(--main-height);
        background: rgb(241, 241, 241);
    }
</style>