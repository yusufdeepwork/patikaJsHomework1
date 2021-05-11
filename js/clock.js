
function showTime() {
    const date = new Date();
    const hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    const minute = date.getMinutes() >= 10 ? date.getMinutes()  : `0${date.getMinutes()}`;
    const second = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    document.getElementById("myClock").innerText=`${hour}:${minute}:${second} ${days[date.getDay()]}`
}
setInterval(showTime,1000 )

setTimeout(function() {
    // Do something after 5 seconds
    document.getElementById("myName").innerText=prompt("Adınız Nedir")
}, 1000);


