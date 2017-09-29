$(function() {
    (function(){
        new WOW().init();

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return
        } else {

            $(window).on("scroll", function scrollingFunction(e) {
                var scroled = $(window).scrollTop();


                $("#first-block").css("left", (0 - (scroled*0.1)) + "%");
                $("#second-block").css("left", (70 - (scroled*0.1)) + "%");
                $("#third-block").css("left", (120 - (scroled*0.1)) + "%");
                $("#fourth-block").css("left", (205 - (scroled*0.1)) + "%");
                $("#fifth-block").css("left", (270 - (scroled*0.1)) + "%");

                $("body").css("background-position-x",(100 + (scroled * 49)) + "%");
            });

            //var scroll = [0,680,1360,2040];
            var scroll = [];
            $('.animation-block').each(function (i, el) {
                scroll.push($(this).position().top);
            })
            console.log(scroll);
            var i = 0;
            function moveNext() {
                scroll[i];
                i++;
                if (i>scroll.length - 1) {
                    i = 0;
                }
                $('html, body').animate({
                    scrollTop: scroll[i],
                }, 1000);
            }
            $('#next').on('click',moveNext ).hover( function() {
                $(this).animate({
                    width: '90px',
                    height: '38px'
                })
            }, function() {
                $(this).animate({
                    width: '65px',
                    height: '34px'
                })
            });
        }

        //TRANSLATION
        let [$name, $tecnologiesText, $howLongText, $howGoodText, $aboutMeText, $myWorksText, $myContactsText] =
            [$('.name'), $('.tecnoligies-text'), $('.how-long-text'), $('.how-good-text'), $('.about-me-text'),
                $('.my-works-text'), $('.my-contacts-text')];
        let iter = 0;


        function translateText() {
            let _this = $(this);

            $.get('../language/lang.json', function(data) {
                console.log(_this);
                console.log(data.eng.name);

                if(iter === 0) {
                    iter++
                    console.log('not working');
                } else {
                    console.log('working');
                    localStorage.setItem('language', _this.data('lang'));
                }


                if(localStorage.getItem('language') === 'eng') {
                    $name.text(data.eng.name);
                    $tecnologiesText.text(data.eng.tecnologies);
                    $howLongText.text(data.eng.howLong);
                    $howGoodText.text(data.eng.howGood);
                    $aboutMeText.text(data.eng.aboutMe);
                    $myWorksText.text(data.eng.myWorks);
                    $myContactsText.text(data.eng.myContacts);
                } else if (localStorage.getItem('language') === 'ukr') {
                    $name.text(data.ukr.name);
                    $tecnologiesText.text(data.ukr.tecnologies);
                    $howLongText.text(data.ukr.howLong);
                    $howGoodText.text(data.ukr.howGood);
                    $aboutMeText.text(data.ukr.aboutMe);
                    $myWorksText.text(data.ukr.myWorks);
                    $myContactsText.text(data.ukr.myContacts);
                } else {
                    $name.text(data.eng.name);
                    $tecnologiesText.text(data.eng.tecnologies);
                    $howLongText.text(data.eng.howLong);
                    $howGoodText.text(data.eng.howGood);
                    $aboutMeText.text(data.eng.aboutMe);
                    $myWorksText.text(data.eng.myWorks);
                    $myContactsText.text(data.eng.myContacts);
                }

            })
        }

        $('#language-list').find('a').on('click', translateText);

        translateText();

    })()
});
