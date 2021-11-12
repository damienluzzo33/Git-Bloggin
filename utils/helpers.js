//* create helpers that format the time and/or the date based on the date_created data
const moment = require('moment');

module.exports = {
    // //* helper to format the time
    format_time: (time) => {
		return moment(time, 'HH:mm:ss').format('h:mm A');
	},

    //* helper to format the date
    format_date: (date) => {
        let theDate = new Date(date);
        var year  = theDate.getFullYear();
        var month = theDate.getMonth();
        var day   = theDate.getDate();
        var newDate  = `${month + 1}/${day}/${year}`;
        return newDate;
    }
};