// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../utils/Utils.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ApiClient = require("../clients/ApiClient.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Option$BsAbstract = require("bs-abstract/src/implementations/Option.bs.js");

function toOption(prim) {
  if (prim == null) {
    return /* None */0;
  } else {
    return [prim];
  }
}

var jsMapperConstantArray = /* array */[
  /* tuple */[
    462924961,
    "DEFAULT"
  ],
  /* tuple */[
    838635490,
    "MEETUP"
  ]
];

function eventTypeToJs(param) {
  return Js_mapperRt.binarySearch(2, param, jsMapperConstantArray);
}

function eventTypeFromJs(param) {
  return Js_mapperRt.revSearch(2, jsMapperConstantArray, param);
}

function fromResponse(input) {
  return {
          id: Js_json.decodeString(input.id),
          createdAt: Utils.decodeDate(input.createdAt),
          updatedAt: Utils.decodeDate(input.updatedAt),
          date: Js_option.getWithDefault(new Date(), Utils.decodeDate(input.date)),
          description: input.description,
          eventType: input.eventType,
          location: input.location,
          name: input.name,
          owner: Curry._2(Option$BsAbstract.Infix[/* <#> */4], input.owner, (function (owner) {
                  return {
                          id: Js_option.getWithDefault("", Js_json.decodeString(owner.id)),
                          headline: owner.headline,
                          name: owner.name
                        };
                }))
        };
}

function toInput($$event) {
  return {
          id: Curry._2(Option$BsAbstract.Infix[/* <#> */4], $$event.id, (function (prim) {
                  return prim;
                })),
          createdAt: Curry._2(Option$BsAbstract.Infix[/* <#> */4], $$event.createdAt, Utils.encodeDate),
          updatedAt: Curry._2(Option$BsAbstract.Infix[/* <#> */4], $$event.updatedAt, Utils.encodeDate),
          date: Utils.encodeDate($$event.date),
          description: $$event.description,
          eventType: $$event.eventType,
          location: $$event.location,
          name: $$event.name,
          owner: Curry._2(Option$BsAbstract.Infix[/* <#> */4], $$event.owner, (function (owner) {
                  return Json_encode.object_(/* :: */[
                              /* tuple */[
                                "id",
                                owner.id
                              ],
                              /* :: */[
                                /* tuple */[
                                  "headline",
                                  Json_encode.nullable((function (prim) {
                                          return prim;
                                        }), owner.headline)
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "name",
                                    Json_encode.nullable((function (prim) {
                                            return prim;
                                          }), owner.name)
                                  ],
                                  /* [] */0
                                ]
                              ]
                            ]);
                }))
        };
}

var Graphql_error = Caml_exceptions.create("EventData.EventById.Graphql_error");

var query = "query EventById($id: UUID!)  {\neventById(id: $id)  {\nid  \ncreatedAt  \nupdatedAt  \nname  \ndate  \neventType  \nlocation  \ndescription  \nowner: userByOwner  {\nid  \nname  \nheadline  \n}\n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["eventById"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0];
        var value$3 = value$2["name"];
        var match$3 = Js_json.decodeString(value$3);
        var tmp$2;
        if (match$3) {
          tmp$2 = match$3[0];
        } else {
          throw Graphql_error;
        }
        var value$4 = value$2["eventType"];
        var match$4 = Js_json.decodeString(value$4);
        var tmp$3;
        if (match$4) {
          switch (match$4[0]) {
            case "DEFAULT" : 
                tmp$3 = /* DEFAULT */462924961;
                break;
            case "MEETUP" : 
                tmp$3 = /* MEETUP */838635490;
                break;
            default:
              throw Graphql_error;
          }
        } else {
          throw Graphql_error;
        }
        var value$5 = value$2["location"];
        var match$5 = Js_json.decodeNull(value$5);
        var tmp$4;
        if (match$5) {
          tmp$4 = /* None */0;
        } else {
          var match$6 = Js_json.decodeString(value$5);
          var tmp$5;
          if (match$6) {
            tmp$5 = match$6[0];
          } else {
            throw Graphql_error;
          }
          tmp$4 = /* Some */[tmp$5];
        }
        var value$6 = value$2["description"];
        var match$7 = Js_json.decodeNull(value$6);
        var tmp$6;
        if (match$7) {
          tmp$6 = /* None */0;
        } else {
          var match$8 = Js_json.decodeString(value$6);
          var tmp$7;
          if (match$8) {
            tmp$7 = match$8[0];
          } else {
            throw Graphql_error;
          }
          tmp$6 = /* Some */[tmp$7];
        }
        var value$7 = value$2["owner"];
        var match$9 = Js_json.decodeNull(value$7);
        var tmp$8;
        if (match$9) {
          tmp$8 = /* None */0;
        } else {
          var match$10 = Js_json.decodeObject(value$7);
          var tmp$9;
          if (match$10) {
            var value$8 = match$10[0];
            var value$9 = value$8["name"];
            var match$11 = Js_json.decodeNull(value$9);
            var tmp$10;
            if (match$11) {
              tmp$10 = /* None */0;
            } else {
              var match$12 = Js_json.decodeString(value$9);
              var tmp$11;
              if (match$12) {
                tmp$11 = match$12[0];
              } else {
                throw Graphql_error;
              }
              tmp$10 = /* Some */[tmp$11];
            }
            var value$10 = value$8["headline"];
            var match$13 = Js_json.decodeNull(value$10);
            var tmp$12;
            if (match$13) {
              tmp$12 = /* None */0;
            } else {
              var match$14 = Js_json.decodeString(value$10);
              var tmp$13;
              if (match$14) {
                tmp$13 = match$14[0];
              } else {
                throw Graphql_error;
              }
              tmp$12 = /* Some */[tmp$13];
            }
            tmp$9 = {
              id: value$8["id"],
              name: tmp$10,
              headline: tmp$12
            };
          } else {
            throw Graphql_error;
          }
          tmp$8 = /* Some */[tmp$9];
        }
        tmp$1 = {
          id: value$2["id"],
          createdAt: value$2["createdAt"],
          updatedAt: value$2["updatedAt"],
          name: tmp$2,
          date: value$2["date"],
          eventType: tmp$3,
          location: tmp$4,
          description: tmp$6,
          owner: tmp$8
        };
      } else {
        throw Graphql_error;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            eventById: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function json_of_optional(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_array(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_UUID(value) {
  return value;
}

function make(id, _) {
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "id",
                  id
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var id = variables.id;
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "id",
                  id
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var EventById = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* json_of_optional */json_of_optional,
  /* json_of_array */json_of_array,
  /* json_of_UUID */json_of_UUID,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var Graphql_error$1 = Caml_exceptions.create("EventData.AllEvents.Graphql_error");

var query$1 = "query AllEvents($first: Int, $last: Int, $offset: Int, $before: Cursor, $after: Cursor, $orderBy: [EventsOrderBy!], $condition: EventCondition)  {\nallEvents(first: $first, last: $last, offset: $offset, before: $before, after: $after, orderBy: $orderBy, condition: $condition)  {\nedges  {\nnode  {\nid  \ncreatedAt  \nupdatedAt  \nname  \ndate  \neventType  \nlocation  \ndescription  \nowner: userByOwner  {\nid  \nname  \nheadline  \n}\n}\n}\n}\n}";

function parse$1(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["allEvents"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0]["edges"];
        var match$3 = Js_json.decodeArray(value$2);
        var tmp$2;
        if (match$3) {
          tmp$2 = match$3[0].map((function (value) {
                  var match = Js_json.decodeObject(value);
                  if (match) {
                    var value$1 = match[0]["node"];
                    var match$1 = Js_json.decodeObject(value$1);
                    var tmp;
                    if (match$1) {
                      var value$2 = match$1[0];
                      var value$3 = value$2["name"];
                      var match$2 = Js_json.decodeString(value$3);
                      var tmp$1;
                      if (match$2) {
                        tmp$1 = match$2[0];
                      } else {
                        throw Graphql_error$1;
                      }
                      var value$4 = value$2["eventType"];
                      var match$3 = Js_json.decodeString(value$4);
                      var tmp$2;
                      if (match$3) {
                        switch (match$3[0]) {
                          case "DEFAULT" : 
                              tmp$2 = /* DEFAULT */462924961;
                              break;
                          case "MEETUP" : 
                              tmp$2 = /* MEETUP */838635490;
                              break;
                          default:
                            throw Graphql_error$1;
                        }
                      } else {
                        throw Graphql_error$1;
                      }
                      var value$5 = value$2["location"];
                      var match$4 = Js_json.decodeNull(value$5);
                      var tmp$3;
                      if (match$4) {
                        tmp$3 = /* None */0;
                      } else {
                        var match$5 = Js_json.decodeString(value$5);
                        var tmp$4;
                        if (match$5) {
                          tmp$4 = match$5[0];
                        } else {
                          throw Graphql_error$1;
                        }
                        tmp$3 = /* Some */[tmp$4];
                      }
                      var value$6 = value$2["description"];
                      var match$6 = Js_json.decodeNull(value$6);
                      var tmp$5;
                      if (match$6) {
                        tmp$5 = /* None */0;
                      } else {
                        var match$7 = Js_json.decodeString(value$6);
                        var tmp$6;
                        if (match$7) {
                          tmp$6 = match$7[0];
                        } else {
                          throw Graphql_error$1;
                        }
                        tmp$5 = /* Some */[tmp$6];
                      }
                      var value$7 = value$2["owner"];
                      var match$8 = Js_json.decodeNull(value$7);
                      var tmp$7;
                      if (match$8) {
                        tmp$7 = /* None */0;
                      } else {
                        var match$9 = Js_json.decodeObject(value$7);
                        var tmp$8;
                        if (match$9) {
                          var value$8 = match$9[0];
                          var value$9 = value$8["name"];
                          var match$10 = Js_json.decodeNull(value$9);
                          var tmp$9;
                          if (match$10) {
                            tmp$9 = /* None */0;
                          } else {
                            var match$11 = Js_json.decodeString(value$9);
                            var tmp$10;
                            if (match$11) {
                              tmp$10 = match$11[0];
                            } else {
                              throw Graphql_error$1;
                            }
                            tmp$9 = /* Some */[tmp$10];
                          }
                          var value$10 = value$8["headline"];
                          var match$12 = Js_json.decodeNull(value$10);
                          var tmp$11;
                          if (match$12) {
                            tmp$11 = /* None */0;
                          } else {
                            var match$13 = Js_json.decodeString(value$10);
                            var tmp$12;
                            if (match$13) {
                              tmp$12 = match$13[0];
                            } else {
                              throw Graphql_error$1;
                            }
                            tmp$11 = /* Some */[tmp$12];
                          }
                          tmp$8 = {
                            id: value$8["id"],
                            name: tmp$9,
                            headline: tmp$11
                          };
                        } else {
                          throw Graphql_error$1;
                        }
                        tmp$7 = /* Some */[tmp$8];
                      }
                      tmp = {
                        id: value$2["id"],
                        createdAt: value$2["createdAt"],
                        updatedAt: value$2["updatedAt"],
                        name: tmp$1,
                        date: value$2["date"],
                        eventType: tmp$2,
                        location: tmp$3,
                        description: tmp$5,
                        owner: tmp$7
                      };
                    } else {
                      throw Graphql_error$1;
                    }
                    return {
                            node: tmp
                          };
                  } else {
                    throw Graphql_error$1;
                  }
                }));
        } else {
          throw Graphql_error$1;
        }
        tmp$1 = {
          edges: tmp$2
        };
      } else {
        throw Graphql_error$1;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            allEvents: tmp
          };
  } else {
    throw Graphql_error$1;
  }
}

function json_of_optional$1(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_Datetime(value) {
  return value;
}

function json_of_EventType(value) {
  if (value >= 838635490) {
    return "MEETUP";
  } else {
    return "DEFAULT";
  }
}

function json_of_UUID$1(value) {
  return value;
}

function json_of_String(value) {
  return value;
}

function json_of_array$1(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_Int(value) {
  return value;
}

function json_of_EventsOrderBy(value) {
  if (value >= -333731723) {
    if (value >= 388783473) {
      if (value !== 701627714) {
        if (value >= 1054011849) {
          if (value >= 1064279005) {
            return "NAME_ASC";
          } else {
            return "NATURAL";
          }
        } else if (value >= 1005036454) {
          return "CREATED_AT_DESC";
        } else {
          return "EVENT_TYPE_DESC";
        }
      } else {
        return "DATE_DESC";
      }
    } else if (value !== -210262031) {
      if (value >= 182230215) {
        if (value >= 373926253) {
          return "ID_ASC";
        } else {
          return "LOCATION_ASC";
        }
      } else if (value >= -132275237) {
        return "LOCATION_DESC";
      } else {
        return "ID_DESC";
      }
    } else {
      return "EVENT_TYPE_ASC";
    }
  } else if (value >= -868461719) {
    if (value !== -805917376) {
      if (value >= -380838052) {
        if (value >= -360858887) {
          return "UPDATED_AT_DESC";
        } else {
          return "CREATED_AT_ASC";
        }
      } else if (value >= -752267971) {
        return "OWNER_DESC";
      } else {
        return "UPDATED_AT_ASC";
      }
    } else {
      return "DATE_ASC";
    }
  } else if (value >= -1003890683) {
    if (value >= -996699410) {
      return "DESCRIPTION_ASC";
    } else {
      return "NAME_DESC";
    }
  } else if (value >= -1040576556) {
    return "DESCRIPTION_DESC";
  } else {
    return "OWNER_ASC";
  }
}

function json_of_EventCondition(value) {
  return Js_dict.fromList(/* :: */[
              /* tuple */[
                "id",
                json_of_optional$1(json_of_UUID$1, value.id)
              ],
              /* :: */[
                /* tuple */[
                  "createdAt",
                  json_of_optional$1(json_of_Datetime, value.createdAt)
                ],
                /* :: */[
                  /* tuple */[
                    "updatedAt",
                    json_of_optional$1(json_of_Datetime, value.updatedAt)
                  ],
                  /* :: */[
                    /* tuple */[
                      "name",
                      json_of_optional$1(json_of_String, value.name)
                    ],
                    /* :: */[
                      /* tuple */[
                        "date",
                        json_of_optional$1(json_of_Datetime, value.date)
                      ],
                      /* :: */[
                        /* tuple */[
                          "eventType",
                          json_of_optional$1(json_of_EventType, value.eventType)
                        ],
                        /* :: */[
                          /* tuple */[
                            "location",
                            json_of_optional$1(json_of_String, value.location)
                          ],
                          /* :: */[
                            /* tuple */[
                              "description",
                              json_of_optional$1(json_of_String, value.description)
                            ],
                            /* :: */[
                              /* tuple */[
                                "owner",
                                json_of_optional$1(json_of_UUID$1, value.owner)
                              ],
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function json_of_Cursor(value) {
  return value;
}

function make$1(first, last, offset, before, after, orderBy, condition, _) {
  return {
          query: query$1,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "first",
                  json_of_optional$1(json_of_Int, first)
                ],
                /* :: */[
                  /* tuple */[
                    "last",
                    json_of_optional$1(json_of_Int, last)
                  ],
                  /* :: */[
                    /* tuple */[
                      "offset",
                      json_of_optional$1(json_of_Int, offset)
                    ],
                    /* :: */[
                      /* tuple */[
                        "before",
                        json_of_optional$1(json_of_Cursor, before)
                      ],
                      /* :: */[
                        /* tuple */[
                          "after",
                          json_of_optional$1(json_of_Cursor, after)
                        ],
                        /* :: */[
                          /* tuple */[
                            "orderBy",
                            json_of_optional$1((function (param) {
                                    return param.map(json_of_EventsOrderBy);
                                  }), orderBy)
                          ],
                          /* :: */[
                            /* tuple */[
                              "condition",
                              json_of_optional$1(json_of_EventCondition, condition)
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]),
          parse: parse$1
        };
}

function makeWithVariables$1(variables) {
  var first = variables.first;
  var last = variables.last;
  var offset = variables.offset;
  var before = variables.before;
  var after = variables.after;
  var orderBy = variables.orderBy;
  var condition = variables.condition;
  return {
          query: query$1,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "first",
                  json_of_optional$1(json_of_Int, first)
                ],
                /* :: */[
                  /* tuple */[
                    "last",
                    json_of_optional$1(json_of_Int, last)
                  ],
                  /* :: */[
                    /* tuple */[
                      "offset",
                      json_of_optional$1(json_of_Int, offset)
                    ],
                    /* :: */[
                      /* tuple */[
                        "before",
                        json_of_optional$1(json_of_Cursor, before)
                      ],
                      /* :: */[
                        /* tuple */[
                          "after",
                          json_of_optional$1(json_of_Cursor, after)
                        ],
                        /* :: */[
                          /* tuple */[
                            "orderBy",
                            json_of_optional$1((function (param) {
                                    return param.map(json_of_EventsOrderBy);
                                  }), orderBy)
                          ],
                          /* :: */[
                            /* tuple */[
                              "condition",
                              json_of_optional$1(json_of_EventCondition, condition)
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]),
          parse: parse$1
        };
}

function ret_type$1() {
  return /* module */[];
}

var MT_Ret$1 = /* module */[];

var AllEvents = /* module */[
  /* Graphql_error */Graphql_error$1,
  /* query */query$1,
  /* parse */parse$1,
  /* json_of_optional */json_of_optional$1,
  /* json_of_array */json_of_array$1,
  /* json_of_UUID */json_of_UUID$1,
  /* json_of_String */json_of_String,
  /* json_of_Int */json_of_Int,
  /* json_of_EventsOrderBy */json_of_EventsOrderBy,
  /* json_of_EventType */json_of_EventType,
  /* json_of_EventCondition */json_of_EventCondition,
  /* json_of_Datetime */json_of_Datetime,
  /* json_of_Cursor */json_of_Cursor,
  /* make */make$1,
  /* makeWithVariables */makeWithVariables$1,
  /* ret_type */ret_type$1,
  /* MT_Ret */MT_Ret$1
];

var Graphql_error$2 = Caml_exceptions.create("EventData.CreateEvent.Graphql_error");

var query$2 = "mutation CreateEvent($input: CreateEventInput!)  {\ncreateEvent(input: $input)  {\nevent  {\nid  \ncreatedAt  \nupdatedAt  \nname  \ndate  \neventType  \nlocation  \ndescription  \nowner: userByOwner  {\nid  \nname  \nheadline  \n}\n}\n}\n}";

function parse$2(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["createEvent"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0]["event"];
        var match$3 = Js_json.decodeNull(value$2);
        var tmp$2;
        if (match$3) {
          tmp$2 = /* None */0;
        } else {
          var match$4 = Js_json.decodeObject(value$2);
          var tmp$3;
          if (match$4) {
            var value$3 = match$4[0];
            var value$4 = value$3["name"];
            var match$5 = Js_json.decodeString(value$4);
            var tmp$4;
            if (match$5) {
              tmp$4 = match$5[0];
            } else {
              throw Graphql_error$2;
            }
            var value$5 = value$3["eventType"];
            var match$6 = Js_json.decodeString(value$5);
            var tmp$5;
            if (match$6) {
              switch (match$6[0]) {
                case "DEFAULT" : 
                    tmp$5 = /* DEFAULT */462924961;
                    break;
                case "MEETUP" : 
                    tmp$5 = /* MEETUP */838635490;
                    break;
                default:
                  throw Graphql_error$2;
              }
            } else {
              throw Graphql_error$2;
            }
            var value$6 = value$3["location"];
            var match$7 = Js_json.decodeNull(value$6);
            var tmp$6;
            if (match$7) {
              tmp$6 = /* None */0;
            } else {
              var match$8 = Js_json.decodeString(value$6);
              var tmp$7;
              if (match$8) {
                tmp$7 = match$8[0];
              } else {
                throw Graphql_error$2;
              }
              tmp$6 = /* Some */[tmp$7];
            }
            var value$7 = value$3["description"];
            var match$9 = Js_json.decodeNull(value$7);
            var tmp$8;
            if (match$9) {
              tmp$8 = /* None */0;
            } else {
              var match$10 = Js_json.decodeString(value$7);
              var tmp$9;
              if (match$10) {
                tmp$9 = match$10[0];
              } else {
                throw Graphql_error$2;
              }
              tmp$8 = /* Some */[tmp$9];
            }
            var value$8 = value$3["owner"];
            var match$11 = Js_json.decodeNull(value$8);
            var tmp$10;
            if (match$11) {
              tmp$10 = /* None */0;
            } else {
              var match$12 = Js_json.decodeObject(value$8);
              var tmp$11;
              if (match$12) {
                var value$9 = match$12[0];
                var value$10 = value$9["name"];
                var match$13 = Js_json.decodeNull(value$10);
                var tmp$12;
                if (match$13) {
                  tmp$12 = /* None */0;
                } else {
                  var match$14 = Js_json.decodeString(value$10);
                  var tmp$13;
                  if (match$14) {
                    tmp$13 = match$14[0];
                  } else {
                    throw Graphql_error$2;
                  }
                  tmp$12 = /* Some */[tmp$13];
                }
                var value$11 = value$9["headline"];
                var match$15 = Js_json.decodeNull(value$11);
                var tmp$14;
                if (match$15) {
                  tmp$14 = /* None */0;
                } else {
                  var match$16 = Js_json.decodeString(value$11);
                  var tmp$15;
                  if (match$16) {
                    tmp$15 = match$16[0];
                  } else {
                    throw Graphql_error$2;
                  }
                  tmp$14 = /* Some */[tmp$15];
                }
                tmp$11 = {
                  id: value$9["id"],
                  name: tmp$12,
                  headline: tmp$14
                };
              } else {
                throw Graphql_error$2;
              }
              tmp$10 = /* Some */[tmp$11];
            }
            tmp$3 = {
              id: value$3["id"],
              createdAt: value$3["createdAt"],
              updatedAt: value$3["updatedAt"],
              name: tmp$4,
              date: value$3["date"],
              eventType: tmp$5,
              location: tmp$6,
              description: tmp$8,
              owner: tmp$10
            };
          } else {
            throw Graphql_error$2;
          }
          tmp$2 = /* Some */[tmp$3];
        }
        tmp$1 = {
          event: tmp$2
        };
      } else {
        throw Graphql_error$2;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            createEvent: tmp
          };
  } else {
    throw Graphql_error$2;
  }
}

function json_of_optional$2(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_EventType$1(value) {
  if (value >= 838635490) {
    return "MEETUP";
  } else {
    return "DEFAULT";
  }
}

function json_of_Datetime$1(value) {
  return value;
}

function json_of_UUID$2(value) {
  return value;
}

function json_of_String$1(value) {
  return value;
}

function json_of_EventInput(value) {
  return Js_dict.fromList(/* :: */[
              /* tuple */[
                "id",
                json_of_optional$2(json_of_UUID$2, value.id)
              ],
              /* :: */[
                /* tuple */[
                  "createdAt",
                  json_of_optional$2(json_of_Datetime$1, value.createdAt)
                ],
                /* :: */[
                  /* tuple */[
                    "updatedAt",
                    json_of_optional$2(json_of_Datetime$1, value.updatedAt)
                  ],
                  /* :: */[
                    /* tuple */[
                      "name",
                      value.name
                    ],
                    /* :: */[
                      /* tuple */[
                        "date",
                        value.date
                      ],
                      /* :: */[
                        /* tuple */[
                          "eventType",
                          json_of_EventType$1(value.eventType)
                        ],
                        /* :: */[
                          /* tuple */[
                            "location",
                            json_of_optional$2(json_of_String$1, value.location)
                          ],
                          /* :: */[
                            /* tuple */[
                              "description",
                              json_of_optional$2(json_of_String$1, value.description)
                            ],
                            /* :: */[
                              /* tuple */[
                                "owner",
                                json_of_optional$2(json_of_UUID$2, value.owner)
                              ],
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function json_of_array$2(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_CreateEventInput(value) {
  return Js_dict.fromList(/* :: */[
              /* tuple */[
                "clientMutationId",
                json_of_optional$2(json_of_String$1, value.clientMutationId)
              ],
              /* :: */[
                /* tuple */[
                  "event",
                  json_of_EventInput(value.event)
                ],
                /* [] */0
              ]
            ]);
}

function make$2(input, _) {
  return {
          query: query$2,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "input",
                  json_of_CreateEventInput(input)
                ],
                /* [] */0
              ]),
          parse: parse$2
        };
}

function makeWithVariables$2(variables) {
  var input = variables.input;
  return {
          query: query$2,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "input",
                  json_of_CreateEventInput(input)
                ],
                /* [] */0
              ]),
          parse: parse$2
        };
}

function ret_type$2() {
  return /* module */[];
}

var MT_Ret$2 = /* module */[];

var CreateEvent = /* module */[
  /* Graphql_error */Graphql_error$2,
  /* query */query$2,
  /* parse */parse$2,
  /* json_of_optional */json_of_optional$2,
  /* json_of_array */json_of_array$2,
  /* json_of_UUID */json_of_UUID$2,
  /* json_of_String */json_of_String$1,
  /* json_of_EventType */json_of_EventType$1,
  /* json_of_EventInput */json_of_EventInput,
  /* json_of_Datetime */json_of_Datetime$1,
  /* json_of_CreateEventInput */json_of_CreateEventInput,
  /* make */make$2,
  /* makeWithVariables */makeWithVariables$2,
  /* ret_type */ret_type$2,
  /* MT_Ret */MT_Ret$2
];

function fromJs(input) {
  return {
          clientMutationId: Js_primitive.null_undefined_to_opt(input.clientMutationId),
          event: {
            id: Curry._2(Option$BsAbstract.Infix[/* <#> */4], Js_primitive.null_undefined_to_opt(input.event.id), (function (prim) {
                    return prim;
                  })),
            createdAt: Curry._2(Option$BsAbstract.Infix[/* <#> */4], Js_primitive.null_undefined_to_opt(input.event.createdAt), (function (prim) {
                    return prim;
                  })),
            updatedAt: Curry._2(Option$BsAbstract.Infix[/* <#> */4], Js_primitive.null_undefined_to_opt(input.event.updatedAt), (function (prim) {
                    return prim;
                  })),
            name: input.event.name,
            date: input.event.date,
            eventType: Js_option.getWithDefault(/* DEFAULT */462924961, eventTypeFromJs(input.event.eventType)),
            location: Js_primitive.null_undefined_to_opt(input.event.location),
            description: Js_primitive.null_undefined_to_opt(input.event.description),
            owner: Curry._2(Option$BsAbstract.Infix[/* <#> */4], Js_primitive.null_undefined_to_opt(input.event.owner), (function (prim) {
                    return prim;
                  }))
          }
        };
}

function eventById(id) {
  var arg = make(id, /* () */0);
  return (function (eta) {
              return ApiClient.query(/* None */0, arg, eta);
            })(ApiClient.client);
}

function allEvents() {
  var arg = make$1(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0);
  return (function (eta) {
              return ApiClient.query(/* None */0, arg, eta);
            })(ApiClient.client);
}

function createEvent(input) {
  var arg = make$2(fromJs(input), /* () */0);
  return (function (eta) {
              return ApiClient.mutate(/* None */0, arg, eta);
            })(ApiClient.client);
}

var getWithDefault = Js_option.getWithDefault;

var some = Js_option.some;

exports.toOption = toOption;
exports.getWithDefault = getWithDefault;
exports.some = some;
exports.eventTypeToJs = eventTypeToJs;
exports.eventTypeFromJs = eventTypeFromJs;
exports.fromResponse = fromResponse;
exports.toInput = toInput;
exports.EventById = EventById;
exports.AllEvents = AllEvents;
exports.CreateEvent = CreateEvent;
exports.fromJs = fromJs;
exports.eventById = eventById;
exports.allEvents = allEvents;
exports.createEvent = createEvent;
/* Utils Not a pure module */
