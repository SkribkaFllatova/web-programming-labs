function showDate () {
    let RU = document.getElementById("current-dateRU");
    let todayRU = new Date();
    RU.innerHTML = 'Дата и время для русской локали: ' + todayRU.toLocaleString("ru-RU");
    
    let ZA = document.getElementById("current-dateZA");
    let todayZA = new Date();
    ZA.innerHTML = 'Дата и время для африканской локали: ' + todayZA.toLocaleString("af-ZA");

    let CA = document.getElementById("current-dateCA");
    let todayCA = new Date();
    CA.innerHTML = 'Дата и время для африканской локали: ' + todayCA.toLocaleString("en-CA");

    let PA = document.getElementById("current-datePA");
    let todayPA = new Date();
    PA.innerHTML = 'Дата и время для африканской локали: ' + todayPA.toLocaleString("es-PA");

    let EE = document.getElementById("current-dateEE");
    let todayEE = new Date();
    EE.innerHTML = 'Дата и время для африканской локали: ' + todayEE.toLocaleString("et-EE");

    let BE = document.getElementById("current-dateBE");
    let todayBE = new Date();
    BE.innerHTML = 'Дата и время для африканской локали: ' + todayBE.toLocaleString("fr-BE");
}