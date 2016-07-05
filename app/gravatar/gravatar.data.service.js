(function(){
    'use strict';

    angular.module("ui.gravatar")
        .factory('gravatarData', GravatarFactory);

    GravatarFactory.$inject = ['$q', '$http'];
    function GravatarFactory($q, $http){
        'use strict'

        var gravatarData = {
            getUrl: getUrl,
            json: json,
        }

        return gravatarData;
    }
        /////////////////////////////////

})();
