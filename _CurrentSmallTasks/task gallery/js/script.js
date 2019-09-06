'use strict'
// youtube api key
// AIzaSyDbXs8-kQwweTZe8POx-eJ9-EyKwEJ8F6E


window.onload = function() {
    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable",
        receive: function(event, ui) {
            if (ui.item.find("a:eq(0)").attr("data-fancybox") == "gallery1") {
                ui.item.find("a:eq(0)").attr("data-fancybox", "gallery2");
            } else {
                ui.item.find("a:eq(0)").attr("data-fancybox", "gallery1");
            }

            $("#galleries > .gallery > p:eq(0)").text(`${$("#sortable1 li").length} шт`);
            $("#galleries > .gallery > p:eq(1)").text(`${$("#sortable2 li").length} шт`);
        }
    }).disableSelection();

    var fbConfig = {
        buttons: [
            "zoom",
            "slideShow",
            "download",
            "close"
        ],
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
                NEXT: "Следующая",
                PREV: "Предыдущая",
                ERROR: "Фотография не может быть загружена. <br/> Пожалуйста, попробуйте позже.",
                PLAY_START: "Начать слайдшоу",
                PLAY_STOP: "Остановить слайдшоу",
                FULL_SCREEN: "Полный экран",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Скачать",
                SHARE: "Поделиться",
                ZOOM: "Лупа"
            }
        },
        caption: function() {
            return $(this).find('img').attr('alt');
        }
    };

    $('[data-fancybox="gallery1"]').fancybox(fbConfig);
    $('[data-fancybox="gallery2"]').fancybox(fbConfig);

    async function getVideo() {
        var y;
        fetch("https://www.googleapis.com/youtube/v3/videos?id=AAyPgEn_xAM&key=AIzaSyDbXs8-kQwweTZe8POx-eJ9-EyKwEJ8F6E&part=player,snippet,contentDetails,statistics,status").then(x=>x.json()).then(data=>{
            var elem = data.items[0].player.embedHtml;
            $("body").append(elem);
        });
        return y;
    }
    console.log(getVideo());





}
