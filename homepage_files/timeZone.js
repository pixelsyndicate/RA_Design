function GetTimeOffSet() {
    var current_date = new Date();
    var gmt_offset = (current_date.getTimezoneOffset() - 4 * 60) / 60;
    return gmt_offset;
}