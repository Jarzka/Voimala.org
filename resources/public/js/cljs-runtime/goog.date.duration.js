goog.provide("goog.date.duration");
goog.require("goog.i18n.DateTimeFormat");
goog.require("goog.i18n.MessageFormat");
/** @private @type {number} */ goog.date.duration.MINUTE_MS_ = 60000;
/** @private @type {number} */ goog.date.duration.HOUR_MS_ = 3600000;
/** @private @type {number} */ goog.date.duration.DAY_MS_ = 86400000;
/**
 * @param {number} durationMs
 * @return {string}
 */
goog.date.duration.format = function(durationMs) {
  var ms = Math.abs(durationMs);
  if (ms < goog.date.duration.MINUTE_MS_) {
    /**
     * @desc Duration time of zero minutes.
     */
    var MSG_ZERO_MINUTES = goog.getMsg("0 minutes");
    return MSG_ZERO_MINUTES;
  }
  var days = Math.floor(ms / goog.date.duration.DAY_MS_);
  ms %= goog.date.duration.DAY_MS_;
  var hours = Math.floor(ms / goog.date.duration.HOUR_MS_);
  ms %= goog.date.duration.HOUR_MS_;
  var minutes = Math.floor(ms / goog.date.duration.MINUTE_MS_);
  var daysText = goog.i18n.DateTimeFormat.localizeNumbers(days);
  var hoursText = goog.i18n.DateTimeFormat.localizeNumbers(hours);
  var minutesText = goog.i18n.DateTimeFormat.localizeNumbers(minutes);
  var daysSeparator = days * (hours + minutes) ? " " : "";
  var hoursSeparator = hours * minutes ? " " : "";
  /**
   * @desc The days part of the duration message: 1 day, 5 days.
   */
  var MSG_DURATION_DAYS = goog.getMsg("{COUNT, plural, " + "\x3d0 {}" + "\x3d1 {{TEXT} day}" + "other {{TEXT} days}}");
  /**
   * @desc The hours part of the duration message: 1 hour, 5 hours.
   */
  var MSG_DURATION_HOURS = goog.getMsg("{COUNT, plural, " + "\x3d0 {}" + "\x3d1 {{TEXT} hour}" + "other {{TEXT} hours}}");
  /**
   * @desc The minutes part of the duration message: 1 minute, 5 minutes.
   */
  var MSG_DURATION_MINUTES = goog.getMsg("{COUNT, plural, " + "\x3d0 {}" + "\x3d1 {{TEXT} minute}" + "other {{TEXT} minutes}}");
  var daysPart = goog.date.duration.getDurationMessagePart_(MSG_DURATION_DAYS, days, daysText);
  var hoursPart = goog.date.duration.getDurationMessagePart_(MSG_DURATION_HOURS, hours, hoursText);
  var minutesPart = goog.date.duration.getDurationMessagePart_(MSG_DURATION_MINUTES, minutes, minutesText);
  /**
   * @desc Duration time text concatenated from the individual time unit message parts. The separator will be a space (e.g. '1 day 2 hours 24 minutes') or nothing in case one/two of the duration parts is empty ( e.g. '1 hour 30 minutes', '3 days 15 minutes', '2 hours').
   */
  var MSG_CONCATENATED_DURATION_TEXT = goog.getMsg("{$daysPart}{$daysSeparator}{$hoursPart}{$hoursSeparator}{$minutesPart}", {"daysPart":daysPart, "daysSeparator":daysSeparator, "hoursPart":hoursPart, "hoursSeparator":hoursSeparator, "minutesPart":minutesPart});
  return MSG_CONCATENATED_DURATION_TEXT;
};
/**
 * @private
 * @param {string} pattern
 * @param {number} count
 * @param {string} text
 * @return {string}
 */
goog.date.duration.getDurationMessagePart_ = function(pattern, count, text) {
  var formatter = new goog.i18n.MessageFormat(pattern);
  return formatter.format({"COUNT":count, "TEXT":text});
};

//# sourceMappingURL=goog.date.duration.js.map
