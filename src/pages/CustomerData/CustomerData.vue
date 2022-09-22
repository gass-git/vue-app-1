<script setup>
    import { onMounted, ref } from 'vue'
    import CustomerService from '../../services/CustomerService'

    const customers = ref([])

    function getCustomers(){
        CustomerService.getCustomers()
            .then((resp) => {
                customers.value = resp.data
            })
            .cath((error) => {
                console.log(error)
            })
    }

    onMounted(() => {
        getCustomers()
    })
</script>

<template>
    <table>
        <tr>
            <th>first name</th>
            <th>last name</th>
            <th>sex</th>
            <th>age</th>
            <th>height (m)</th>
            <th>weight (kg)</th>
            <th>fat percentage</th>
        </tr>
        <tr v-for="customer in customers" v-bind:key="customer.id">
            <td>{{ customer.firstName }}</td>
            <td>{{ customer.lastName }}</td>
            <td>{{ customer.sex }}</td>
            <td>{{ customer.age }}</td>
            <td>{{ customer.height }}</td>
            <td>{{ customer.weight }}</td>
            <td>{{ customer.fatPercentage }}</td>
        </tr>
    </table>
</template>

<style scoped>
table{
    margin:0 auto;
    background: rgb(255, 255, 255);
    font-size:16px;
    border-radius: 10px;
    padding:10px 20px 10px 20px;
}
tr > * {
    text-align: left;
    padding:12px 15px 12px 15px;   
}
th{
    text-transform: capitalize; 
}
td{
    color:rgb(95, 95, 95);
    border-top:1px solid #f2f2f2;
}
</style>