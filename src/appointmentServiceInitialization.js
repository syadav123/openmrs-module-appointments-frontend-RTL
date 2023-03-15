'use strict';

angular.module('bahmni.appointments').factory('appointmentServiceInitialization',
    ['appointmentsServiceService',
        function (appointmentsServiceService) {
            return function (serviceUuid) {
                var getAppointmentService = function () {
                    if (serviceUuid !== 'new') {
                        return appointmentsServiceService.getService(serviceUuid).then(function (response) {
                            response.data.name = appointmentsServiceService.decodeDecompress(response.data.name);
                            if (response.data.description && response.data.description.length > 0) {
                                response.data.description = appointmentsServiceService.decodeDecompress(response.data.description);
                            }
                            return {service: response.data};
                        });
                    }
                };

                return getAppointmentService();
            };
        }]
);
