<template>
</template>
<script>
export default {
    data(){
        return {
            message:"小猪猪，小小猪，猪猪侠，猪无能，pigKing"
        }
    },
    render(createElement){
        return createElement('div','this.message')
    }
}
</script>