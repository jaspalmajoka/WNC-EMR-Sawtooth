const config = require('./../config');
const deepmerge = require('deepmerge');

const {
    createAddress,
    toInvalidTransaction,
    setEntry,
    toInvalidPayload,
    encodePayload
} = require('./../lib/helper');

const _createProviderAddress = (id) => createAddress(id, config.namespace.provider);
const _createPatientAddress = (id) => createAddress(id, config.namespace.patient);
const _createAppointmentAddress = (id) => createAddress(id, config.namespace.appointment);

module.exports = {
    createAppointment: async ({
        context,
        data
    }) => {
        const {
            appointment,
            patient,
            provider
        } = data;
        let providerAddress;
        let patientAddress;
        let appointmentAddress;
        let providerStateValue = {};
        let patientStateValue = {};
        let appointmentStateValue = {};

        try {
            providerAddress = _createProviderAddress(provider.id);
            patientAddress = _createPatientAddress(patient.id);
            appointmentAddress = _createAppointmentAddress(appointment.id);
        } catch (err) {
            return toInvalidTransaction('Error while creating address for ID');
        }
        const possibleAddressValues = await context.getState([providerAddress, patientAddress, appointmentAddress]).catch(toInvalidTransaction);
        // Get state representation of the address
        const providerStateRep = possibleAddressValues[providerAddress];
        const patientStateRep = possibleAddressValues[patientAddress];
        const appointmentStateRep = possibleAddressValues[patientAddress];


        if (providerStateRep && providerStateRep.length !== 0) {
            providerStateValue = JSON.parse(providerStateRep);
        }
        providerStateValue = deepmerge(providerStateValue, provider);

        if (patientStateRep && patientStateRep.length !== 0) {
            patientStateValue = JSON.parse(patientStateRep);
        }
        patientStateValue = deepmerge(patientStateValue, patient);

        if (appointmentStateRep && appointmentStateRep.length !== 0) {
            appointmentStateValue = JSON.parse(appointmentStateRep);
        }
        appointmentStateValue = deepmerge(appointmentStateValue, appointment);

        if (!provider.appointments) {
            provider.appointments = [];
        }
        provider.appointments.push(appointmentAddress);

        if (!patient.appointments) {
            patient.appointments = [];
        }
        patient.appointments.push(appointmentAddress);

        appointmentStateValue.provider = providerAddress;
        appointmentStateValue.patient = patientAddress;

        const entries = {
            [patientAddress]: encodePayload(patientStateValue),
            [appointmentAddress]: encodePayload(appointmentStateValue),
            [providerAddress]: encodePayload(providerStateValue),
        };
        return context.setState(entries).catch(toInvalidTransaction);
    }
};