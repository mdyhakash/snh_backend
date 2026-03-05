'use strict';

/**
 * president service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::president.president');
