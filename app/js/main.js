$( document ).ready(function() {
//    login page

    $('.login').on('click', function () {
        $('.registr-box').hide();
        $('.login-box').show();
    });

    $('.registr').on('click', function () {
        $('.login-box').hide();
        $('.registr-box').show();
    })

    $(".toggle-menu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top-menu ul a").click(function() {
        $(".top-menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top-text").css("opacity", "1");
    }).append("<span>");

    $(".toggle-menu").click(function() {
        if ($(".top-menu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top-menu").fadeOut(600);
            $(".top-menu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top-menu").fadeIn(600);
            $(".top-menu li a").addClass("fadeInUp animated");
        };
    });

    $('.wrapper_open').on('click', '.btn_open', function() {
        $(this).toggleClass('add_elevator_show').siblings('.form_hidden').slideToggle(0);
    });
    $(function () {
        $('#myTab li:first-child a').tab('show')
    })

    var containerEl = $('#calendar');

    containerEl.fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        locale: 'ru',
        defaultDate: '2018-01-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Лифт паламалося',
                start: '2018-01-01',
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-07',
                end: '2018-01-10'
            },
            {
                id: 999,
                title: 'Лифт паламалося',
                start: '2018-01-09T16:00:00'
            },
            {
                id: 999,
                title: 'Лифт паламалося',
                start: '2018-01-16T16:00:00'
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-11',
                end: '2018-01-13'
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-12T10:30:00',
                end: '2018-01-12T12:30:00'
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-12T12:00:00'
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-12T14:30:00'
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-01-12T20:00:00'
            },
            {
                title: 'Лифт паламалося',
                start: '2018-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-01-28'
            }
        ]
    })

    $('.fc-today-button').html('сегодня');
    $('.fc-month-button').html('месяц');
    $('.fc-agendaWeek-button').html('неделя');
    $('.fc-agendaDay-button').html('день');
    $('.fc-listWeek-button').html('список');
});