<template>
  <div>
                <div class="container">
                    <table>
                        <tbody>
                        <tr>
                            <th>| Item(s)    |</th>
                            <th>| Quantity   |</th>
                            <th>| Unit Price |</th>
                            <th>| Total Prices     |</th>
                        </tr>
         <tr v-for="movie in rentalMovies" v-bind:key="movie.ProductId">
            <td><strong>{{movie.Title}}</strong></td>
            <td>{{movie.Quantity}}</td>
            <td>$ {{movie.TotalPrice/movie.Quantity}}</td>
            <td>$ {{movie.TotalPrice}}</td>
        </tr>
        <tr>    
            <td colSpan="2"></td>
            <td>
                 <strong>
                     SubTotal : 
                 </strong>
            </td>
                <td>
                  <strong>
                       $ {{subTotal}}
                  </strong>
                </td>
        </tr>
        <tr>    
            <td colSpan="2"></td>
            <td>
                <strong>
                    Tax Applicable :
                </strong>
            </td>
            <td>
                <strong>
                    $ {{taxable}}
                </strong>
            </td>
        </tr>
        <tr>    
            <td colSpan="2"></td>
            <td>
                <strong>
                    Total Billable Amount : 
                </strong>
            </td>
            <td>
                <strong>
                    $ {{grandTotal}}
                </strong>
            </td>
        </tr>
        <tr>
            <td colSpan="2">
                <button class="checkout">
                    checkout!<span class="glyphicon glyphicon-shopping-cart"></span>    
                </button>
            </td>
            <td colSpan="2">
                <button class="go-back">
                     Go Back
                </button>
            </td>
        </tr>
        </tbody>
                    </table>
                </div>
            </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Cart",
    methods: {  
        ...mapActions(["fetchCarts"]),
        calc: function() {
                    let subTotal1=0;
                    let taxable1 =0;
                    let grandTotal1 =0;
                    this.rentalMovies.forEach(function(obj) { 
                         subTotal1 +=  obj.TotalPrice;
                     })
                    taxable1 = subTotal1/10;
                    grandTotal1 = subTotal1+taxable1;
                    this.taxable = taxable1.toString().slice(0,4)
                    this.grandTotal = grandTotal1.toString().slice(0,5)
                    this.subTotal = subTotal1
        }
    },
    computed: mapGetters(['rentalMovies']),
    created() {  
        this.fetchCarts()
        this.calc()
   
    },
    beforeUpdate() {
        this.calc()
    },
    data: function() {
        return  {
            subTotal:0,
            taxable: 0,
            grandTotal: 0                    
        }
    }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  text-align:center;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  align-self: center;
}

table{
    margin-left: auto;
    margin-right: auto;
    text-align:center;
}
th{
    background-color: gray;
}
button{ 
    background-color: gray; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
