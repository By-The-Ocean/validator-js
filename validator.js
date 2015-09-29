function validateAll(callback, flashWrong, FailCallback) {
    var addcss = true;
    if (addcss === true)
    {
        var css = ".wrong-input {border-color:#f66;background-color:#fdd;}";
        var tag = "<style>" + css + "</style>";
        $('body').append(tag);
        addcss = false;
    }


    var errors = 0;
    if (typeof flashWrong == 'undefined')
        flashWrong = true;
    if (typeof FailCallback == 'undefined')
        FailCallback = function () {
        }

    $('*').each(function ( ) {
        var item = $(this);
        if (item.attr('validate') !== undefined && item.is(":visible"))
        {
            var rules = item.attr('validate').split(' ');
            var R = new ValidationRules(rules, item);
            if (R.isEmpty()) {
                errors++;
                if (flashWrong)
                    flash_wrong_validation(item);
            }
            if (R.isNumber()) {
                errors++;
                if (flashWrong)
                    flash_wrong_validation(item);
            }
            if (R.notPhone()) {
                errors++;
                if (flashWrong)
                    flash_wrong_validation(item);
            }
            if (R.notEmail()) {
                errors++;
                if (flashWrong)
                    flash_wrong_validation(item);
            }
        }
    });
    if (errors === 0)
        callback( );
    else
        FailCallback();
}
function flash_wrong_validation(item) {
    item.addClass('wrong-input');
    item.unbind('focus');
    item.focus(function ( ) {
        item.removeClass('wrong-input');
    });
}


function ValidationRules(array_of_rules, item) {
    this.isEmpty = function ( ) {
        return array_of_rules.indexOf('notempty') > -1 && item.val( ).length < 1;
    };
    this.isNumber = function ( ) {
        return  array_of_rules.indexOf('number') > -1 && (item.val( ).match(/[^\d\.]/g));
    };
    this.notPhone = function ( ) {
        if (array_of_rules.indexOf('notempty') == -1 && item.val( ).length < 1)
            return false;
        if (array_of_rules.indexOf('phone') > -1)
        {
            var pattern = /(\(?\+?\(?\d+\)?)?[\d ]{5,}[\d]/i
            if (item.val( ).match(pattern) === null)
                return true
            if (item.val( ).match(pattern)[0] !== item.val( ))
                return true
            return false
        }
        return false
    };
    this.notEmail = function ( ) {
        if (array_of_rules.indexOf('notempty') == -1 && item.val( ).length < 1)
            return false;
        if (array_of_rules.indexOf('email') > -1)
        {
            var pattern = /[\w\d]+\@[\w\d]+\.[^\d\s]{2,4}/i
            if (item.val( ).match(pattern) === null)
                return true
            if (item.val( ).match(pattern)[0] !== item.val( ))
                return true
            return false
        }
        return false
    };
}