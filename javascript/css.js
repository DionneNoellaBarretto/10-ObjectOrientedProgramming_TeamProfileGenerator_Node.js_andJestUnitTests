const style = `
/* element  selectors */
html, body {
    max-width: 100% !important;
}

body {
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-family: 'Merienda', cursive;
    font-size: 6vw;
}

p {
    font-family: 'Merienda', cursive;
    position: relative;
    left: 12px;
}

h2 {
    font-family: 'Merienda', cursive;
    position: relative;
    font-size: 17px;
    left: 12px;
}

/* class selectors */
.banner-bar {
    background: linear-gradient(-45deg,#1A76F8,#00D693, #5266FE);
    width: 100%;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}

.card {
    width: 285px;
    height: 34vh;
    margin-bottom: 5vh;
    background: linear-gradient(-75deg, rgb(247, 243, 190), #d1d1d1);
    box-shadow: 5px 5px 5px black;
    border-radius: 15px;
}

.card-container {
    position: absolute;
    top: 25vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90vw;
}

.card-header {
    background: linear-gradient(45deg, #5EA7EC,#CE7287, #02D496);
    border: 2px dashed #5EA7EC;
    width: 281px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.card-body {
    background: linear-gradient(-75deg, rgb(247, 243, 190), #d1d1d1);
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;