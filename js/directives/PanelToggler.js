angular.module('redeyeDashboard')
    .directive('panelToggler', function () {
        console.log('yoyo');
        return {

            link: function(scope, element, attrs, dropdownCtrl) {

                var togglePanel = function(event) {
                    console.log('clicked');
                    event.preventDefault();

                    $(element).closest('.panel').find('.panel-body').slideToggle();
                    $(element).toggleClass('fa-rotate-180');
                };

                element.bind('click', togglePanel);

            }
        };

    });

