const { User } = require('../models');

const userData = [
    {
        username: 'jack_crate',
        email: 'jack_crate33@yahoo.com',
        password: 'placeholder'
    },
    {
        username: 'santahatkid',
        email: 'santahatkid@gmail.com',
        password: 'something'
    },
    {
        username: 'hool-a-gon-16',
        email: 'TheHoolagon16@yahoo.com',
        password: 'crazystuff'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
