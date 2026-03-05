'use strict';

/**
 * president controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::president.president');
