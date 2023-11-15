let semanticCore = {
    Name:{
        "ua":"Олег Стецик",
        "en":"Oleh Stetsyk",
    },
    Age:{
        "ua":"Вік:",
        "en":"Age:",
    },
    Residance:{
        "ua":"Місце проживання:",
        "en":"Residance",
    },
    Languages:{
        "ua":"Мови якими я володію:",
        "en":"Languages",
    },
    English:{
        "ua":"Англійська",
        "en":"English",
    },
    Skills:{
        "ua":"Навички:",
        "en":"Skills",
    },
    I:{
        "ua":"Я Олег стецик",
        "en":"I'm Oleh Stetsyk",
    },
    Pr:{
        "ua":"Мої проекти",
        "en":"My Projects",
    },
    CrDepo:{
        "ua":"Це копія магазину одягу",
        "en":"This is a copy of a clothing site",
    },
    GrShalter:{
        "ua":"Це благодійний сайт, де ви можете пожертвувати свої кошти на допомогу тваринам",
        "en":"This is a charity site where you can donate your money to help animals",
    },
    CrTrea:{
        "ua":"Це сайт, де ви можете придбати подбати про ялинку та інші новорічні прикраси",
        "en":"This is a site where you can take care of a Christmas tree and other Christmas decorations",
    },
    Qpick:{
        "ua":"Це сайт Qpick, на якому ви можете переглядати та купувати різну продукцію Apple",
        "en":"This is a Qpick site where you can browse and buy various Apple products",
    },
    Code:{
        "ua":"Код",
        "en":"Code",
    },
}
let lang = 'en';
ua.onclick = function(){
    lang = 'ua';
    changeURL();
}
en.onclick = function(){
    lang = 'en';
    changeURL();
}
function changeURL(){
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
function cahangeLanguage(){
    let hash = (window.location.hash).substring(1);
    console.log(hash);
    for (let key in semanticCore){
        $('.lng-' + key).text(semanticCore[key][hash])
    }
}
cahangeLanguage();