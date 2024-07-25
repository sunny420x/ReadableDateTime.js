class ReadableDate {
    constructor(str) {
        this.str = str
    }
    toDateTime (str, pad) {
        str = str.toString()
        var str_arr = str.split(' ')
        var month_list = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if(str_arr.length > 0) {
            var month = str_arr[1]
            var day = str_arr[2]
            var years = str_arr[3]
            var time = str_arr[4]
            var month_number = month_list.findIndex(x => x == month)
            if(pad == true) {
                return(`${String(day).padStart(2, '0')}/${String(month_number).padStart(2, '0')}/${String(years).padStart(2, '0')} ${time}`)
            } else {
                return((`${day}/${month_number}/${years} ${time}`))
            }
        } else {
            return 1;
        }
    }
    toDate(str, pad) {
        var toDateTimeResult = this.toDateTime(str, pad);
        return toDateTimeResult.split(' ')[0]
    }
    toSQLDateTime(str) {
        var toDateTimeResult = this.toDateTime(str, true);
        var date_arr = toDateTimeResult.split(' ')[0].split('/')
        var time = toDateTimeResult.split(' ')[1]
        return (`${String(date_arr[2]).padStart(2, '0')}-${String(date_arr[1]).padStart(2, '0')}-${String(date_arr[0]).padStart(2, '0')} ${time}`)
    }
    toSQLDate(str) {
        var toSQLDateTimeResult = this.toSQLDateTime(str);
        return(toSQLDateTimeResult.split(' ')[0])
    }
}

module.exports = ReadableDate;