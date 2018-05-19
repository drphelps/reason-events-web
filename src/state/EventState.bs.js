// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ApiClient = require("../clients/ApiClient.bs.js");
var EventData = require("../data/EventData.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var MnstrUtils = require("@dphunkt/mnstr-core/src/MnstrUtils.bs.js");
var StateTypes = require("./StateTypes.bs.js");
var Option$BsAbstract = require("bs-abstract/src/implementations/Option.bs.js");

function toOption(prim) {
  if (prim == null) {
    return /* None */0;
  } else {
    return [prim];
  }
}

function assign(prim, prim$1) {
  return Object.assign(prim, prim$1);
}

function empty() {
  return { };
}

var prefix = "EVENTS";

var actionTypes = {
  setEvents: "EVENTS:SET_EVENTS",
  refreshEvents: "EVENTS:REFRESH_EVENTS",
  createEvent: "EVENTS:CREATE_EVENT"
};

var actions = {
  setEvents: (function (events) {
      return {
              type: actionTypes.setEvents,
              reAction: [
                StateTypes.Events[/* SetEvents */1],
                events
              ]
            };
    }),
  refreshEvents: (function () {
      return {
              type: actionTypes.refreshEvents,
              reAction: StateTypes.Events[/* RefreshEvents */0]
            };
    }),
  createEvent: (function ($$event) {
      return {
              type: actionTypes.createEvent,
              reAction: [
                StateTypes.Events[/* CreateEvent */2],
                $$event
              ]
            };
    })
};

var initialState = {
  items: /* array */[]
};

function reducer(state, action) {
  var state$1 = Js_option.getWithDefault(initialState, (state == null) ? /* None */0 : [state]);
  var match = action.reAction;
  if (!(match == null) && match[0] === StateTypes.Events[/* SetEvents */1]) {
    return Object.assign({ }, Object.assign(state$1, {
                    items: match[1]
                  }));
  } else {
    return state$1;
  }
}

var select = {
  events: (function (state) {
      return state.events.items;
    })
};

function setEventsFromResponse(dispatch, response) {
  var setEvents = actions.setEvents;
  var match = response.parsed.allEvents;
  if (match) {
    Curry._1(dispatch, Curry._1(setEvents, match[0].edges.map((function (edge) {
                      return edge.node;
                    })).map(EventData.fromResponse)));
  }
  return Promise.resolve(/* () */0);
}

function setNewEventFromResponse(dispatch, getState, response) {
  var setEvents = actions.setEvents;
  var selectEvents = select.events;
  var match = Curry._2(Option$BsAbstract.Infix[/* >>= */0], response.parsed.createEvent, (function (input) {
          return input.event;
        }));
  if (match) {
    var events = Curry._1(selectEvents, Curry._1(getState, /* () */0));
    Curry._1(dispatch, Curry._1(setEvents, events.concat(/* array */[EventData.fromResponse(match[0])])));
  }
  return Promise.resolve(/* () */0);
}

function eventManagement(action, dispatch, getState) {
  var match = action.reAction;
  if (match == null) {
    return /* () */0;
  } else if (match === StateTypes.Events[/* RefreshEvents */0]) {
    var arg = EventData.AllEvents[/* make */13](/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0);
    Curry._2(MnstrUtils.Promise[/* Infix */8][/* >>= */3], (function (eta) {
              return ApiClient.query(/* None */0, arg, eta);
            })(ApiClient.client), (function (param) {
            return setEventsFromResponse(dispatch, param);
          }));
    return /* () */0;
  } else if (match[0] === StateTypes.Events[/* CreateEvent */2]) {
    var arg$1 = EventData.CreateEvent[/* make */11]({
          event: EventData.toInput(match[1]),
          clientMutationId: /* None */0
        }, /* () */0);
    Curry._2(MnstrUtils.Promise[/* Infix */8][/* >>= */3], (function (eta) {
              return ApiClient.mutate(/* None */0, arg$1, eta);
            })(ApiClient.client), (function (param) {
            return setNewEventFromResponse(dispatch, getState, param);
          }));
    return /* () */0;
  } else {
    return /* () */0;
  }
}

var getWithDefault = Js_option.getWithDefault;

exports.toOption = toOption;
exports.getWithDefault = getWithDefault;
exports.assign = assign;
exports.empty = empty;
exports.prefix = prefix;
exports.actionTypes = actionTypes;
exports.actions = actions;
exports.initialState = initialState;
exports.reducer = reducer;
exports.select = select;
exports.setEventsFromResponse = setEventsFromResponse;
exports.setNewEventFromResponse = setNewEventFromResponse;
exports.eventManagement = eventManagement;
/* ApiClient Not a pure module */
