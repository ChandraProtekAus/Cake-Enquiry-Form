'use strict';
var cakeEnquiryApp = angular.module('cakeEnquiryApp',[]);
cakeEnquiryApp.controller('cakeEnquiryCtrl',cakeEnquiryCtrl);
cakeEnquiryCtrl.$inject = [];
function cakeEnquiryCtrl(){
    var vm = this;

    vm.restart  = function(){
        vm.user = {};
    };
    vm.sendAway = function(){
       console.log(vm.user);
        alert('data successfully submitted');
    };
}