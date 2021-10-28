$(function () {
    // loader
    // $(window).on("load", function() {
    //     setTimeout(function(){
    //         $('.loader').fadeToggle();
    //     },2500);
    // });

    // box shadow on scroll logic
    $(window).scroll(function () {
        $('nav.navbar').toggleClass('scrolled', $(this).scrollTop() > 80);
    });
    
    // owlCarousel sliders
    $('#slider-carousel').owlCarousel({
        items:1,
        margin:0,
        autoplay:false,
        autoplayHoverPause:true
    });
    $('#offers-carousel').owlCarousel({
        items:3,
        margin:5,
        center:true,
        loop:true,
        dots:true,
        autoplay:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            660:{
                items:2,
                center:false
            },
            950:{
                items:3
            }
        }   
    });
    $('#clients-carousel').owlCarousel({
        items:3,
        margin:2,
        center:true,
        loop:true,
        autoplay:false,
        dots:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:3
            }
        }
    });
    $('#reservation-slider').owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:false,
        dots:false,
        autoplayHoverPause:true
    });
    $('#landing-offers-carousel').owlCarousel({
        items:1,
        margin:0,
        nav: true,
        loop:true,
        autoplay:false,
        dots:true,
        autoplayHoverPause:true
    });
    $('#blog-carousel').owlCarousel({
        items:3,
        margin:5,
        center:true,
        loop:true,
        dots:true,
        autoplay:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            660:{
                items:2,
                center:false
            },
            950:{
                items:3
            }
        }   
    });
    $('#ad-slider').owlCarousel({
        items:1,
        margin:0,
        dots:false,
        nav:false,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true
    });
    $('#related-posts').owlCarousel({
        items:3,
        margin:0,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:3
            }
        }  
    });
    $('#related-products').owlCarousel({
        items:3,
        margin:5,
        center:true,
        loop:true,
        dots:true,
        autoplay:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            950:{
                items:3
            }
        }   
    });
    $('#reviews-carousel').owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:false,
        dots:true,
        autoplayHoverPause:true
    });
    $('#four-items-carousel').owlCarousel({
        items:4,
        margin:1,
        dots:true,
        autoplay:false
    });
    
    // outlets toggle logic
    $('#logo-1').on('click', function(){
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.914039724503!2d36.88701894972713!3d-1.2198905991058548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc955678a67%3A0x2c30e07746ac972a!2sTRM%20-%20Thika%20Road%20Mall!5e0!3m2!1sen!2ske!4v1600327082693!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-2').on('click', function(){
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-2.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6835090272525!2d-79.38144247516968!3d43.65475267862701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cad13905ff%3A0xfba1e6ac7018788a!2sYonge-Dundas%20Square!5e0!3m2!1sen!2ske!4v1617924122819!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-3').on('click', function(){
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-3.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.8283433844596!2d-79.37847373753499!3d43.641648079019184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2bab536dab%3A0x5e5e276f1cba8227!2sWaterfront%20Toronto!5e0!3m2!1sen!2ske!4v1617924288425!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-4').on('click', function(){
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-4.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11761.066419243925!2d-78.48870456218722!3d42.528391084596954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d2527ee01f6a83%3A0xd354a0eb44bf8404!2sYorkshire%20Plaza!5e0!3m2!1sen!2ske!4v1617924519209!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-5').on('click', function(){
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-5.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25213.403355980357!2d144.9441226574577!3d-37.82107099768434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d79772beae8c018!2sGalleria%20Shopping%20Plaza!5e0!3m2!1sen!2ske!4v1617924628960!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-6').on('click', function(){
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-1.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51555.36036232183!2d-115.16434169705067!3d36.13709923388911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4b555ef66f741be9!2sGrand%20Canal%20Shoppes%20at%20The%20Venetian%20Resort%20Las%20Vegas!5e0!3m2!1sen!2ske!4v1617924751495!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // single product page Add ons images toggle logic
    $('#cheese').on('click', function(){
        addons();    
    });
    $('#pepper').on('click', function(){
        addons();    
    });
    $('#sauce').on('click', function(){
        addons();    
    });
    const addons = () => {
        let cheese = $('#cheese')
        let pepper = $('#pepper')
        let sauce = $('#sauce')
        let normal = $('#variant-1').attr('src')
        let cheeseSrc = $('#variant-2').attr('src')
        let cheesePepperSrc = $('#variant-3').attr('src')
        let cheesePepperSauceSrc = $('#variant-4').attr('src')
        let cheeseSauceSrc = $('#variant-5').attr('src')
        let sauceSrc = $('#variant-6').attr('src')
        let pepperSrc = $('#variant-7').attr('src')
        let pepperSauceSrc = $('#variant-8').attr('src')

        if(cheese.is(':checked') && pepper.is(':checked') && sauce.is(':checked')){
            $('#infocus-product').attr('src', cheesePepperSauceSrc);      
        }
        else if(cheese.is(':checked') && pepper.is(':checked')){
            $('#infocus-product').attr('src', cheesePepperSrc);      
        }
        else if(cheese.is(':checked') && sauce.is(':checked')){
            $('#infocus-product').attr('src', cheeseSauceSrc);      
        }
        else if(sauce.is(':checked') && pepper.is(':checked')){
            $('#infocus-product').attr('src', pepperSauceSrc);      
        }
        else if (cheese.is(':checked')) {
            $('#infocus-product').attr('src', cheeseSrc);    
        }
        else if (pepper.is(':checked')) {
            $('#infocus-product').attr('src', pepperSrc);    
        }
        else if (sauce.is(':checked')) {
            $('#infocus-product').attr('src', sauceSrc);    
        } 
        else{
            $('#infocus-product').attr('src', normal)
        }
    }

    // checkout payment content radio tabs logic
    $('.payment-content > div').hide();
    $('.payment-content > div:first-child').show();
    
    $('.tab-radio').click(function(){
        var activeRadio = $(this).attr('data-radio');
        $('.payment-content > div').hide();
        $('.' + activeRadio).show();
    });

    // fetching meal products resources
    mealsList = $('.meals');
    let url = "http://127.0.0.1:5000/api/v1/meals";
    output = "";
    let mealCatalog = products => {
        products.forEach(product => {
            output += `
            <div class="meal">
                <div class="d-flex flex-column align-items-center text-center p-0 mb-5">
                    <div class="col text-left">
                        <div class="image-wrapper menu-img mx-auto">
                            <a href="single-product.html" class="">
                                <img src="${product.image_url}" alt="${product.name} flavoured pizza image" class="product-img circular mb-1">
                            </a>
                        </div>
                    </div>
                    <div class="meal-text">
                        <h6 class="font-weight-bold my-2">${product.name}</h6>
                        <span class="font-weight-bold">$${product.price}</span>
                        <p class="">
                            ${product.description}
                        </p>
                        <button class="btn regular-btn"><i class="fas fa-shopping-bag fa-sm tangerine mr-2"></i> Add to Cart</button>  
                    </div>
                </div>
            </div>
        `;
        });
        mealsList.append(output)
    }
    fetch(url, {
        mode: 'cors'
    })
    .then(response => {
        return response.json()
    })
    .then((data) => {
        mealCatalog(data);
        let itemsTally = data.length;
        let limit = 9;
        let totalPages = Math.ceil((itemsTally/limit));
        $('.active .meals .meal').slice(limit).hide(); 
        $('.menu-tab').each(function (){
            $('.menu-tab .tab-pane #paginate').append('<li id="prev" class="mr-1 regular-btn circular d-flex justify-content-center"><a class="font-weight-bold text-center"><span class="" aria-label="Previous">‹‹</span></a></li>')
            $('.menu-tab .tab-pane #paginate').append('<li class="circular d-flex justify-content-center current-page active"><a href="javascript:void(0)">1</a></li>')
            for (let i = 2; i <= totalPages; i++) {
                $('.menu-tab .tab-pane #paginate').append('<li class="d-flex justify-content-center circular current-page"><a href="javascript:void(0)">' + i + '</a></li>');   
            }
            $('.menu-tab .tab-pane #paginate').append('<li class="regular-btn ml-1 circular d-flex justify-content-center" id="nxt"><a class="font-weight-bold text-center"><span class="" aria-label="Next">››</span></a></li>');
            $('.menu-tab .tab-pane #paginate li.current-page').on('click', function () {
                if ($(this).hasClass('active')) {
                    return false;
                } else {
                    let currentPage = $(this).index();
                    $('.menu-tab .tab-pane #paginate li').removeClass('active');
                    $(this).addClass('active');
                    $('.active .meals .meal').hide();
                    let overallTotal = limit * currentPage;
                    for (let i = overallTotal - limit; i < overallTotal; i++) {
                        $('.active .meals .meal:eq('+ i +')').show();    
                    }
                }
            });
            $('.menu-tab .tab-pane #paginate #nxt').on('click', function () {
                let curPage = $('.menu-tab .tab-pane #paginate li.active').index();
                if (curPage == totalPages) {
                    return false;
                } else {
                    curPage++;
                    $('.menu-tab .tab-pane #paginate li').removeClass('active');
                    $('.active .meals .meal').hide();
                    let overallTotal = limit * curPage;
                    for (let i = overallTotal - limit; i < overallTotal; i++) {
                        $('.active .meals .meal:eq('+ i +')').show();    
                    }
                    $('.menu-tab .tab-pane #paginate li.current-page:eq('+ (curPage - 1) +')').addClass('active');
                }
            });
            $('.menu-tab .tab-pane #paginate #prev').on('click', function () {
                let curPage = $('.menu-tab .tab-pane #paginate li.active').index();
                if (curPage == 1) {
                    return false;
                } else {
                    curPage--;
                    $('.menu-tab .tab-pane #paginate li').removeClass('active');
                    $('.active .meals .meal').hide();
                    let overallTotal = limit * curPage;
                    for (let i = overallTotal - limit; i < overallTotal; i++) {
                        $('.active .meals .meal:eq('+ i +')').show();    
                    } 
                    $('.menu-tab .tab-pane #paginate li.current-page:eq('+ (curPage - 1) +')').addClass('active');
                }
            });
        }); 
    });

    // Login/fetch authorization token
    const loginUrl = "http://127.0.0.1:5000/api/v1/login";
    $('#Login').submit(function (e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let loginPayload = {};
        formData.forEach((value, key) => (loginPayload[key] = value));
        fetch(loginUrl, {
            mode: "cors",
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginPayload)
        }).then( response => {
            return response.json();
        }).then( data => {
            if ("message" in data) {
                if ($('.form-row').length == 4){
                    let failAuth = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data.message}</div></div></div>`;
                    $(failAuth).insertBefore('#submit');
                    // $('form#Login').reset();
                }
                $('form#Login').reset();
            } else {
                // location.replace('offers-landing.html');
                console.log(data);
            } 
        }).catch(error => {
            if ($('.form-row').length == 4) {
                let err = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${error}</div></div></div>`;
                $(err).insertBefore('#submit');
            } else {
                return false;
            }
        });
    });

    // Account creation using fetch
    const signupUrl = "http://127.0.0.1:5000/api/v1/register"
    $('#signup').submit(function (e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let signupPayload = {};
        formData.forEach((value, key) => (signupPayload[key] = value));
        // console.log(signupPayload);
        fetch(signupUrl, {
            mode: "cors",
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupPayload)
        }).then(response => {
            return response.json()
        }).then(data => {
            $('#signup div.err').remove();
            if ("_schema" in data) {
                if (data._schema[0] == "username already taken.") {
                    let failedSignup = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data._schema[0]}</div></div></div>`;
                    $(failedSignup).insertAfter('#username-row');
                } else {
                    let failedSignup = `<div class="err form-row justify-content-center"><div class="form-group col-md-9"><div class="alert alert-danger" role="alert">${data._schema[0]}</div></div></div>`;
                    $(failedSignup).insertBefore('#submit');
                }
            } else if (Object.keys(data).length == 1 && "email" in data) {
                let failedSignup = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data.email[0]}</div></div></div>`;
                $(failedSignup).insertAfter('#email-row');
            } else if (Object.keys(data).length == 1 && "username" in data) {
                let failedSignup = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data.username[0]}</div></div></div>`;
                $(failedSignup).insertAfter('#username-row');
            } else if (Object.keys(data).length == 1 && "password" in data) {
                let failedSignup = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data.username[0]}</div></div></div>`;
                $(failedSignup).insertAfter('#password-row');
            } else if (Object.keys(data).length == 1 && "confirm_password" in data) {
                let failedSignup = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data.username[0]}</div></div></div>`;
                $(failedSignup).insertAfter('#confirm-row');
            } else {
                console.log(data)
                let account = `<div class="account form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-success" role="alert">Account ${data.username} created successfuly, access the login page <a href="login.html">here</a></div></div></div>`;
                $(account).insertBefore('#username-row');
                // location.replace('login.html');
            }
        }).catch(error => {
            if ($('.form-row').length == 4) {
                let err = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${error}</div></div></div>`;
                $(err).insertBefore('#submit');
            } else {
                return false;
            }
        });
    });
    //fetch reservations
    $('.get-reservations').on('click', function () {
        let reservationsUrl = "http://127.0.0.1:5000/api/v1/reservations"
        fetch(reservationsUrl,{
            mode: "cors",
            credentials: "include"
        }).then( response => {
            return response.json();
        }).then( data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    })
});