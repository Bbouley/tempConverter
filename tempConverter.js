var fc = prompt('Do you want to convert from C or F?');

    while (fc != 'c' && fc!= 'C' && fc !='f' && fc !='F'){
      fc = prompt('You have to choose C or F');
    }

var temp = prompt('What\'s the temperature you\'d like to convert?')

    while (temp === NaN){
      temp = prompt('You have to choose a number bro!');
    }


    if (temp != NaN && fc === ('c'||'C') ){
         var tf = temp * (9/5) + 32
         alert('It is ' + tf + ' degrees Fahrenheit')
    } else if (temp != NaN && fc === ('f' || 'F')) {
        var tc = (temp-32)*(5/9)
        alert('It is ' + tc + ' degrees Celcius')
    }
