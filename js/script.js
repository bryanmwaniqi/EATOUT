$(function () {
    // loader
    // $(window).on("load", function() {
    //     setTimeout(function(){
    //         $('.loader').fadeToggle();
    //     },2500);
    // });

    // localStorage.removeItem("shoppingcart")
    verify()
    var isLoggedIn = localStorage.getItem('loggedin');
    var token;
    var cart = [];
    updateTally()
    var verifyUrl = "https://pizza-eatout.herokuapp.com/api/v1/verify"
    updateSingleProduct()
    
    if (window.location.pathname == "/checkout.html") {
        if (!isLoggedIn) {
            location.replace("login.html");
        } 
    }
    
    if (isLoggedIn) {
        $('a.logged-out').addClass('d-none');
        $('button.logged-in').removeClass('d-none');
    } else {
        $('a.logged-out').removeClass('d-none');
        $('.logged-in').addClass('d-none');
    }

    // box shadow on scroll logic
    $(window).scroll(function () {
        $('nav.navbar').toggleClass('scrolled', $(this).scrollTop() > 80);
    });

    // owlCarousel sliders
    $('#slider-carousel').owlCarousel({
        items: 1,
        margin: 0,
        autoplay: false,
        autoplayHoverPause: true
    });
    $('#offers-carousel').owlCarousel({
        items: 3,
        margin: 5,
        center: true,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            660: {
                items: 2,
                center: false
            },
            950: {
                items: 3
            }
        }
    });
    $('#clients-carousel').owlCarousel({
        items: 3,
        margin: 2,
        center: true,
        loop: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 3
            }
        }
    });
    $('#reservation-slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true
    });
    $('#landing-offers-carousel').owlCarousel({
        items: 1,
        margin: 0,
        nav: true,
        loop: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true
    });
    $('#blog-carousel').owlCarousel({
        items: 3,
        margin: 5,
        center: true,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            660: {
                items: 2,
                center: false
            },
            950: {
                items: 3
            }
        }
    });
    $('#ad-slider').owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true
    });
    $('#related-posts').owlCarousel({
        items: 3,
        margin: 0,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 3
            }
        }
    });
    $('#related-products').owlCarousel({
        items: 3,
        margin: 5,
        center: true,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            950: {
                items: 3
            }
        }
    });
    $('#reviews-carousel').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true
    });
    $('#four-items-carousel').owlCarousel({
        items: 4,
        margin: 1,
        dots: true,
        autoplay: false
    });

    // outlets toggle logic
    $('#logo-1').on('click', function () {
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.914039724503!2d36.88701894972713!3d-1.2198905991058548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc955678a67%3A0x2c30e07746ac972a!2sTRM%20-%20Thika%20Road%20Mall!5e0!3m2!1sen!2ske!4v1600327082693!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-2').on('click', function () {
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-2.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6835090272525!2d-79.38144247516968!3d43.65475267862701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cad13905ff%3A0xfba1e6ac7018788a!2sYonge-Dundas%20Square!5e0!3m2!1sen!2ske!4v1617924122819!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-3').on('click', function () {
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-3.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.8283433844596!2d-79.37847373753499!3d43.641648079019184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2bab536dab%3A0x5e5e276f1cba8227!2sWaterfront%20Toronto!5e0!3m2!1sen!2ske!4v1617924288425!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-4').on('click', function () {
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-4.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11761.066419243925!2d-78.48870456218722!3d42.528391084596954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d2527ee01f6a83%3A0xd354a0eb44bf8404!2sYorkshire%20Plaza!5e0!3m2!1sen!2ske!4v1617924519209!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-5').on('click', function () {
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-5.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25213.403355980357!2d144.9441226574577!3d-37.82107099768434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d79772beae8c018!2sGalleria%20Shopping%20Plaza!5e0!3m2!1sen!2ske!4v1617924628960!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('#logo-6').on('click', function () {
        $('.restaurant-img').attr('src', 'assets/pizza-restaurant-outlet-1.jpg');
        $('.restaurant-gps').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51555.36036232183!2d-115.16434169705067!3d36.13709923388911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4b555ef66f741be9!2sGrand%20Canal%20Shoppes%20at%20The%20Venetian%20Resort%20Las%20Vegas!5e0!3m2!1sen!2ske!4v1617924751495!5m2!1sen!2ske');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // single product page Add ons images toggle logic
    $('#cheese').on('click', function () {
        addons();
    });
    $('#pepper').on('click', function () {
        addons();
    });
    $('#sauce').on('click', function () {
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

        if (cheese.is(':checked') && pepper.is(':checked') && sauce.is(':checked')) {
            $('#infocus-product').attr('src', cheesePepperSauceSrc);
        }
        else if (cheese.is(':checked') && pepper.is(':checked')) {
            $('#infocus-product').attr('src', cheesePepperSrc);
        }
        else if (cheese.is(':checked') && sauce.is(':checked')) {
            $('#infocus-product').attr('src', cheeseSauceSrc);
        }
        else if (sauce.is(':checked') && pepper.is(':checked')) {
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
        else {
            $('#infocus-product').attr('src', normal)
        }
    }

    // checkout payment content radio tabs logic
    $('.payment-content > div').hide();
    $('.payment-content > div:first-child').show();

    $('.tab-radio').click(function () {
        var activeRadio = $(this).attr('data-radio');
        $('.payment-content > div').hide();
        $('.' + activeRadio).show();
    });

    // shopping cart catalog
    shoppingCartList = $('#cart-body')
    cartOutput = "";
    let orderTotal = 0;
    let cartCatalog = products => {
        if (localStorage.getItem("shoppingcart")) {
            products.forEach(product => {
                cartOutput += `
                <tr>
                    <td class="cart-product d-flex align-middle">
                        <img id="" class="circular cart-image mr-4" src="${product.image_url}" alt="${product.name} flavoured pizza image"> 
                        <div class="d-flex flex-column p-0">
                            <h5>${product.name}</h5>
                            <p class="mb-1 text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Maiores facilis  
                            </p>
                            <span class="tangerine">$ <span class="tangerine">${product.price}</span></span>
                        </div>  
                    </td>
                    <td class="align-middle">
                        <div class="d-flex justify-content-center align-items-center">
                            <span id="subtraction" class="mb-0 mr-2 font-weight-bold" aria-label="decrement">&lt;</span>
                            <p class="product-tally mx-1 px-auto mb-0 py-auto">${product.product_tally}</p>
                            <span id="addition"  class="ml-2 font-weight-bold" aria-label="increment">&gt;</span>
                        </div>
                    </td>
                    <td  id="item-subtotal" class="font-weight-bold tangerine align-middle">
                        $ <span class="font-weight-bold tangerine">${product.price * product.product_tally}</span> 
                    </td>
                    <td  class="bin align-middle">
                        <i class="fas fa-trash-alt fa-lg text-muted delete"></i>
                    </td>
                </tr>
            `;
                orderTotal += (product.price * product.product_tally)
            });
        }
        if (cartOutput.length === 0) {
            cartOutput += ` 
            <tr>
                <td colspan="4"><h4 class="mt-5 mb-4">Your cart is empty. navigate to <a href="menu.html">menu</a> page to shop</h4></td>
            </tr>
            `
        }
        shoppingCartList.append(cartOutput);
        $('span.overall-total').html(orderTotal)
    }
    cartCatalog(JSON.parse(localStorage.getItem("shoppingcart")));

    // deleting item from cart
    $('.delete').on('click', function (e) {
        let targetName = $(this).parent().siblings('td.cart-product').children('div').children('h5').text();
        let shoppinglist = JSON.parse(localStorage.getItem('shoppingcart'));
        let result = shoppinglist.filter(product => product.name !== targetName);
        localStorage.setItem('shoppingcart', JSON.stringify(result));
        updateTally();
        let sub = $(this).parent().siblings('td#item-subtotal').children().text();
        let subint = parseFloat(sub);
        console.log()
        let ov = parseFloat($('span.overall-total:eq(-1)').text()) - subint;
        $('span.overall-total').html(ov)
        $(this).parent().parent().remove();
        
    })
    // incrementing product tally
    $('span#addition').on('click', function (e) {
        let targetName = $(this).parent().parent().siblings('td.cart-product').children('div').children('h5').text()
        let shoppinglist = JSON.parse(localStorage.getItem('shoppingcart'));
        shoppinglist.forEach(function (product) {
            if (targetName === product.name) {
                product.product_tally += 1;
            }
        })
        localStorage.setItem('shoppingcart', JSON.stringify(shoppinglist))
        updateTally();
        let tally = $(this).siblings('p').text();
        let newTally = parseInt(tally) + 1;
        $(this).siblings('p').html(newTally);
        let price = $(this).parent().parent().siblings('td.cart-product').children('div').children('span').children('span').text();
        let subtotal = $(this).parent().parent().siblings('td#item-subtotal').children('span').text();
        $(this).parent().parent().siblings('td#item-subtotal').children('span').html(parseFloat(subtotal) + parseFloat(price));
        let newTotal = parseFloat(price) + parseFloat($('span.overall-total:eq(-1)').text());
        $('span.overall-total').html(newTotal);
    })

    // decrementing product tally 
    $('span#subtraction').on('click', function (e) {
        let targetName = $(this).parent().parent().siblings('td.cart-product').children('div').children('h5').text();
        let shoppinglist = JSON.parse(localStorage.getItem('shoppingcart'));
        shoppinglist.forEach(function (product) {
            if (targetName === product.name) {
                if (product.product_tally > 1) {
                    product.product_tally -= 1;
                } else {
                    shoppinglist.splice(shoppinglist.indexOf(product), 1)
                }
            }
        })
        localStorage.setItem('shoppingcart', JSON.stringify(shoppinglist));
        updateTally();
        let price = $(this).parent().parent().siblings('td.cart-product').children('div').children('span').children('span').text();
        let subtotal = $(this).parent().parent().siblings('td#item-subtotal').children('span').text();
        if (parseFloat(price) === parseFloat(subtotal)) {
            let newTotal = parseFloat($('span.overall-total:eq(-1)').text()) - parseFloat(price);
            $('span.overall-total').html(newTotal);
            $(this).parent().parent().parent().remove();
        } else {
            let tally = $(this).siblings('p').text();
            let newTally = parseInt(tally) - 1;
            $(this).siblings('p').html(newTally);
            $(this).parent().parent().siblings('td#item-subtotal').children('span').html(parseFloat(subtotal) - parseFloat(price));
            let newTotal = parseFloat($('span.overall-total:eq(-1)').text()) - parseFloat(price);
            $('span.overall-total').html(newTotal);
        }    
    })

    // fetching meal products resources
    mealsList = $('.meals');
    let url = "https://pizza-eatout.herokuapp.com/api/v1/meals";
    output = "";
    let mealCatalog = products => {
        products.forEach(product => {
            output += `
            <div class="meal">
                <div class="d-flex flex-column align-items-center text-center p-0 mb-5">
                    <div class="col text-left">
                        <div class="image-wrapper menu-img mx-auto">
                            <a href="#" class="single-product">
                                <img src="${product.image_url}" alt="${product.name} flavoured pizza image" class="product-img circular mb-1">
                            </a>
                        </div>
                    </div>
                    <div class="meal-text">
                        <h6 class="font-weight-bold my-2">${product.name}</h6>
                        <span class="font-weight-bold">$ <span>${product.price}</span></span>
                        <p class="">
                            ${product.description}
                        </p>
                        <button class="btn regular-btn cart"><i class="fas fa-shopping-bag fa-sm tangerine mr-2"></i> Add to Cart</button>  
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
            let totalPages = Math.ceil((itemsTally / limit));
            $('.active .meals .meal').slice(limit).hide();
            $('.menu-tab').each(function () {
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
                            $('.active .meals .meal:eq(' + i + ')').show();
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
                            $('.active .meals .meal:eq(' + i + ')').show();
                        }
                        $('.menu-tab .tab-pane #paginate li.current-page:eq(' + (curPage - 1) + ')').addClass('active');
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
                            $('.active .meals .meal:eq(' + i + ')').show();
                        }
                        $('.menu-tab .tab-pane #paginate li.current-page:eq(' + (curPage - 1) + ')').addClass('active');
                    }
                });
            });
            // Add to cart button functionality
            $("button.cart").on('click', function (e) {
                let item = {
                    name: $(this).siblings('h6').text(),
                    product_tally: 1,
                    image_url: $(this).parent().siblings('div').children().children().children().attr('src'),
                    price: $(this).siblings('span').children('span').text()
                }
                if (JSON.parse(localStorage.getItem("shoppingcart")) === null) {
                    cart.push(item);
                    localStorage.setItem("shoppingcart", JSON.stringify(cart));
                } else {
                    let items = [];
                    const cartItems = JSON.parse(localStorage.getItem('shoppingcart'));
                    cartItems.map(dataItem => {
                        if (item.name === dataItem.name) {
                            item.product_tally = dataItem.product_tally + 1;
                        } else {
                            items.push(dataItem);
                        }
                    })
                    items.push(item);
                    localStorage.setItem("shoppingcart", JSON.stringify(items));
                    console.log(JSON.parse(localStorage.getItem('shoppingcart')))
                }
                updateTally()
            });

            // onclick event handler for food items
            $('a.single-product').on('click', function (e) {
                let foodName = $(this).parent().parent().siblings('.meal-text').children('h6').text();
                let foodItems = JSON.parse(localStorage.getItem('shoppingcart'));
                let foodQuantity = 0;
                foodItems.map(dataItem => {
                    if (foodName === dataItem.name) {
                        foodQuantity = dataItem.product_tally;
                    } 
                })
                let foodItem = {
                    name: $(this).parent().parent().siblings('.meal-text').children('h6').text(),
                    image_url: $(this).children('img').attr('src'),
                    description: $(this).parent().parent().siblings('.meal-text').children('p').text(),
                    price: $(this).parent().parent().siblings('.meal-text').children('span').children('span').text(),
                    quantity: foodQuantity
                }
                localStorage.setItem("loadedproduct", JSON.stringify(foodItem));
                location.replace('single-product.html');    
            })
        });

    // Login/fetch authorization token
    const loginUrl = "https://pizza-eatout.herokuapp.com/api/v1/login";
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
        }).then(response => {
            return response.json();
        }).then(data => {
            if ("message" in data) {
                if ($('.form-row').length == 4) {
                    let failAuth = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data.message}</div></div></div>`;
                    $(failAuth).insertBefore('#submit');
                }
                $('form#Login').reset();
            } else {
                localStorage.setItem('loggedin', 1)
                localStorage.setItem('username', data.username)
                isLoggedIn = localStorage.getItem('loggedin');
                $('a.logged-out').addClass('d-none');
                $('button.logged-in').removeClass('d-none');
                location.replace('index.html');
                console.log(data);
            }
        }).catch(error => {
            if ($('.form-row').length == 4) {
                let err = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">something went wrong when connecting to server</div></div></div>`;
                $(err).insertBefore('#submit');
            } else {
                return false;
            }
        });
    });

    // Account creation using fetch
    const signupUrl = "https://pizza-eatout.herokuapp.com/api/v1/register"
    $('#signup').submit(function (e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let signupPayload = {};
        formData.forEach((value, key) => (signupPayload[key] = value));
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
                let err = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">something went wrong when connecting to server</div></div></div>`;
                $(err).insertBefore('#submit');
            } else {
                return false;
            }
        });
    });
    function getCookie(name) {
        let cookies = window.document.cookie.split(";")
        let cookieVal;
        for (let element of cookies) {
            value = element.split("=");
            if (value[0] == name) {
                cookieVal = value[1];
                break;
            }
        }
        return cookieVal
    }

    //fetch reservations for logged in user
    $('.get-reservations').on('click', function () {
        token = getCookie("csrf_access_token");
        let reservationsUrl = "https://pizza-eatout.herokuapp.com/api/v1/reservations"
        fetch(reservationsUrl, {
            mode: "cors",
            credentials: "include",
            headers: {
                "x-csrf-token": token
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    })

    // test current user function
    function verify() {
        token = getCookie("csrf_access_token");
        fetch(verifyUrl, {
            mode: "cors",
            credentials: "include",
            headers: {
                "x-csrf-token": token
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            if (data.status == "logged-in") {
                localStorage.setItem('loggedin', 1)
                localStorage.setItem('username', data.username)
                isLoggedIn = localStorage.getItem('loggedin')
                $('a.logged-out').addClass('d-none');
                $('button.logged-in').removeClass('d-none');
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('loggedin');
                isLoggedIn = localStorage.getItem('loggedin')
                $('a.logged-out').removeClass('d-none');
                $('.logged-in').addClass('d-none');
            }
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }

    // checkout link functionality
    $('#checkout-btn').on('click', function () {
        verify();
        if (isLoggedIn) {
            location.replace('checkout.html');
            console.log(isLoggedIn)
        } else {
            location.replace('login.html');
        }
    })

    // Reserve date future date only functionality
    var now = new Date(),
        // minimum date the user can choose, in this case now and in the future
        minDate = now.toISOString().substring(0, 10);

    $('.reservation-date').prop('min', minDate);

    // Making Reservations with fetch
    const reserveUrl = "https://pizza-eatout.herokuapp.com/api/v1/reservations"
    $('#reservations-form').submit(function (e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let reservationsPayload = {};
        formData.forEach((value, key) => (reservationsPayload[key] = value));
        reservationsPayload.table_no = parseInt(reservationsPayload.table_no)
        reservationsPayload.persons = parseInt(reservationsPayload.persons)
        let reservations = []
        reservations.push(reservationsPayload)
        fetch(reserveUrl, {
            mode: "cors",
            method: "POST",
            credentials: "include",
            headers: {
                "x-csrf-token": token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservations)
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            $('#reservations-form div.err').remove();
            if (Array.isArray(data) == true) {
                let reservation = `<div class="reservation form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-success" role="alert">Table reserved successfully for date ${data[0].reservation_date}</div></div></div>`;
                $(reservation).insertBefore('#tableno-row');
            } else {
                if ("0" in data) {
                    if (data["0"]._schema[0] == "You can only reserve from Table 1 - 20") {
                        let failedReservation = `<div class="err form-row justify-content-center"><div class="form-group col-md-6"><div class="alert alert-danger" role="alert">${data["0"]._schema[0]}</div></div></div>`;
                        $(failedReservation).insertAfter('#tableno-row');
                    } else if (data["0"]._schema[0] == "Table accomodates atleast 1 person and at most 6") {
                        let failedReservation = `<div class="err form-row justify-content-center"><div class="form-group col-md-9"><div class="alert alert-danger" role="alert">${data["0"]._schema[0]}</div></div></div>`;
                        $(failedReservation).insertAfter('#tableno-row');
                    } else {
                        let failedReservation = `<div class="err form-row justify-content-center"><div class="form-group col-md-9"><div class="alert alert-danger" role="alert">${data["0"]._schema[0]}</div></div></div>`;
                        $(failedReservation).insertBefore('#reserve-submit');
                    }
                }
            }
        })
    });

    // logout functionality
    const logoutUrl = "https://pizza-eatout.herokuapp.com/api/v1/logout"
    $('button#logout').on('click', function (e) {
        token = getCookie("csrf_access_token");
        fetch(logoutUrl, {
            mode: "cors",
            credentials: "include",
            headers: {
                "x-csrf-token": token
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            localStorage.removeItem('username')
            localStorage.removeItem('loggedin')
            $('a.logged-out').removeClass('d-none');
            $('.logged-in').addClass('d-none');
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    })

    // shopping cart icon tally functionality
    function updateTally() {
        if (localStorage.getItem("shoppingcart") !== null) {
            cartTally = $('.cart-item');
            let tally = 0;
            JSON.parse(localStorage.getItem("shoppingcart")).map(data => {
                tally = tally + data.product_tally
            })
            cartTally.html(tally)
        }
    }

    // single product page template populating function
    function updateSingleProduct() {
        let loadedItem = JSON.parse(localStorage.getItem("loadedproduct"));
        if (loadedItem) {
            $('#infocus-product').attr('src', loadedItem.image_url);
            $('.food-price').html(loadedItem.price);
            $('.food-description').html(loadedItem.description);
            $('.food-name').html(loadedItem.name);
            $('.food-quantity').html(loadedItem.quantity);
        }
    }

    // increment product tally in single page product
    $('.increment').on('click', function (e) {
        let loadedItem = JSON.parse(localStorage.getItem('loadedproduct'));
        let targetName = loadedItem.name;
        let shoppinglist = JSON.parse(localStorage.getItem('shoppingcart'));
        if ($('.food-quantity').text() == 0) {
            let foodItem = {
                name: loadedItem.name,
                product_tally: 1,
                image_url: loadedItem.image_url,
                price: loadedItem.price
            }
            shoppinglist.push(foodItem);
            loadedItem.quantity += 1
            $('.food-quantity').html(foodItem.product_tally)
            
        } else {
            shoppinglist.forEach(function (product) {
                if (targetName === product.name) {
                    product.product_tally += 1;
                    loadedItem.quantity = product.product_tally
                    $('.food-quantity').html(product.product_tally)
                }
            })
        }
        
        localStorage.setItem('shoppingcart', JSON.stringify(shoppinglist));
        localStorage.setItem('loadedproduct', JSON.stringify(loadedItem));
        updateTally();
    })

    // decrement product tally in single page product
    $('span#decrement').on('click', function (e) {
        let loadedItem = JSON.parse(localStorage.getItem('loadedproduct'));
        let targetName = loadedItem.name;
        let shoppinglist = JSON.parse(localStorage.getItem('shoppingcart'));
        shoppinglist.forEach(function (product) {
            if (targetName === product.name) {
                if (product.product_tally > 1) {
                    product.product_tally -= 1;
                    loadedItem.quantity = product.product_tally
                    $('.food-quantity').html(product.product_tally)
                } else {
                    shoppinglist.splice(shoppinglist.indexOf(product), 1)
                    loadedItem.quantity = 0
                    $('.food-quantity').html(0)
                }
            }
        })
        localStorage.setItem('shoppingcart', JSON.stringify(shoppinglist));
        localStorage.setItem('loadedproduct', JSON.stringify(loadedItem));
        updateTally()
        // location.reload()
    })
});