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

<script>
import CustomerService from '../../services/CustomerService'

export default {
    name: 'CustomerData',
    data(){
        return{
            customers: []
        }
    },
    methods: {
        getCustomers(){
            CustomerService.getCustomers().then((resp) => {
                this.customers = resp.data;
            })
        }
    },
    created(){
        this.getCustomers()
    }
}
</script>

<style scoped>
table{
    background: white;
    margin:40px auto;
    font-size:16px;
    border-radius: 5px;
    padding:10px 20px 10px 20px;
}
tr > * {
    text-align: left;
    padding:12px 30px 12px 30px;   
}
th{
    text-transform: capitalize; 
}
td{
    color:rgb(95, 95, 95);
    border-top:1px solid #F2F2F2;
}
</style>