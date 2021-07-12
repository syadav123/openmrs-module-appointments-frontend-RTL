export const appName = 'appointments';
export const availableForAppointments = "Available for appointments";
export const minDurationForAppointment = 30;
export const MINIMUM_CHAR_LENGTH_FOR_PATIENT_SEARCH = 3;
export const DEFAULT_MAX_APPOINTMENT_PROVIDERS = 1;
export const PROVIDER_ERROR_MESSAGE_TIME_OUT_INTERVAL = 5000;
export const SERVICE_ERROR_MESSAGE_TIME_OUT_INTERVAL = 5000;
export const dayRecurrenceType = "DAY";
export const weekRecurrenceType = "WEEK";
export const TODAY = "TODAY";
export const FROM = "FROM";
export const MINUTES = "minutes";

export const TELECONSULTATION_APPOINTMENT = "Teleconsultation";

export const RECURRING_APPOINTMENT_TYPE = "Recurring";
export const WALK_IN_APPOINTMENT_TYPE = "WalkIn";
export const SCHEDULED_APPOINTMENT_TYPE = "Scheduled";
export const VIRTUAL_APPOINTMENT_TYPE = "Virtual";

export const APPOINTMENT_STATUSES = {
    "Requested": "Requested",
    "Scheduled": "Scheduled",
    "CheckedIn": "CheckedIn",
    "Completed": "Completed",
    "Missed": "Missed",
    "Cancelled": "Cancelled"
};

export const RECURRENCE_TERMINATION_AFTER = "After";
export const RECURRENCE_TERMINATION_ON = "On";

export const PROVIDER_RESPONSES = {
    ACCEPTED: "ACCEPTED",
    REJECTED: "REJECTED",
    TENTATIVE: "TENTATIVE",
    CANCELLED: "CANCELLED",
    AWAITING: "AWAITING"
};

export const CANCEL_CONFIRMATION_MESSAGE_ADD = {
  translationKey: 'APPOINTMENT_CANCEL_CONFIRMATION_TEXT',
  defaultMessage: 'Are you sure you want to cancel adding the new appointment?This will erase everything you have filled. Nothing will be saved.'
};

export const CANCEL_CONFIRMATION_MESSAGE_EDIT = {
  translationKey: 'APPOINTMENT_CANCEL_CONFIRMATION_TEXT_EDIT',
  defaultMessage: 'Are you sure you want to cancel editing the appointment? This will not save any of the changes made.'
};

const appointmentTimeProps = {
    placeHolderTranslationKey: 'CHOOSE_TIME_PLACE_HOLDER', placeHolderDefaultMessage: 'hh:mm am/pm'
};

export const appointmentStartTimeProps = startTime => {
    return {...appointmentTimeProps, defaultValue: 'From', defaultTime: startTime, translationKey: 'APPOINTMENT_TIME_FROM_LABEL'}
};

export const appointmentEndTimeProps = endTime => {
    return {...appointmentTimeProps, defaultValue: 'To', defaultTime: endTime, translationKey: 'APPOINTMENT_TIME_TO_LABEL'}
};


