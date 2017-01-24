const { JourneyData, Storage } = require('journey-data');
const { defaultStorageBackend } = require('../../config');

const journeyData = new JourneyData(new Storage[defaultStorageBackend]());

module.exports = journeyData;
