const { v4: uuidv4} = require('uuid');

exports.handler = async function (event, context, callback) {
    const uuid = uuidv4();
    return 'uuid: ' + uuid;
}