var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default',
    navbarTransparent = 'navbar-inverse',
    
    fadeInDown = 'fadeInDown';
$document.scroll(function() {
    if ($document.scrollTop() >= 100) {
        $element.addClass(navbarTransparent);
        $element.removeClass(navbarDefault);
        
        $element.addClass(fadeInDown);
        
    } else {
        $element.addClass(navbarDefault);
        $element.removeClass(navbarTransparent);
        
        $element.removeClass(fadeInDown);
    }
    
    
    
});