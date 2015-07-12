var fc = prompt('Do you want to convert from C or F?');

    while (fc != 'c' && fc!= 'C' && fc !='f' && fc !='F'){
      fc = prompt('You have to choose C or F');
    }

var temp = prompt('What\'s the temperature you\'d like to convert?')

    if (isNaN(temp)){
      alert('You have to choose a number bro!')
    }
     else if (temp != NaN && fc === ('c'||'C') ){
         var tfx = temp * (9/5) + 32
         var tf = tfx.toFixed(2)
         alert('It is ' + tf + ' degrees Fahrenheit')
    } else if (temp != NaN && fc === ('f' || 'F')) {
        var tcx = (temp-32)*(5/9);
        var tc = tcx.toFixed(2);
        alert('It is ' + tc + ' degrees Celcius')
    }
