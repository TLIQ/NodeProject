export const blocksCalls = [
    {
        "_id": "60c35dfb02931a3dd3076681",
        "reference": null,
        "teams": [],
        "name": "Приветствие",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 1,
        "short_name": "Приветствие",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 1
    },
    {
        "_id": "60c36bbc02931a3dd3076688",
        "reference": null,
        "teams": [],
        "name": "Выявление потребностей",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 2,
        "short_name": "Выявление потребностей",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 2
    },
    {
        "_id": "60c36d9402931a3dd307668f",
        "reference": null,
        "teams": [],
        "name": "Ответ с выгодой",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 3,
        "short_name": "Ответ с выгодой",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 3
    },
    {
        "_id": "60c36dd302931a3dd3076691",
        "reference": null,
        "teams": [],
        "name": "Уточнения",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 4,
        "short_name": "Уточнения",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 4
    },
    {
        "_id": "60c36e5402931a3dd3076694",
        "reference": null,
        "teams": [],
        "name": "Оформление",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 5,
        "short_name": "Оформление",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 5
    },
    {
        "_id": "60c3716402931a3dd3076697",
        "reference": null,
        "teams": [],
        "name": "Ограничения",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 6,
        "short_name": "Ограничения",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 6
    },
    {
        "_id": "60c371b502931a3dd3076699",
        "reference": null,
        "teams": [],
        "name": "Завершение разговора",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 7,
        "short_name": "Завершение разговора",
        "color": "#e1e1e1",
        "__v": 0,
        "access": "",
        "description": "Прощание, закрепление приятного общего впечатления, теплого отношения.",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null,
        "user_code": 7
    },
    {
        "_id": "618501dbc1980c2b535a6264",
        "reference": null,
        "teams": [],
        "name": "Статус заявки",
        "parent_id": "60c348ed02931a3dd307667c",
        "type": "block",
        "code": 8,
        "short_name": "Статус заявки",
        "color": "#7bd148",
        "__v": 0,
        "access": "",
        "description": "",
        "excludeFromCalc": null,
        "parameters": null,
        "processes": {},
        "role": null,
        "script_type": null
    },
    {
        "_id": "62179cbd12ff2f05ad1e9267",
        "name": "Обмен",
        "code": 1,
        "reference": [],
        "user_code": null,
        "short_name": "Обмен",
        "description": "",
        "type": "block",
        "parent_id": "60c348ed02931a3dd307667c",
        "created": "2022-02-24T14:56:45.234Z",
        "color": "#ffffff",
        "__v": 0
    }
]

export const stepsCalls = [
    {
        "_id": "60c35e0202931a3dd3076682",
        "reference": [
            "62616696812216320",
            "62616773748334592"
        ],
        "teams": [],
        "name": "Поздороваться",
        "parent_id": "60c35dfb02931a3dd3076681",
        "type": "step",
        "code": 1.01,
        "short_name": "Поздороваться",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "name": "consultation",
                "screen_name": "консультация",
                "short_name": "консульт.",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Поздоровайтесь. Используйте слова «Здравствуйте», «Добрый день».",
        "role": null,
        "script_type": null,
        "user_code": 1.01,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "60c3692902931a3dd3076685",
        "reference": [
            "62619276015575040",
            "62619340930818048"
        ],
        "teams": [],
        "name": "Презентация компании",
        "parent_id": "60c35dfb02931a3dd3076681",
        "type": "step",
        "code": 1.02,
        "short_name": "Презентация компании",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "name": "consultation",
                "screen_name": "консультация",
                "short_name": "консульт.",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Сообщите название компании, используйте слова «авиакомпания S7 Airlines».",
        "role": null,
        "script_type": null,
        "user_code": 1.02,
        "weight": 1,
        "updated": "2022-11-21T20:41:19.156Z"
    },
    {
        "_id": "60c369c102931a3dd3076686",
        "reference": [
            "62620206668718080",
            "62620267557429248"
        ],
        "teams": [],
        "name": "Представиться",
        "parent_id": "60c35dfb02931a3dd3076681",
        "type": "step",
        "code": 1.03,
        "short_name": "Представиться",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "screen_name": "консультация",
                "short_name": "КОНС",
                "name": "consultation",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Представьтесь. Используйте фразу «меня зовут».",
        "role": null,
        "script_type": null,
        "user_code": 1.3,
        "weight": 1
    },
    {
        "_id": "60c36a3302931a3dd3076687",
        "reference": [
            "36875591915413504"
        ],
        "teams": [],
        "name": "Предложение помощи",
        "parent_id": "60c35dfb02931a3dd3076681",
        "type": "step",
        "code": 1.04,
        "short_name": "Предложение помощи",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "screen_name": "консультация",
                "short_name": "КОНС",
                "name": "consultation",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Предложите помощь. Используйте фразу «чем я могу вам помочь».",
        "role": null,
        "script_type": null,
        "user_code": 1.4,
        "weight": 1
    },
    {
        "_id": "60c36beb02931a3dd3076689",
        "reference": [
            "124189056702619648"
        ],
        "teams": [],
        "name": "Маршрут",
        "parent_id": "60c36bbc02931a3dd3076688",
        "type": "step",
        "code": 2.01,
        "short_name": "Маршрут",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "screen_name": "продажа билета",
                "name": "standard_ivr",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            },
            "sell_module": {
                "name": "sell_module",
                "screen_name": "продажа, заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента маршрут. Рекомендуется произносить «какое направление вас интересует», «какой маршрут», «откуда куда будет вылет». Также используйте термины вежливости. ",
        "role": null,
        "script_type": null,
        "user_code": 2.1,
        "weight": 1
    },
    {
        "_id": "60c36c3402931a3dd307668a",
        "reference": [
            "124189957995634688"
        ],
        "teams": [],
        "name": "Даты",
        "parent_id": "60c36bbc02931a3dd3076688",
        "type": "step",
        "code": 2.02,
        "short_name": "Даты",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "screen_name": "продажа билета",
                "name": "standard_ivr",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            },
            "sell_module": {
                "name": "sell_module",
                "screen_name": "продажа, заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента даты перелёта. Рекомендуется произносить «какие даты смотрите», «обратный билет нужен».  Также используйте термины вежливости. ",
        "role": null,
        "script_type": null,
        "user_code": 2.2,
        "weight": 1
    },
    {
        "_id": "60c36cd302931a3dd307668c",
        "reference": [
            "124191791481102336"
        ],
        "teams": [],
        "name": "Количество пассажиров",
        "parent_id": "60c36bbc02931a3dd3076688",
        "type": "step",
        "code": 2.03,
        "short_name": "Количество пассажиров",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "name": "standard_ivr",
                "screen_name": "продажа билета",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            },
            "sell_module": {
                "name": "sell_module",
                "screen_name": "заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента количество пассажиров. Используйте фразы «сколько пассажиров», «сколько взрослых, детей или младенцев». Также используйте термины вежливости.",
        "role": null,
        "script_type": null,
        "user_code": 2.03,
        "weight": 1,
        "updated": "2022-11-21T20:41:19.156Z"
    },
    {
        "_id": "60c36da402931a3dd3076690",
        "reference": [
            "124198350860853248"
        ],
        "teams": [],
        "name": "Стоимость",
        "parent_id": "60c36d9402931a3dd307668f",
        "type": "step",
        "code": 3.01,
        "short_name": "Стоимость",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "name": "standard_ivr",
                "screen_name": "продажа билета",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            },
            "sell_module": {
                "name": "sell_module",
                "screen_name": "заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о стоимости выбранного тарифа.",
        "role": null,
        "script_type": null,
        "user_code": 3.01,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "60c36de302931a3dd3076692",
        "reference": [
            "124221689373401088"
        ],
        "teams": [],
        "name": "Правила тарифа, услуги",
        "parent_id": "60c36dd302931a3dd3076691",
        "type": "step",
        "code": 4.01,
        "short_name": "Правила тарифа, услуги ",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "name": "standard_ivr",
                "screen_name": "продажа билета",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о правилах выбранного тарифа или услуги. Используйте фразы «тариф включает», «данный билет является невозвратным», «только ручная кладь», «обмен только со сбором».",
        "role": null,
        "script_type": null,
        "user_code": 4.01,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "60c36e2002931a3dd3076693",
        "reference": [
            "124221843174334464"
        ],
        "teams": [],
        "name": "Личные данные",
        "parent_id": "60c36dd302931a3dd3076691",
        "type": "step",
        "code": 4.02,
        "short_name": "Личные данные",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "screen_name": "продажа билета",
                "name": "standard_ivr",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            },
            "sell_module": {
                "name": "sell_module",
                "screen_name": "продажа, заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента его личные данные, необходимые для оформления бронирования. Используйте фразы «ваши паспортные данные», «фамилия пассажира», «ваш контактный номер». Также используйте термины вежливости.",
        "role": null,
        "script_type": null,
        "user_code": 4.2,
        "weight": 1
    },
    {
        "_id": "60c3717002931a3dd3076698",
        "reference": null,
        "teams": [],
        "name": "Ограничения",
        "parent_id": "60c3716402931a3dd3076697",
        "type": "step",
        "code": 6.01,
        "short_name": "Ограничения",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {},
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "",
        "role": null,
        "script_type": null,
        "user_code": 6.1,
        "weight": 0
    },
    {
        "_id": "60c371bc02931a3dd307669a",
        "reference": [
            "36875594851426304"
        ],
        "teams": [],
        "name": "Прощание",
        "parent_id": "60c371b502931a3dd3076699",
        "type": "step",
        "code": 7.01,
        "short_name": "Прощание",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "screen_name": "консультация",
                "short_name": "КОНС",
                "name": "consultation",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Попрощайтесь с клиентом. Используйте фразы «спасибо за обращение», «всего вам доброго», «до свидания». По ситуации можно дополнить пожелания хорошего полёта.",
        "role": null,
        "script_type": null,
        "user_code": 7.1,
        "weight": 1
    },
    {
        "_id": "60c9a05b02931a3dd307674e",
        "reference": [
            "125956130688999424"
        ],
        "teams": [],
        "name": "Перевод на оплату",
        "parent_id": "60c36e5402931a3dd3076694",
        "type": "step",
        "code": 5.03,
        "short_name": "Перевод на оплату",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "name": "standard_ivr",
                "screen_name": "продажа билета",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о том, что вы собираетесь перевести звонок на систему оплаты. Используйте фразы «в режиме разговора переведу звонок на оплату», «я вас переведу на голосового помощника», «ссылку для оплаты вам направляю на электронную почту».",
        "role": null,
        "script_type": null,
        "user_code": 5.03,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "60dee77b7d4d551ba7c31d71",
        "reference": [
            "124219587687358464"
        ],
        "teams": [],
        "name": "Подтверждение",
        "parent_id": "60c36d9402931a3dd307668f",
        "type": "step",
        "code": 3.03,
        "short_name": "Подтверждение",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "name": "standard_ivr",
                "screen_name": "продажа билета",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Получите у клиента подтверждение о намерении купить билет или услугу. Используйте фразы «могу перейти к оформлению», «хотите забронировать».",
        "role": null,
        "script_type": null,
        "user_code": 3.03,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "60dee8647d4d551ba7c31d72",
        "reference": [
            "124223192460959744"
        ],
        "teams": [],
        "name": "Проверка деталей",
        "parent_id": "60c36dd302931a3dd3076691",
        "type": "step",
        "code": 4.03,
        "short_name": "Проверка деталей",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "screen_name": "продажа билета",
                "name": "standard_ivr",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            },
            "sell_module": {
                "name": "sell_module",
                "screen_name": "продажа, заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Получите у клиента подтверждение о правильности записанных данных. Используйте фразы «итак, подведу итог\", «итак, проверим информацию\", «давайте сверим перед оплатой».",
        "role": null,
        "script_type": null,
        "user_code": 4.3,
        "weight": 1
    },
    {
        "_id": "613204c35a6d116d2c2f9e0e",
        "reference": [
            "124193819481612288"
        ],
        "teams": [],
        "name": "Выбор тарифа",
        "parent_id": "60c36bbc02931a3dd3076688",
        "type": "step",
        "code": 2.04,
        "short_name": "Выбор тарифа",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "standard_ivr": {
                "screen_name": "продажа билета",
                "name": "standard_ivr",
                "short_name": "СТД IVR",
                "type": "sales",
                "kw": [
                    "125956130688999424",
                    "124193819481612288",
                    "183964644610678784",
                    "124221843174334464"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента, какой тариф предпочтителен. Используйте фразы «какой тариф рассматриваете», «вас интересует эконом, базовый, с багажом, без багажа».",
        "role": null,
        "script_type": null,
        "user_code": 2.4,
        "weight": 1
    },
    {
        "_id": "617feb37c1980c2b535a5d96",
        "reference": [
            "124184075014512640"
        ],
        "teams": [],
        "name": "Начало создания заявки",
        "parent_id": "60c36e5402931a3dd3076694",
        "type": "step",
        "code": 5.04,
        "short_name": "Начало создания заявки",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "sell_module": {
                "name": "sell_module",
                "screen_name": "заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о том, что вы начинаете оформление заявки на покупку. Используйте фразы «Готов помочь создать заявку на оформление», «сейчас сделаем заявку на оформление билетов счёт ваучера».",
        "role": null,
        "script_type": null,
        "user_code": 5.04,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "61850213c1980c2b535a626c",
        "reference": [
            "177468139334803456"
        ],
        "teams": [],
        "name": "Номер заявки",
        "parent_id": "618501dbc1980c2b535a6264",
        "type": "step",
        "code": 8.01,
        "short_name": "Номер заявки",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            },
            "WaDmQ": {
                "screen_name": "WaDmQ",
                "name": "К.Статус заявки",
                "short_name": "СТЗ",
                "description": "",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            }
        },
        "processes": {
            "c_order_status": {
                "name": "c_order_status",
                "screen_name": "конс. статус заявки",
                "short_name": "СТАТУС ЗАЯВ",
                "type": "consultations",
                "kw": [
                    "177468139334803456",
                    "177472180664147968"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента номер заявки. Используйте фразы «назовите номер заявки», «озвучьте номер вашей заявки». Также используйте термины вежливости.",
        "role": null,
        "script_type": null,
        "weight": 1
    },
    {
        "_id": "6185028cc1980c2b535a6284",
        "reference": [
            "177472180664147968"
        ],
        "teams": [],
        "name": "Статус заявки",
        "parent_id": "618501dbc1980c2b535a6264",
        "type": "step",
        "code": 8.02,
        "short_name": "Статус заявки",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            },
            "WaDmQ": {
                "screen_name": "WaDmQ",
                "name": "К.Статус заявки",
                "short_name": "СТЗ",
                "description": "",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            }
        },
        "processes": {
            "c_order_status": {
                "name": "c_order_status",
                "screen_name": "конс. статус заявки",
                "short_name": "СТАТУС ЗАЯВ",
                "type": "consultations",
                "kw": [
                    "177468139334803456",
                    "177472180664147968"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о текущем статусе заявки. Используйте фразы «ваша заявка находится в обработке», «заявка рассматривается», «заявка выполнена».",
        "role": null,
        "script_type": null,
        "weight": 1
    },
    {
        "_id": "618502dcc1980c2b535a6298",
        "reference": [
            "177473354855358464"
        ],
        "teams": [],
        "name": "Сроки обработки",
        "parent_id": "618501dbc1980c2b535a6264",
        "type": "step",
        "code": 8.03,
        "short_name": "Сроки обработки",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            },
            "WaDmQ": {
                "screen_name": "WaDmQ",
                "name": "К.Статус заявки",
                "short_name": "СТЗ",
                "description": "",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            }
        },
        "processes": {
            "c_order_status": {
                "name": "c_order_status",
                "screen_name": "статус заявки",
                "short_name": "СТАТУС ЗАЯВ",
                "type": "consultations",
                "kw": [
                    "177468139334803456",
                    "177472180664147968"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о сроках обработки заявки. Используйте фразу «срок обработки заявки составляет» «заявки рассматриваются в течение».",
        "role": null,
        "script_type": null,
        "user_code": 8.03,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "6185030ac1980c2b535a62a8",
        "reference": [
            "177474090058129408"
        ],
        "teams": [],
        "name": "Резюме",
        "parent_id": "618501dbc1980c2b535a6264",
        "type": "step",
        "code": 8.04,
        "short_name": "Резюме",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            },
            "WaDmQ": {
                "screen_name": "WaDmQ",
                "name": "К.Статус заявки",
                "short_name": "СТЗ",
                "description": "",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            }
        },
        "processes": {
            "c_order_status": {
                "name": "c_order_status",
                "screen_name": "статус заявки",
                "short_name": "СТАТУС ЗАЯВ",
                "type": "consultations",
                "kw": [
                    "177468139334803456",
                    "177472180664147968"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о его дальнейших действиях по заявке. Используйте фразы «специалисты с вами свяжутся по указанному номеру телефону», «ответ по вашей заявке поступит по электронной почте».",
        "role": null,
        "script_type": null,
        "user_code": 8.04,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "618e26980f5f3c01e0fcef10",
        "reference": [
            "176070870232473600"
        ],
        "teams": [],
        "name": "Окончание создания заявки",
        "parent_id": "60c36e5402931a3dd3076694",
        "type": "step",
        "code": 5.05,
        "short_name": "Окончание создания заявки",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "sell_module": {
                "name": "sell_module",
                "screen_name": "заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Информируйте клиента о завершении создания заявки. Используйте фразы «заявка создана», «заявка оформлена», «заявка сформирована».",
        "role": null,
        "script_type": null,
        "user_code": 5.05,
        "weight": 1,
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "619c9872c42fa10f54d6d425",
        "reference": [
            "182513280416227328"
        ],
        "teams": [],
        "name": "Выбор тарифа, модуль",
        "parent_id": "60c36bbc02931a3dd3076688",
        "type": "step",
        "code": 2.07,
        "short_name": "Выбор тарифа, модуль",
        "parameters": {
            "LWu3T": {
                "screen_name": "LWu3T",
                "name": "Скрипт продаж, %",
                "short_name": "ПСКР",
                "description": "Контроль исполнения шагов скриптов продаж",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            },
            "script": {
                "screen_name": "script",
                "name": "Скрипт",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "norms": [
                    {
                        "gt": "45",
                        "coeff": "1"
                    }
                ],
                "weight": 0
            }
        },
        "processes": {
            "sell_module": {
                "name": "sell_module",
                "screen_name": "продажа, заявка в модуль",
                "short_name": "ПРОД МОДУЛЬ",
                "description": "Продажа билетов, требующих формирование заявки в модуль",
                "type": "sales",
                "kw": [
                    "182513280416227328",
                    "124184075014512640",
                    "176070870232473600",
                    "183964644610678784"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "access": "",
        "color": null,
        "description": "Уточните у клиента тариф для оформления заявки в модуле продаж. Используйте фразы «какой тариф рассматриваете», «вас интересует эконом, базовый, с багажом, без багажа».",
        "role": null,
        "script_type": null,
        "user_code": 2.7,
        "weight": 1
    },
    {
        "_id": "62179d4012ff2f05ad1e9279",
        "name": "Даты, маршрут",
        "code": null,
        "reference": [
            "216952749961519104"
        ],
        "user_code": null,
        "short_name": "Даты маршрут",
        "description": "Уточните у клиента параметры обмена билета (дату, маршрут, на кого из пассажиров изменить билета)",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "auto_exchange": {
                "name": "auto_exchange",
                "screen_name": "Автообмен",
                "short_name": "АОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996423537795072"
                ]
            },
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            },
            "invol24": {
                "name": "invol24",
                "screen_name": "Invol 24",
                "short_name": "INVOL24",
                "description": "",
                "type": "exchange",
                "kw": [
                    "227890719061188608"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "62179e3412ff2f05ad1e9289",
        "name": "Доплата",
        "code": null,
        "reference": [
            "216984763129405440"
        ],
        "user_code": null,
        "short_name": "Доплата",
        "description": "Информируйте клиента о размере сборов и наличии доплат за обмен билета",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "auto_exchange": {
                "name": "auto_exchange",
                "screen_name": "Автообмен",
                "short_name": "АОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996423537795072"
                ]
            },
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "62179e5912ff2f05ad1e928e",
        "name": "Паспортные данные",
        "code": null,
        "reference": [
            "216992306702589952"
        ],
        "user_code": null,
        "short_name": "Пасп.данные",
        "description": "Для совершения операции обмена билета обязательно уточните у клиента паспортные данные",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "auto_exchange": {
                "name": "auto_exchange",
                "screen_name": "Автообмен",
                "short_name": "АОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996423537795072"
                ]
            },
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            },
            "invol24": {
                "name": "invol24",
                "screen_name": "Invol 24",
                "short_name": "INVOL24",
                "description": "",
                "type": "exchange",
                "kw": [
                    "227890719061188608"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "62179ec912ff2f05ad1e9293",
        "name": "Проверка деталей",
        "code": null,
        "reference": [
            "124223192460959744"
        ],
        "user_code": null,
        "short_name": "Проверка деталей",
        "description": "Получите у клиента подтверждение о правильности записанных данных. Используйте фразы «итак, подведу итог\", «итак, проверим информацию\", «давайте сверим перед оплатой».",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "auto_exchange": {
                "name": "auto_exchange",
                "screen_name": "Автообмен",
                "short_name": "АОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996423537795072"
                ]
            },
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            },
            "invol24": {
                "name": "invol24",
                "screen_name": "Invol 24",
                "short_name": "INVOL24",
                "description": "",
                "type": "exchange",
                "kw": [
                    "227890719061188608"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "62179efa12ff2f05ad1e9298",
        "name": "Перевод на оплату",
        "code": null,
        "reference": [
            "216996423537795072"
        ],
        "user_code": null,
        "short_name": "Перевод на оплату",
        "description": "Информируйте клиента о том, что вы собираетесь перевести звонок на систему оплаты.",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": 0
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "auto_exchange": {
                "name": "auto_exchange",
                "screen_name": "Автообмен",
                "short_name": "АОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996423537795072"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "62179f3d12ff2f05ad1e929d",
        "name": "Начало создания заявки",
        "code": null,
        "reference": [
            "216996720997834752"
        ],
        "user_code": null,
        "short_name": "Начало создания заявки",
        "description": "Информируйте клиента о том, что вы начинаете оформление заявки на обмен",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "62179f6512ff2f05ad1e92a2",
        "name": "Окончание создания заявки",
        "code": null,
        "reference": [
            "216997119775481856"
        ],
        "user_code": null,
        "short_name": "Окончание создания заявки",
        "description": "Информируйте клиента о завершении создания заявки.",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T14:55:43.322Z",
        "processes": {
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "6217a32f12ff2f05ad1e92da",
        "name": "Предупреждение",
        "code": null,
        "reference": [
            "216997334108610560"
        ],
        "user_code": null,
        "short_name": "Предупреждение",
        "description": "Предупредите клиента о том, что изменения в билете закреплены. Используйте фразы «закрепляем изменения», «согласны на обмен билета» и тд",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "name": "Скрипт обмена",
                "short_name": "ОБМ",
                "description": "",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": null
            }
        },
        "version": 0,
        "created": "2022-02-24T15:23:42.994Z",
        "processes": {
            "request_exchange": {
                "name": "request_exchange",
                "screen_name": "через заявку",
                "short_name": "ЗАЯВКА ОБМ",
                "description": "",
                "type": "exchange",
                "kw": [
                    "216984763129405440",
                    "216996720997834752",
                    "216997119775481856"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "updated": "2022-09-23T10:38:27.565Z"
    },
    {
        "_id": "621896db0097019a0b316c36",
        "name": "Invol 24",
        "code": null,
        "reference": [
            "227890719061188608"
        ],
        "user_code": null,
        "short_name": "Invol 24",
        "description": "Информируйте клиента о том, что обмен будет без сборов. Используйте фразу \"так как с момента покупки прошло менее двадцати четырёх часов\"",
        "type": "step",
        "parent_id": "62179cbd12ff2f05ad1e9267",
        "parameters": {
            "script": {
                "screen_name": "script",
                "name": "Скрипт, %",
                "short_name": "СКР",
                "norm": "20",
                "description": "Полнота скрипта",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "keyword",
                    "screen_name": "Речевой"
                },
                "form": {
                    "name": "compound",
                    "screen_name": "Сложный"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "reference": "",
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            },
            "9YlLg": {
                "screen_name": "9YlLg",
                "name": "Скрипт обмена, %",
                "short_name": "ОБМ",
                "description": "",
                "role": {
                    "name": "discipline",
                    "screen_name": "Дисциплина"
                },
                "type": {
                    "name": "filter",
                    "screen_name": "Фильтр"
                },
                "track": {
                    "name": "operator",
                    "screen_name": "Оператор"
                },
                "form": {
                    "name": "",
                    "screen_name": ""
                },
                "is_negative": "false",
                "aggregation": "avg",
                "weight": 0
            }
        },
        "version": 0,
        "created": "2022-02-25T08:41:53.912Z",
        "processes": {
            "invol24": {
                "name": "invol24",
                "screen_name": "Invol 24",
                "short_name": "INVOL24",
                "description": "",
                "type": "exchange",
                "kw": [
                    "227890719061188608"
                ]
            }
        },
        "excludeFromCalc": false,
        "__v": 1,
        "weight": 2,
        "teams": [],
        "access": "",
        "color": null,
        "role": null,
        "script_type": null,
        "updated": "2022-09-23T10:38:27.565Z"
    }
]
export const blocksChat = [
    {
        "_id": "609e7bc9d94f6a3208143b5e",
        "reference": null,
        "name": "Приветствие",
        "parent_id": "609e7bbed94f6a3208143b5c",
        "type": "block",
        "code": 1,
        "short_name": "Приветствие",
        "color": "#e1e1e1",
        "__v": 0,
        "description": ""
    },
    {
        "_id": "609e7c39d94f6a3208143b60",
        "reference": null,
        "name": "Завершение разговора",
        "parent_id": "609e7bbed94f6a3208143b5c",
        "type": "block",
        "code": 2,
        "short_name": "Завершение разговора",
        "color": "#e1e1e1",
        "__v": 0,
        "description": ""
    }
]

export const stepsChat = [
    {
        "_id": "609e7bebd94f6a3208143b5f",
        "reference": [
            "107895336990679040"
        ],
        "name": "Приветствие",
        "parent_id": "609e7bc9d94f6a3208143b5e",
        "type": "step",
        "code": 1.01,
        "short_name": "Приветствие",
        "parameters": {
            "script": {
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "screen_name": "консультация",
                "short_name": "КОНС",
                "name": "consultation",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "description": "",
        "user_code": 1
    },
    {
        "_id": "609e7c42d94f6a3208143b61",
        "reference": [
            "107895931667488768"
        ],
        "name": "Прощание",
        "parent_id": "609e7c39d94f6a3208143b60",
        "type": "step",
        "code": 2.01,
        "short_name": "Прощание",
        "parameters": {
            "script": {
                "weight": 0
            }
        },
        "processes": {
            "consultation": {
                "screen_name": "консультация",
                "short_name": "КОНС",
                "name": "consultation",
                "type": "consultations"
            }
        },
        "excludeFromCalc": false,
        "__v": 0,
        "description": "",
        "user_code": 2
    }
]