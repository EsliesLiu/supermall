<template>
  <div >
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{ cartLength }}）</div>
    </nav-bar>
    <cart-list :cart-list="cartList" />
    <cart-bottom-bar/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList";
import CartBottomBar from './childComps/CartBottomBar'
import NavBar from "components/common/navbar/NavBar";


export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
 
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style >
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  position: relative;
  z-index: 9;
}
</style>
