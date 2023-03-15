'use strict';

angular.module('bahmni.appointments')
    .service('appointmentsServiceService', ['$http', 'LZString',
        function ($http, LZString) {

            // https://pieroxy.net/blog/pages/lz-string/index.html
            // https://github.com/pieroxy/lz-string/
            this.encodeCompress = function (inputStr) {
                if (!inputStr) return "";
                if (inputStr == "") return "";
                var compressed = LZString.compressToEncodedURIComponent(inputStr);
                return compressed;
            };

            this.decodeDecompress = function (inputStr) {
                if (!inputStr) return "";
                if (inputStr == "") return "";
                try {
                    var decompressed = LZString.decompressFromEncodedURIComponent(inputStr);
                    if ((!decompressed || decompressed.length == 0) && inputStr.includes("%")) {
                        return decodeURIComponent(inputStr);
                    }
                    return decompressed || inputStr;
                } catch (error) {
                    return decodeURIComponent(inputStr);
                }
            };

            this.save = function (service) {
                service.name = this.encodeCompress(service.name);
                if (service.description && service.description.length > 0) {
                    service.description = this.encodeCompress(service.description);
                }
                return $http.post(Bahmni.Appointments.Constants.createServiceUrl, service, {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.getAllServices = function () {
                return $http.get(Bahmni.Common.Constants.appointmentServiceUrl + "/all/default", {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.getAllServicesWithServiceTypes = function () {
                return $http.get(Bahmni.Common.Constants.appointmentServiceUrl + "/all/full", {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.getServiceLoad = function (serviceUuid, startDateTime, endDateTime) {
                var params = {uuid: serviceUuid, startDateTime: startDateTime, endDateTime: endDateTime};
                return $http.get(Bahmni.Appointments.Constants.getServiceLoad, {
                    params: params,
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.getService = function (uuid) {
                return $http.get(Bahmni.Common.Constants.appointmentServiceUrl + "?uuid=" + uuid, {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.deleteAppointmentService = function (serviceUuid) {
                var params = {uuid: serviceUuid};
                return $http.delete(Bahmni.Common.Constants.appointmentServiceUrl, {
                    params: params,
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };
        }]);
