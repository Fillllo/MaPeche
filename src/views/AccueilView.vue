<template>
    <div id="main">
        <div id="title">
            <span>MAPÊCHE</span>
        </div>
        <div id="desc">
            <div id="left">
                <div>
                    <h2>UNE CARTE DEDIEE A LA PECHE</h2>
                    <img :src="require('../assets/img1.png')" id="img1">
                </div>
            </div>
            <div>
                <div>
                    <h2>Vos spots préférés avec vos prises</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
#main{
    height: 85vh
}
#title span{
    font-size: 5vw;
    font-weight: 700;
    margin: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.5vw;
}
#desc{
    display: flex;
    height: 100%;
}
#desc div {
    width: 50vw;
    text-align: center;
    justify-content: center;
    margin-top: 3vh;
}
#desc div div{
    width: 50vw;
    text-align: center;
    justify-content: center;
    margin-top: 3vh;
}
#desc #left{
border-right: 1px solid #37474f;
}
#img1{
    height: 60%;
    width: 60%;
    box-shadow: #37474f;
}
</style>
