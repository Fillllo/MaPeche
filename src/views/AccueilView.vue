<template>
    <div id="main">
        <div id="title">
            <span>MAPÊCHE</span>
        </div>
        <div id="desc">
            <div id="left">
                <div>
                    <h2>Une carte dédiée à la pêche</h2>
                    <span>Rivières, lacs, ainsi que mers et océans contrastés grâce à une couleur bleu vive</span>
                    <img :src="require('../assets/img1.png')" class="img">
                </div>
            </div>
            <div>
                <div>
                    <h2>Vos spots préférés avec vos prises</h2>
                    <span>Placez vos propre points et consultez les à votre guise</span>
                    <img :src="require('../assets/img2.png')" class="img">
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
    font-size: 10vh;
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
#desc div div span{
    display: flex;
    font-size: 20px;
    width: 25vw;
    margin: auto;
}
#desc div div h2{
    padding: 2vw;
}
#desc #left{
border-right: 1px solid #37474f;
}
.img{
    height: 60%;
    width: 60%;
    box-shadow: #37474f;
    margin-top: 1vh;
}
@media screen and (max-width: 500px) {
#desc div div span{
    font-size: 15px;
}
#desc div div h2{
    font-size: 18px;
}
#title span{
    font-size: 5vh;
}
}
</style>
