const { JourneyData } = require('journey-data');
const PostgresStorage = require('journey-data/src/storage/postgres-storage');

const journeyData = new JourneyData(new PostgresStorage());

module.exports = journeyData;
