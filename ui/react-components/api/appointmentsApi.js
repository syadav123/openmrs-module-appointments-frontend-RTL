import axios from 'axios';
import {appointmentByUuidUrl, appointmentConflictsUrl, appointmentSaveUrl} from "../config";
import {encodeCompress, decodeDecompress} from "../utils/StringCompressionUtil";

export const saveOrUpdateAppointment = async (data) => {
    try {
        if (data && data.comments) {
            data.comments = encodeCompress(data.comments);
        }
        const response = await axios.post(`${appointmentSaveUrl}`, data);
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

export const conflictsFor = async appointmentRequest => {
    try {
        return await axios.post(appointmentConflictsUrl, appointmentRequest);
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

export const getAppointment = async (appointmentUuid) => {
    try {
        const response = await axios.get(`${appointmentByUuidUrl}?uuid=${appointmentUuid}`);
        if (response.data && response.data.comments) {
            response.data.comments = decodeDecompress(response.data.comments);
        }
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};


