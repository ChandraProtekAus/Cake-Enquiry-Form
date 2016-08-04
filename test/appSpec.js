describe('Testing controller', function() {
    var $scope,$timeout,ctrl,dataSevice,httpBackend;
    //you need to indicate your module in a test
    beforeEach(module('cakeEnquiryApp'));

    beforeEach(inject(function($rootScope, $controller, _$timeout_, _$httpBackend_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;
        httpBackend = _$httpBackend_;
        ctrl = $controller('cakeEnquiryCtrl', {
            $scope: $scope
        });
    }));
    it('cakeEnquiryCtrl should exist', function() {
        expect(ctrl).toBeDefined();
    });
    it('submit sendAway formData', function() {
        spyOn(ctrl, 'sendAway').andReturn('success');
        ctrl.sendAway();
        expect(ctrl.sendAway).toHaveBeenCalledWith();
        expect(ctrl.sendAway()).toEqual('success');
    });

});