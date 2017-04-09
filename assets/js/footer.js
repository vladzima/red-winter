---
---

    $('#steam_link').click(function () {
    window.location = '{{ site.data.stores[0].link }}';
    });
    $('#appstore_link').click(function () {
    window.location = '{{ site.data.stores[1].link }}';
    });
    $('#google_link').click(function () {
    window.location = '{{ site.data.stores[2].link }}';
    });
    $('#steam_link_bottom').click(function () {
    window.location = '{{ site.data.stores[0].link }}';
    });
    $('#appstore_link_bottom').click(function () {
    window.location = '{{ site.data.stores[1].link }}';
    });
    $('#google_link_bottom').click(function () {
    window.location = '{{ site.data.stores[2].link }}';
    });
    $('#presskit').click(function () {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us10.list-manage.com","uuid":"9a5cfe9aa52801ac4ad7238fd","lid":"7bdb31dbff"}) })      
    });
    $('#signup').click(function () {
    window.location = '{{ site.data.presskit_signup[1].link }}';
    });
    
    $(document).ready(function(){
    $('.press-logo').css( 'cursor', 'pointer' );
    $('.rect').css( 'cursor', 'pointer' );
    $('.client-logo').css( 'cursor', 'pointer' );
    });
