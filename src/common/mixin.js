
import BackTop from "components/content/backTop/BackTop";
import { debounce } from "common/utils";


export const itemListenerMixin = {
    data() {
        return {
            itemListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemListener = () => {
            this.newRefresh()
        }
        this.$bus.$on('itemImageLoad', this.itemListener)
        console.log("混入启动")
    }
}
export const backTopMixin = {
    components:{
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }

    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
    }
}