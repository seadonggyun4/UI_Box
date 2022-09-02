//Password
var password = document.querySelector('#password');

var helperText = {
  charLength: document.querySelector('#pwChar'),
  lowercase: document.querySelector('#pwLower'),
  uppercase: document.querySelector('#pwCap'),
  number: document.querySelector('#pwNum')
};

var pattern = {
  charLength: function () {
    if (password.value.length >= 7) {
      return true;
    }
  },
  lowercase: function () {
    var regex = /^(?=.*[a-z]).+$/;

    if (regex.test(password.value)) {
      return true;
    }
  },
  uppercase: function () {
    var regex = /^(?=.*[A-Z]).+$/;

    if (regex.test(password.value)) {
      return true;
    }
  },
  number: function () {
    var regex = /^(?=.*[0-9]).+$/;

    if (regex.test(password.value)) {
      return true;
    }
  }
};

// Listen for keyup action on password field
password.addEventListener('keyup', function () {
  // Check that password is a minimum of 8 characters
  patternTest(pattern.charLength(), helperText.charLength);

  // Check that password contains a lowercase letter      
  patternTest(pattern.lowercase(), helperText.lowercase);

  // Check that password contains an uppercase letter
  patternTest(pattern.uppercase(), helperText.uppercase);

  // Check that password contains a number or special character
  patternTest(pattern.number(), helperText.number);

  // Check that all requirements are fulfilled
  if (hasClass(helperText.charLength, 'valid') &&
    hasClass(helperText.lowercase, 'valid') &&
    hasClass(helperText.uppercase, 'valid') &&
    hasClass(helperText.number, 'valid')
  ) {
    addClass(password.parentElement, 'valid');
    $('.pwCheck').addClass('pwValid');
  } else {
    removeClass(password.parentElement, 'valid');
    $('.pwCheck').removeClass('pwValid');
  }
});

function patternTest(pattern, response) {
  if (pattern) {
    addClass(response, 'valid');
  } else {
    removeClass(response, 'valid');
  }
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

//Show and hide pw
$('#showPW').click(function () {
  if ($(this).hasClass('hide')) {
    $('#password').attr('type', 'text');
    $(this).removeClass('hide');
  } else {
    $('#password').attr('type', 'password');
    $(this).addClass('hide');
  }
});
