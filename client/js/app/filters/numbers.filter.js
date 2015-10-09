(function(){

  /** convert negative numbers to numbers wrapped in parentheses */
  angular.module('app').filter('parentheses', function(){
    return function(input){
      if (input.charAt(0) === '-'){
        return '(' + input.substr(1) + ')';
      } else {
        return input;
      }
    };
  });


})();