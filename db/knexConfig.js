const pg = require('./knexConfig.js')

function getProfiles() {
    return pg("reddit-test-james")
    .select()
    .from('profile')
    .orderBy('id', 'desc')
}

module.export = {
    getProfiles
}