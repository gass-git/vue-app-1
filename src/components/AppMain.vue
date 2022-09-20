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
        background: #F1F1F1;
    }
</style>