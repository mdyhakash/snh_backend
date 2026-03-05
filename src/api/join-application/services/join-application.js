'use strict';

/**
 * join-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join-application.join-application');
