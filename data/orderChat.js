export const orderChat = {
    "_id": "63e133602200927b1a3dc0ff",
    "order_id": "18624067163dmedey9rtz",
    "uid": "18624067163dmedey9rtz",
    "extracted": {
        "0": {
            "name": "Ч1.1. Термины приветствия",
            "hits": 1,
            "type": "category",
            "id": "107895336990679040"
        },
        "1": {
            "name": "Отказ в помощи",
            "hits": 1,
            "type": "category",
            "id": "101368544914055168"
        },
        "2": {
            "name": "Ч.Вежливость",
            "hits": 1,
            "type": "category",
            "id": "107896367594086400"
        },
        "3": {
            "name": "Ч2.1. Прощание",
            "hits": 1,
            "type": "category",
            "id": "107895931667488768"
        },
        "4": {
            "name": "Ч.Отказ в помощи",
            "hits": 1,
            "type": "category",
            "id": "278633919971074048"
        }
    },
    "meta": {
        "local_id": "a6656OJKBpQYRD5l8qz7OOrutndmeDEY9RTz",
        "open_time": {
            "$date": {
                "$numberLong": "1675641647000"
            }
        },
        "order_open": {
            "$date": {
                "$numberLong": "1675641647000"
            }
        },
        "chat_duration": 1539,
        "process_time": {
            "$date": {
                "$numberLong": "1675650083000"
            }
        },
        "created_time": {
            "$date": {
                "$numberLong": "1675641600000"
            }
        },
        "silence_count": 21,
        "silence_duration": 1525.088,
        "silence_max": 338.444,
        "client": "Любовь Наседкина",
        "operator": "Тарасов Вячеслав",
        "application": "s7mobile",
        "channel": "CHAT",
        "chatId": "a6656OJKBpQYRD5l8qz7OOrutndmeDEY9RTz",
        "sessionId": "18624067163dmedey9rtz",
        "reaction_time": 4.149,
        "timezone": "+7"
    },
    "scoring": {
        "count": 1,
        "invalid": 0,
        "spi": 75,
        "points": 150,
        "max_points": 200,
        "process": "consultation",
        "checklist": {
            "609e7c42d94f6a3208143b61": {
                "_id": {
                    "$oid": "609e7c42d94f6a3208143b61"
                },
                "user_code": "02",
                "code": "02.01",
                "reference": [
                    "107895931667488768"
                ],
                "features": {
                    "script": {
                        "value": 1,
                        "weight": 0,
                        "reference": "",
                        "is_negative": false,
                        "type": "keyword",
                        "norms": [
                            {
                                "coeff": 1,
                                "gte": 60
                            }
                        ],
                        "words": [
                            379,
                            381,
                            382,
                            383,
                            384,
                            385,
                            386,
                            388,
                            389,
                            390,
                            391,
                            392
                        ],
                        "track": "operator",
                        "value_type": "SELF",
                        "aggregation": "AVG"
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
                "branches": [
                    "Главная"
                ],
                "step": "Прощание",
                "block": "Завершение разговора",
                "script": "Чаты",
                "count": 1,
                "points": 0,
                "max_count": 1,
                "weight": 0
            },
            "609e7bebd94f6a3208143b5f": {
                "_id": {
                    "$oid": "609e7bebd94f6a3208143b5f"
                },
                "user_code": "01",
                "code": "01.01",
                "reference": [
                    "107895336990679040"
                ],
                "features": {
                    "script": {
                        "value": 1,
                        "weight": 0,
                        "reference": "",
                        "is_negative": false,
                        "type": "keyword",
                        "norms": [
                            {
                                "coeff": 1,
                                "gte": 60
                            }
                        ],
                        "words": [
                            270
                        ],
                        "track": "operator",
                        "value_type": "SELF",
                        "aggregation": "AVG"
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
                "branches": [
                    "Главная"
                ],
                "step": "Приветствие",
                "block": "Приветствие",
                "script": "Чаты",
                "count": 1,
                "points": 0,
                "max_count": 1,
                "weight": 0
            }
        },
        "cid": "609e7bbed94f6a3208143b5c",
        "phrases": [
            {
                "positions": [
                    270
                ],
                "track": "operator",
                "param": "NYVKG"
            },
            {
                "positions": [
                    389
                ],
                "track": "operator",
                "param": "courtesy"
            },
            {
                "positions": [
                    308
                ],
                "track": "operator",
                "param": "courtesy"
            },
            {
                "positions": [
                    379,
                    381,
                    382,
                    383,
                    384,
                    385,
                    386,
                    388,
                    389,
                    390,
                    391,
                    392
                ],
                "track": "operator",
                "param": "SH7TT"
            }
        ],
        "parameters": {
            "empathy": {
                "weight": 0,
                "is_negative": false,
                "type": "group",
                "norms": [],
                "points": 110,
                "normalized": 20,
                "normed_value": 80,
                "value_type": "SELF",
                "parameters": [
                    "X761d",
                    "restrictions",
                    "meN7J",
                    "courtesy",
                    "6n1pF"
                ],
                "aggregation": "AVG"
            },
            "31rXi": {
                "value": 1539,
                "weight": 10,
                "reference": "meta.chat_duration",
                "is_negative": true,
                "type": "meta",
                "norms": [
                    {
                        "coeff": 1,
                        "lte": 780
                    }
                ],
                "track": "operator",
                "points": 0,
                "normed_value": 0,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "6n1pF": {
                "weight": 30,
                "reference": "321763801298903040",
                "is_negative": false,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "gte": 2
                    }
                ],
                "track": "operator",
                "points": 0,
                "normed_value": 0,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "meN7J": {
                "weight": 10,
                "reference": "278633919971074048",
                "is_negative": true,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "lte": 3
                    }
                ],
                "track": "operator",
                "points": 10,
                "normed_value": 100,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "restrictions": {
                "weight": 30,
                "reference": "278633714341126144",
                "is_negative": true,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "lte": 12
                    }
                ],
                "track": "operator",
                "points": 30,
                "normed_value": 100,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "Dwpww": {
                "value": 338.444,
                "weight": 10,
                "reference": "meta.silence_max",
                "is_negative": true,
                "type": "meta",
                "norms": [
                    {
                        "coeff": 1,
                        "lte": 600
                    }
                ],
                "track": "operator",
                "points": 10,
                "normed_value": 100,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "courtesy": {
                "value": 1,
                "weight": 40,
                "reference": "107896367594086400",
                "is_negative": false,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "gte": 96
                    }
                ],
                "words": [
                    308,
                    389
                ],
                "track": "operator",
                "points": 40,
                "normalized": 100,
                "normed_value": 100,
                "max_value": 1,
                "value_type": "SELF",
                "phrases": {
                    "пожалуйста": 2
                },
                "aggregation": "AVG"
            },
            "9hg34": {
                "weight": 0,
                "is_negative": false,
                "type": "group",
                "norms": [],
                "points": 0,
                "normalized": 0,
                "normed_value": 0,
                "value_type": "SELF",
                "parameters": [
                    "sTI8v",
                    "n6jrX"
                ],
                "aggregation": "AVG"
            },
            "script": {
                "value": 2,
                "weight": 0,
                "reference": "",
                "is_negative": false,
                "type": "keyword",
                "norms": [
                    {
                        "coeff": 1,
                        "gte": 60
                    }
                ],
                "track": "operator",
                "points": 0,
                "normalized": 100,
                "normed_value": 100,
                "max_value": 2,
                "value_type": "SELF",
                "phrases": {
                    "благодарим за обращение Если у вас появятся вопросы пожалуйста пишите Всего доброго": 1,
                    "Здравствуйте": 1
                },
                "aggregation": "AVG"
            },
            "duration": {
                "weight": 0,
                "is_negative": false,
                "type": "group",
                "norms": [],
                "points": 20,
                "normalized": 0,
                "normed_value": 66.66666666666667,
                "value_type": "SELF",
                "parameters": [
                    "Dwpww",
                    "n6eoQ",
                    "31rXi"
                ],
                "aggregation": "AVG"
            },
            "SH7TT": {
                "value": 1,
                "weight": 10,
                "reference": "107895931667488768",
                "is_negative": false,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "gte": 50
                    }
                ],
                "words": [
                    379,
                    381,
                    382,
                    383,
                    384,
                    385,
                    386,
                    388,
                    389,
                    390,
                    391,
                    392
                ],
                "track": "operator",
                "points": 10,
                "normalized": 100,
                "normed_value": 100,
                "max_value": 1,
                "value_type": "SELF",
                "phrases": {
                    "благодарим за обращение Если у вас появятся вопросы пожалуйста пишите Всего доброго": 1
                },
                "aggregation": "AVG"
            },
            "NYVKG": {
                "value": 1,
                "weight": 10,
                "reference": "107895336990679040",
                "is_negative": false,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "gte": 50
                    }
                ],
                "words": [
                    270
                ],
                "track": "operator",
                "points": 10,
                "normalized": 100,
                "normed_value": 100,
                "max_value": 1,
                "value_type": "SELF",
                "phrases": {
                    "Здравствуйте": 1
                },
                "aggregation": "AVG"
            },
            "algor": {
                "weight": 0,
                "is_negative": false,
                "type": "group",
                "norms": [],
                "points": 0,
                "normalized": 0,
                "normed_value": 0,
                "value_type": "SELF",
                "parameters": [
                    "3V43c"
                ],
                "aggregation": "AVG"
            },
            "n6eoQ": {
                "value": 4.149,
                "weight": 10,
                "reference": "meta.reaction_time",
                "is_negative": true,
                "type": "meta",
                "norms": [
                    {
                        "coeff": 1,
                        "lte": 15
                    }
                ],
                "track": "operator",
                "points": 10,
                "normed_value": 100,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "3V43c": {
                "weight": 10,
                "reference": "321764137577226240",
                "is_negative": false,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "gte": 7
                    }
                ],
                "track": "operator",
                "points": 0,
                "normed_value": 0,
                "value_type": "SELF",
                "aggregation": "AVG"
            },
            "etecet": {
                "weight": 0,
                "is_negative": false,
                "type": "group",
                "norms": [],
                "points": 20,
                "normalized": 100,
                "normed_value": 100,
                "value_type": "SELF",
                "parameters": [
                    "NYVKG",
                    "SH7TT"
                ],
                "aggregation": "AVG"
            },
            "X761d": {
                "weight": 30,
                "reference": "278633268176232448",
                "is_negative": true,
                "type": "keyword_simple",
                "norms": [
                    {
                        "coeff": 1,
                        "lte": 3
                    }
                ],
                "track": "operator",
                "points": 30,
                "normed_value": 100,
                "value_type": "SELF",
                "aggregation": "AVG"
            }
        }
    },
    "dialog": {
        "client": [
            {
                "value": "Здравствуйте",
                "phrase_id": 0,
                "offset": 0,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "У",
                "phrase_id": 0,
                "offset": 0.001,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "меня",
                "phrase_id": 0,
                "offset": 0.002,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "статус",
                "phrase_id": 0,
                "offset": 0.003,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "silver",
                "phrase_id": 0,
                "offset": 0.004,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Не",
                "phrase_id": 0,
                "offset": 0.005,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "могу",
                "phrase_id": 0,
                "offset": 0.006,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "выбрать",
                "phrase_id": 0,
                "offset": 0.007,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "места",
                "phrase_id": 0,
                "offset": 0.008,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "бесплатно",
                "phrase_id": 0,
                "offset": 0.009,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Все",
                "phrase_id": 0,
                "offset": 0.01,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "места",
                "phrase_id": 0,
                "offset": 0.011,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "платные",
                "phrase_id": 0,
                "offset": 0.012,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Нужно",
                "phrase_id": 162.945,
                "offset": 162.945,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "еще",
                "phrase_id": 162.945,
                "offset": 162.946,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "2",
                "phrase_id": 162.945,
                "offset": 162.947,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "места",
                "phrase_id": 162.945,
                "offset": 162.948,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "моим",
                "phrase_id": 162.945,
                "offset": 162.949,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "попутчикам",
                "phrase_id": 162.945,
                "offset": 162.95,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Семену",
                "phrase_id": 162.945,
                "offset": 162.951,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "и",
                "phrase_id": 162.945,
                "offset": 162.952,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Захару",
                "phrase_id": 162.945,
                "offset": 162.953,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "8A",
                "phrase_id": 162.945,
                "offset": 162.954,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "8B",
                "phrase_id": 162.945,
                "offset": 162.955,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "8C",
                "phrase_id": 162.945,
                "offset": 162.956,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "И",
                "phrase_id": 211.165,
                "offset": 211.165,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "статус",
                "phrase_id": 211.165,
                "offset": 211.166,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "не",
                "phrase_id": 211.165,
                "offset": 211.167,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "влияет",
                "phrase_id": 211.165,
                "offset": 211.168,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Статус",
                "phrase_id": 256.268,
                "offset": 256.268,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Silver",
                "phrase_id": 256.268,
                "offset": 256.269,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "предполагает",
                "phrase_id": 256.268,
                "offset": 256.27,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "бесплатный",
                "phrase_id": 256.268,
                "offset": 256.271,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "выбор",
                "phrase_id": 256.268,
                "offset": 256.272,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "места",
                "phrase_id": 256.268,
                "offset": 256.273,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Привилегии",
                "phrase_id": 392.312,
                "offset": 392.312,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "статуса",
                "phrase_id": 392.312,
                "offset": 392.313,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "silver",
                "phrase_id": 392.312,
                "offset": 392.314,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "предполагают",
                "phrase_id": 392.312,
                "offset": 392.315,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "бесплатный",
                "phrase_id": 392.312,
                "offset": 392.316,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "выбор",
                "phrase_id": 392.312,
                "offset": 392.317,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "места",
                "phrase_id": 392.312,
                "offset": 392.318,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "в",
                "phrase_id": 392.312,
                "offset": 392.319,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "том",
                "phrase_id": 392.312,
                "offset": 392.32,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "числе",
                "phrase_id": 392.312,
                "offset": 392.321,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "и",
                "phrase_id": 392.312,
                "offset": 392.322,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "EXTRA",
                "phrase_id": 392.312,
                "offset": 392.323,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "SPACE",
                "phrase_id": 392.312,
                "offset": 392.324,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "",
                "phrase_id": 392.845,
                "offset": 392.845,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Здравствуйте",
                "phrase_id": 445.765,
                "offset": 445.765,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Вячеслав",
                "phrase_id": 445.765,
                "offset": 445.766,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Не",
                "phrase_id": 508.841,
                "offset": 508.841,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "могу",
                "phrase_id": 508.841,
                "offset": 508.842,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "бесплатно",
                "phrase_id": 508.841,
                "offset": 508.843,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "выбрать",
                "phrase_id": 508.841,
                "offset": 508.844,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "места",
                "phrase_id": 508.841,
                "offset": 508.845,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "ни",
                "phrase_id": 508.841,
                "offset": 508.846,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "на",
                "phrase_id": 508.841,
                "offset": 508.847,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "один",
                "phrase_id": 508.841,
                "offset": 508.848,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "рейс",
                "phrase_id": 508.841,
                "offset": 508.849,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Бронь",
                "phrase_id": 760.33,
                "offset": 760.33,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "LBKNTE",
                "phrase_id": 760.33,
                "offset": 760.331,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "LBKN87",
                "phrase_id": 760.33,
                "offset": 760.332,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "LBKK5I",
                "phrase_id": 760.33,
                "offset": 760.333,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "LEGIYT",
                "phrase_id": 760.33,
                "offset": 760.334,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "На",
                "phrase_id": 773.906,
                "offset": 773.906,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "всех",
                "phrase_id": 773.906,
                "offset": 773.907,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "попутчиков",
                "phrase_id": 773.906,
                "offset": 773.908,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "В",
                "phrase_id": 1419.998,
                "offset": 1419.998,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "бронировании",
                "phrase_id": 1419.998,
                "offset": 1419.999,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "LBKK5I",
                "phrase_id": 1419.998,
                "offset": 1420,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "летит",
                "phrase_id": 1419.998,
                "offset": 1420.001,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "попутчик",
                "phrase_id": 1419.998,
                "offset": 1420.002,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "Почему",
                "phrase_id": 1419.998,
                "offset": 1420.003,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "для",
                "phrase_id": 1419.998,
                "offset": 1420.004,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "него",
                "phrase_id": 1419.998,
                "offset": 1420.005,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            },
            {
                "value": "платно",
                "phrase_id": 1419.998,
                "offset": 1420.006,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "client"
            }
        ],
        "client_phrases": [
            {
                "phrase_id": 0,
                "offset": 0,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"0\"><span time=\"0\">Здравствуйте</span>! <span time=\"1\">У</span> <span time=\"2\">меня</span> <span time=\"3\">статус</span> <span time=\"4\">silver</span>. <span time=\"5\">Не</span> <span time=\"6\">могу</span> <span time=\"7\">выбрать</span> <span time=\"8\">места</span> <span time=\"9\">бесплатно</span>. <span time=\"10\">Все</span> <span time=\"11\">места</span> <span time=\"12\">платные</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 162.945,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"162945\"><span time=\"162945\">Нужно</span> <span time=\"162946\">еще</span> <span time=\"162947\">2</span> <span time=\"162948\">места</span> <span time=\"162949\">моим</span> <span time=\"162950\">попутчикам</span> <span time=\"162951\">Семену</span> <span time=\"162952\">и</span> <span time=\"162953\">Захару</span>. <span time=\"162954\">8A</span>, <span time=\"162955\">8B</span>, <span time=\"162956\">8C</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 211.165,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"211165\"><span time=\"211165\">И</span> <span time=\"211166\">статус</span> <span time=\"211167\">не</span> <span time=\"211168\">влияет</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 256.268,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"256268\"><span time=\"256268\">Статус</span> <span time=\"256269\">Silver</span> <span time=\"256270\">предполагает</span> <span time=\"256271\">бесплатный</span> <span time=\"256272\">выбор</span> <span time=\"256273\">места</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 392.312,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"392312\"><span time=\"392312\">Привилегии</span> <span time=\"392313\">статуса</span> <span time=\"392314\">silver</span> <span time=\"392315\">предполагают</span> <span time=\"392316\">бесплатный</span> <span time=\"392317\">выбор</span> <span time=\"392318\">места</span>, <span time=\"392319\">в</span> <span time=\"392320\">том</span> <span time=\"392321\">числе</span> <span time=\"392322\">и</span> <span time=\"392323\">EXTRA</span> <span time=\"392324\">SPACE</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 392.845,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"392845\"><span time=\"392845\"><a href=\"https://mc.techlab.s7.ru/file/download/06022023/e5dc25acd12949bd899ec915ecdd8222.jpeg\"><img src=\"https://mc.techlab.s7.ru/file/download/06022023/ca99e88bf8354ccfb8deaafe054e5ca1.jpg\" style=\"max-width: 100px;\"></a></span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 445.765,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"445765\"><span time=\"445765\">Здравствуйте</span>, <span time=\"445766\">Вячеслав</span>!</p>"
            },
            {
                "phrase_id": 0,
                "offset": 508.841,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"508841\"><span time=\"508841\">Не</span> <span time=\"508842\">могу</span> <span time=\"508843\">бесплатно</span> <span time=\"508844\">выбрать</span> <span time=\"508845\">места</span> <span time=\"508846\">ни</span> <span time=\"508847\">на</span> <span time=\"508848\">один</span> <span time=\"508849\">рейс</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 760.33,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"760330\"><span time=\"760330\">Бронь</span> <span time=\"760331\">LBKNTE</span>, <span time=\"760332\">LBKN87</span>, <span time=\"760333\">LBKK5I</span>, <span time=\"760334\">LEGIYT</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 773.906,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"773906\"><span time=\"773906\">На</span> <span time=\"773907\">всех</span> <span time=\"773908\">попутчиков</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 1419.998,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "client",
                "raw_html": "<p userid=\"client\" name=\"Любовь\" username=\"client\" time=\"1419998\"><span time=\"1419998\">В</span> <span time=\"1419999\">бронировании</span> <span time=\"1420000\">LBKK5I</span> <span time=\"1420001\">летит</span> <span time=\"1420002\">попутчик</span>. <span time=\"1420003\">Почему</span> <span time=\"1420004\">для</span> <span time=\"1420005\">него</span> <span time=\"1420006\">платно</span>?</p>"
            }
        ],
        "operator": [
            {
                "value": "Здравствуйте",
                "phrase_id": 4.149,
                "offset": 4.149,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Любовь",
                "phrase_id": 4.149,
                "offset": 4.15,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Я",
                "phrase_id": 4.149,
                "offset": 4.151,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 4.149,
                "offset": 4.152,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "помощник",
                "phrase_id": 4.149,
                "offset": 4.153,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "S7",
                "phrase_id": 4.149,
                "offset": 4.154,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Airlines",
                "phrase_id": 4.149,
                "offset": 4.155,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Вы",
                "phrase_id": 4.151,
                "offset": 4.151,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "хотите",
                "phrase_id": 4.151,
                "offset": 4.152,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "выбрать",
                "phrase_id": 4.151,
                "offset": 4.153,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 4.151,
                "offset": 4.154,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "на",
                "phrase_id": 4.151,
                "offset": 4.155,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "рейсе",
                "phrase_id": 4.151,
                "offset": 4.156,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "S7",
                "phrase_id": 4.151,
                "offset": 4.157,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "3062",
                "phrase_id": 4.151,
                "offset": 4.158,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "BQS",
                "phrase_id": 4.151,
                "offset": 4.159,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 4.151,
                "offset": 4.16,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "DME",
                "phrase_id": 4.151,
                "offset": 4.161,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "верно",
                "phrase_id": 4.151,
                "offset": 4.162,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Введите",
                "phrase_id": 4.153,
                "offset": 4.153,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "один",
                "phrase_id": 4.153,
                "offset": 4.154,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "из",
                "phrase_id": 4.153,
                "offset": 4.155,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вариантов",
                "phrase_id": 4.153,
                "offset": 4.156,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 4.153,
                "offset": 4.157,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Да",
                "phrase_id": 4.153,
                "offset": 4.158,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 4.153,
                "offset": 4.159,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Нет",
                "phrase_id": 4.153,
                "offset": 4.16,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Сейчас",
                "phrase_id": 20.84,
                "offset": 20.84,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "сделаем",
                "phrase_id": 20.84,
                "offset": 20.841,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Только",
                "phrase_id": 20.84,
                "offset": 20.842,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "сначала",
                "phrase_id": 20.84,
                "offset": 20.843,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "определитесь",
                "phrase_id": 20.84,
                "offset": 20.844,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Введите",
                "phrase_id": 20.842,
                "offset": 20.842,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "один",
                "phrase_id": 20.842,
                "offset": 20.843,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "из",
                "phrase_id": 20.842,
                "offset": 20.844,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вариантов",
                "phrase_id": 20.842,
                "offset": 20.845,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 20.842,
                "offset": 20.846,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Я",
                "phrase_id": 20.842,
                "offset": 20.847,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "не",
                "phrase_id": 20.842,
                "offset": 20.848,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "знаю",
                "phrase_id": 20.842,
                "offset": 20.849,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "—",
                "phrase_id": 20.842,
                "offset": 20.85,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "давай",
                "phrase_id": 20.842,
                "offset": 20.851,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "на",
                "phrase_id": 20.842,
                "offset": 20.852,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "свой",
                "phrase_id": 20.842,
                "offset": 20.853,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вкус",
                "phrase_id": 20.842,
                "offset": 20.854,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 20.842,
                "offset": 20.855,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Я",
                "phrase_id": 20.842,
                "offset": 20.856,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "знаю",
                "phrase_id": 20.842,
                "offset": 20.857,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "где",
                "phrase_id": 20.842,
                "offset": 20.858,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "хочу",
                "phrase_id": 20.842,
                "offset": 20.859,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "сидеть",
                "phrase_id": 20.842,
                "offset": 20.86,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Здорово",
                "phrase_id": 33.252,
                "offset": 33.252,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "что",
                "phrase_id": 33.252,
                "offset": 33.253,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "у",
                "phrase_id": 33.252,
                "offset": 33.254,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 33.252,
                "offset": 33.255,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "есть",
                "phrase_id": 33.252,
                "offset": 33.256,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "любимое",
                "phrase_id": 33.252,
                "offset": 33.257,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 33.252,
                "offset": 33.258,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Напишите",
                "phrase_id": 33.252,
                "offset": 33.259,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "его",
                "phrase_id": 33.252,
                "offset": 33.26,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "номер",
                "phrase_id": 33.252,
                "offset": 33.261,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "например",
                "phrase_id": 33.252,
                "offset": 33.262,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "13F",
                "phrase_id": 33.252,
                "offset": 33.263,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Напоминаю",
                "phrase_id": 168.659,
                "offset": 168.659,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "ваш",
                "phrase_id": 168.659,
                "offset": 168.66,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "тариф",
                "phrase_id": 168.659,
                "offset": 168.661,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Эконом",
                "phrase_id": 168.659,
                "offset": 168.662,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Standard",
                "phrase_id": 168.659,
                "offset": 168.663,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "—",
                "phrase_id": 168.659,
                "offset": 168.664,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "выбрать",
                "phrase_id": 168.659,
                "offset": 168.665,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 168.659,
                "offset": 168.666,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "можно",
                "phrase_id": 168.659,
                "offset": 168.667,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "бесплатно",
                "phrase_id": 168.659,
                "offset": 168.668,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "если",
                "phrase_id": 168.659,
                "offset": 168.669,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "уже",
                "phrase_id": 168.659,
                "offset": 168.67,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "открыта",
                "phrase_id": 168.659,
                "offset": 168.671,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "онлайн-регистрация",
                "phrase_id": 168.659,
                "offset": 168.672,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Если",
                "phrase_id": 168.659,
                "offset": 168.673,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "нет",
                "phrase_id": 168.659,
                "offset": 168.674,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "услуга",
                "phrase_id": 168.659,
                "offset": 168.675,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "будет",
                "phrase_id": 168.659,
                "offset": 168.676,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "платной",
                "phrase_id": 168.659,
                "offset": 168.677,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Итак",
                "phrase_id": 168.659,
                "offset": 168.678,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "На",
                "phrase_id": 168.659,
                "offset": 168.679,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "рейсе",
                "phrase_id": 168.659,
                "offset": 168.68,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "S7",
                "phrase_id": 168.659,
                "offset": 168.681,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "3062",
                "phrase_id": 168.659,
                "offset": 168.682,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "по",
                "phrase_id": 168.659,
                "offset": 168.683,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "маршруту",
                "phrase_id": 168.659,
                "offset": 168.684,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "BQS-DME",
                "phrase_id": 168.659,
                "offset": 168.685,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "я",
                "phrase_id": 168.659,
                "offset": 168.686,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "подобрал",
                "phrase_id": 168.659,
                "offset": 168.687,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "для",
                "phrase_id": 168.659,
                "offset": 168.688,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 168.659,
                "offset": 168.689,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 168.659,
                "offset": 168.69,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "8C",
                "phrase_id": 168.659,
                "offset": 168.691,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "у",
                "phrase_id": 168.659,
                "offset": 168.692,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "прохода",
                "phrase_id": 168.659,
                "offset": 168.693,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Стоит-",
                "phrase_id": 168.659,
                "offset": 168.694,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "700",
                "phrase_id": 168.659,
                "offset": 168.695,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "р",
                "phrase_id": 168.659,
                "offset": 168.696,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Хотите",
                "phrase_id": 168.659,
                "offset": 168.697,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "занять",
                "phrase_id": 168.659,
                "offset": 168.698,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "и",
                "phrase_id": 168.659,
                "offset": 168.699,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "оплатить",
                "phrase_id": 168.659,
                "offset": 168.7,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "это",
                "phrase_id": 168.659,
                "offset": 168.701,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 168.659,
                "offset": 168.702,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Введите",
                "phrase_id": 168.661,
                "offset": 168.661,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "один",
                "phrase_id": 168.661,
                "offset": 168.662,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "из",
                "phrase_id": 168.661,
                "offset": 168.663,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вариантов",
                "phrase_id": 168.661,
                "offset": 168.664,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 168.661,
                "offset": 168.665,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Не",
                "phrase_id": 168.661,
                "offset": 168.666,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "подожду",
                "phrase_id": 168.661,
                "offset": 168.667,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "регистрацию",
                "phrase_id": 168.661,
                "offset": 168.668,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 168.661,
                "offset": 168.669,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Да",
                "phrase_id": 168.661,
                "offset": 168.67,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "мне",
                "phrase_id": 168.661,
                "offset": 168.671,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "нравится",
                "phrase_id": 168.661,
                "offset": 168.672,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Простите",
                "phrase_id": 216.954,
                "offset": 216.954,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "я",
                "phrase_id": 216.954,
                "offset": 216.955,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 216.954,
                "offset": 216.956,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "не",
                "phrase_id": 216.954,
                "offset": 216.957,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "понял",
                "phrase_id": 216.954,
                "offset": 216.958,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Напоминаю",
                "phrase_id": 216.956,
                "offset": 216.956,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "ваш",
                "phrase_id": 216.956,
                "offset": 216.957,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "тариф",
                "phrase_id": 216.956,
                "offset": 216.958,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Эконом",
                "phrase_id": 216.956,
                "offset": 216.959,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Standard",
                "phrase_id": 216.956,
                "offset": 216.96,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "—",
                "phrase_id": 216.956,
                "offset": 216.961,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "выбрать",
                "phrase_id": 216.956,
                "offset": 216.962,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 216.956,
                "offset": 216.963,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "можно",
                "phrase_id": 216.956,
                "offset": 216.964,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "бесплатно",
                "phrase_id": 216.956,
                "offset": 216.965,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "если",
                "phrase_id": 216.956,
                "offset": 216.966,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "уже",
                "phrase_id": 216.956,
                "offset": 216.967,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "открыта",
                "phrase_id": 216.956,
                "offset": 216.968,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "онлайн-регистрация",
                "phrase_id": 216.956,
                "offset": 216.969,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Если",
                "phrase_id": 216.956,
                "offset": 216.97,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "нет",
                "phrase_id": 216.956,
                "offset": 216.971,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "услуга",
                "phrase_id": 216.956,
                "offset": 216.972,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "будет",
                "phrase_id": 216.956,
                "offset": 216.973,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "платной",
                "phrase_id": 216.956,
                "offset": 216.974,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Итак",
                "phrase_id": 216.956,
                "offset": 216.975,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "На",
                "phrase_id": 216.956,
                "offset": 216.976,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "рейсе",
                "phrase_id": 216.956,
                "offset": 216.977,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "S7",
                "phrase_id": 216.956,
                "offset": 216.978,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "3062",
                "phrase_id": 216.956,
                "offset": 216.979,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "по",
                "phrase_id": 216.956,
                "offset": 216.98,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "маршруту",
                "phrase_id": 216.956,
                "offset": 216.981,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "BQS-DME",
                "phrase_id": 216.956,
                "offset": 216.982,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "я",
                "phrase_id": 216.956,
                "offset": 216.983,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "подобрал",
                "phrase_id": 216.956,
                "offset": 216.984,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "для",
                "phrase_id": 216.956,
                "offset": 216.985,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 216.956,
                "offset": 216.986,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 216.956,
                "offset": 216.987,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "8C",
                "phrase_id": 216.956,
                "offset": 216.988,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "у",
                "phrase_id": 216.956,
                "offset": 216.989,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "прохода",
                "phrase_id": 216.956,
                "offset": 216.99,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Стоит-",
                "phrase_id": 216.956,
                "offset": 216.991,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "700",
                "phrase_id": 216.956,
                "offset": 216.992,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "р",
                "phrase_id": 216.956,
                "offset": 216.993,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Хотите",
                "phrase_id": 216.956,
                "offset": 216.994,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "занять",
                "phrase_id": 216.956,
                "offset": 216.995,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "и",
                "phrase_id": 216.956,
                "offset": 216.996,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "оплатить",
                "phrase_id": 216.956,
                "offset": 216.997,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "это",
                "phrase_id": 216.956,
                "offset": 216.998,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 216.956,
                "offset": 216.999,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Введите",
                "phrase_id": 216.957,
                "offset": 216.957,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "один",
                "phrase_id": 216.957,
                "offset": 216.958,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "из",
                "phrase_id": 216.957,
                "offset": 216.959,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вариантов",
                "phrase_id": 216.957,
                "offset": 216.96,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 216.957,
                "offset": 216.961,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Не",
                "phrase_id": 216.957,
                "offset": 216.962,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "подожду",
                "phrase_id": 216.957,
                "offset": 216.963,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "регистрацию",
                "phrase_id": 216.957,
                "offset": 216.964,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 216.957,
                "offset": 216.965,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Да",
                "phrase_id": 216.957,
                "offset": 216.966,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "мне",
                "phrase_id": 216.957,
                "offset": 216.967,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "нравится",
                "phrase_id": 216.957,
                "offset": 216.968,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Простите",
                "phrase_id": 261.296,
                "offset": 261.296,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "я",
                "phrase_id": 261.296,
                "offset": 261.297,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 261.296,
                "offset": 261.298,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "не",
                "phrase_id": 261.296,
                "offset": 261.299,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "понял",
                "phrase_id": 261.296,
                "offset": 261.3,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Напоминаю",
                "phrase_id": 261.297,
                "offset": 261.297,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "ваш",
                "phrase_id": 261.297,
                "offset": 261.298,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "тариф",
                "phrase_id": 261.297,
                "offset": 261.299,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Эконом",
                "phrase_id": 261.297,
                "offset": 261.3,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Standard",
                "phrase_id": 261.297,
                "offset": 261.301,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "—",
                "phrase_id": 261.297,
                "offset": 261.302,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "выбрать",
                "phrase_id": 261.297,
                "offset": 261.303,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 261.297,
                "offset": 261.304,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "можно",
                "phrase_id": 261.297,
                "offset": 261.305,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "бесплатно",
                "phrase_id": 261.297,
                "offset": 261.306,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "если",
                "phrase_id": 261.297,
                "offset": 261.307,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "уже",
                "phrase_id": 261.297,
                "offset": 261.308,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "открыта",
                "phrase_id": 261.297,
                "offset": 261.309,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "онлайн-регистрация",
                "phrase_id": 261.297,
                "offset": 261.31,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Если",
                "phrase_id": 261.297,
                "offset": 261.311,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "нет",
                "phrase_id": 261.297,
                "offset": 261.312,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "услуга",
                "phrase_id": 261.297,
                "offset": 261.313,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "будет",
                "phrase_id": 261.297,
                "offset": 261.314,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "платной",
                "phrase_id": 261.297,
                "offset": 261.315,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Итак",
                "phrase_id": 261.297,
                "offset": 261.316,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "На",
                "phrase_id": 261.297,
                "offset": 261.317,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "рейсе",
                "phrase_id": 261.297,
                "offset": 261.318,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "S7",
                "phrase_id": 261.297,
                "offset": 261.319,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "3062",
                "phrase_id": 261.297,
                "offset": 261.32,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "по",
                "phrase_id": 261.297,
                "offset": 261.321,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "маршруту",
                "phrase_id": 261.297,
                "offset": 261.322,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "BQS-DME",
                "phrase_id": 261.297,
                "offset": 261.323,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "я",
                "phrase_id": 261.297,
                "offset": 261.324,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "подобрал",
                "phrase_id": 261.297,
                "offset": 261.325,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "для",
                "phrase_id": 261.297,
                "offset": 261.326,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 261.297,
                "offset": 261.327,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 261.297,
                "offset": 261.328,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "8C",
                "phrase_id": 261.297,
                "offset": 261.329,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "у",
                "phrase_id": 261.297,
                "offset": 261.33,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "прохода",
                "phrase_id": 261.297,
                "offset": 261.331,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Стоит-",
                "phrase_id": 261.297,
                "offset": 261.332,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "700",
                "phrase_id": 261.297,
                "offset": 261.333,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "р",
                "phrase_id": 261.297,
                "offset": 261.334,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Хотите",
                "phrase_id": 261.297,
                "offset": 261.335,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "занять",
                "phrase_id": 261.297,
                "offset": 261.336,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "и",
                "phrase_id": 261.297,
                "offset": 261.337,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "оплатить",
                "phrase_id": 261.297,
                "offset": 261.338,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "это",
                "phrase_id": 261.297,
                "offset": 261.339,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "место",
                "phrase_id": 261.297,
                "offset": 261.34,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Введите",
                "phrase_id": 261.299,
                "offset": 261.299,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "один",
                "phrase_id": 261.299,
                "offset": 261.3,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "из",
                "phrase_id": 261.299,
                "offset": 261.301,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вариантов",
                "phrase_id": 261.299,
                "offset": 261.302,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 261.299,
                "offset": 261.303,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Не",
                "phrase_id": 261.299,
                "offset": 261.304,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "подожду",
                "phrase_id": 261.299,
                "offset": 261.305,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "регистрацию",
                "phrase_id": 261.299,
                "offset": 261.306,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "-",
                "phrase_id": 261.299,
                "offset": 261.307,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Да",
                "phrase_id": 261.299,
                "offset": 261.308,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "мне",
                "phrase_id": 261.299,
                "offset": 261.309,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "нравится",
                "phrase_id": 261.299,
                "offset": 261.31,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Извините",
                "phrase_id": 397.4,
                "offset": 397.4,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "мне",
                "phrase_id": 397.4,
                "offset": 397.401,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "не",
                "phrase_id": 397.4,
                "offset": 397.402,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "удалось",
                "phrase_id": 397.4,
                "offset": 397.403,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "распознать",
                "phrase_id": 397.4,
                "offset": 397.404,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "ваш",
                "phrase_id": 397.4,
                "offset": 397.405,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "ответ",
                "phrase_id": 397.4,
                "offset": 397.406,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Перевожу",
                "phrase_id": 397.402,
                "offset": 397.402,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "вас",
                "phrase_id": 397.402,
                "offset": 397.403,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "на",
                "phrase_id": 397.402,
                "offset": 397.404,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "оператора",
                "phrase_id": 397.402,
                "offset": 397.405,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "bot"
            },
            {
                "value": "Оператор",
                "phrase_id": 397.417,
                "offset": 397.417,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "ответит",
                "phrase_id": 397.417,
                "offset": 397.418,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "вам",
                "phrase_id": 397.417,
                "offset": 397.419,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "в",
                "phrase_id": 397.417,
                "offset": 397.42,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "течение",
                "phrase_id": 397.417,
                "offset": 397.421,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "минуты",
                "phrase_id": 397.417,
                "offset": 397.422,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Диалог",
                "phrase_id": 398.142,
                "offset": 398.142,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "назначен",
                "phrase_id": 398.142,
                "offset": 398.143,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "на",
                "phrase_id": 398.142,
                "offset": 398.144,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "оператора",
                "phrase_id": 398.142,
                "offset": 398.145,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Вячеслав",
                "phrase_id": 398.142,
                "offset": 398.146,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Тарасов",
                "phrase_id": 398.142,
                "offset": 398.147,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Оператор",
                "phrase_id": 424.952,
                "offset": 424.952,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Вячеслав",
                "phrase_id": 424.952,
                "offset": 424.953,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Т",
                "phrase_id": 424.952,
                "offset": 424.954,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "присоединился",
                "phrase_id": 424.952,
                "offset": 424.955,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "к",
                "phrase_id": 424.952,
                "offset": 424.956,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "диалогу",
                "phrase_id": 424.952,
                "offset": 424.957,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Здравствуйте",
                "phrase_id": 428.578,
                "offset": 428.578,
                "length": 0,
                "entity_ids": [
                    0
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Любовь",
                "phrase_id": 428.578,
                "offset": 428.579,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Верно",
                "phrase_id": 479.234,
                "offset": 479.234,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Привилегии",
                "phrase_id": 479.234,
                "offset": 479.235,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "статуса",
                "phrase_id": 479.234,
                "offset": 479.236,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "silver",
                "phrase_id": 479.234,
                "offset": 479.237,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "предполагают",
                "phrase_id": 479.234,
                "offset": 479.238,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бесплатный",
                "phrase_id": 479.234,
                "offset": 479.239,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "выбор",
                "phrase_id": 479.234,
                "offset": 479.24,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "места",
                "phrase_id": 479.234,
                "offset": 479.241,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "в",
                "phrase_id": 479.234,
                "offset": 479.242,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "том",
                "phrase_id": 479.234,
                "offset": 479.243,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "числе",
                "phrase_id": 479.234,
                "offset": 479.244,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "и",
                "phrase_id": 479.234,
                "offset": 479.245,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "EXTRA",
                "phrase_id": 479.234,
                "offset": 479.246,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "SPACE",
                "phrase_id": 479.234,
                "offset": 479.247,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Бесплатный",
                "phrase_id": 479.234,
                "offset": 479.248,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "выбор",
                "phrase_id": 479.234,
                "offset": 479.249,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "места",
                "phrase_id": 479.234,
                "offset": 479.25,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "в",
                "phrase_id": 479.234,
                "offset": 479.251,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "салоне",
                "phrase_id": 479.234,
                "offset": 479.252,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "после",
                "phrase_id": 479.234,
                "offset": 479.253,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "покупки",
                "phrase_id": 479.234,
                "offset": 479.254,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "билета",
                "phrase_id": 479.234,
                "offset": 479.255,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "из",
                "phrase_id": 479.234,
                "offset": 479.256,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "числа",
                "phrase_id": 479.234,
                "offset": 479.257,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "доступных",
                "phrase_id": 479.234,
                "offset": 479.258,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "на",
                "phrase_id": 479.234,
                "offset": 479.259,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "момент",
                "phrase_id": 479.234,
                "offset": 479.26,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "обращения",
                "phrase_id": 479.234,
                "offset": 479.261,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "в",
                "phrase_id": 479.234,
                "offset": 479.262,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "том",
                "phrase_id": 479.234,
                "offset": 479.263,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "числе",
                "phrase_id": 479.234,
                "offset": 479.264,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "для",
                "phrase_id": 479.234,
                "offset": 479.265,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "2",
                "phrase_id": 479.234,
                "offset": 479.266,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "попутчиков",
                "phrase_id": 479.234,
                "offset": 479.267,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Любовь",
                "phrase_id": 574.003,
                "offset": 574.003,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "уточните",
                "phrase_id": 574.003,
                "offset": 574.004,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "пожалуйста",
                "phrase_id": 574.003,
                "offset": 574.005,
                "length": 0,
                "entity_ids": [
                    2
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "номер",
                "phrase_id": 574.003,
                "offset": 574.006,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "билета",
                "phrase_id": 574.003,
                "offset": 574.007,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "или",
                "phrase_id": 574.003,
                "offset": 574.008,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронирования",
                "phrase_id": 574.003,
                "offset": 574.009,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "В",
                "phrase_id": 1001.079,
                "offset": 1001.079,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронировании",
                "phrase_id": 1001.079,
                "offset": 1001.08,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "LBKNTE",
                "phrase_id": 1001.079,
                "offset": 1001.081,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "оформлен",
                "phrase_id": 1001.079,
                "offset": 1001.082,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "пассажир",
                "phrase_id": 1001.079,
                "offset": 1001.083,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "до",
                "phrase_id": 1001.079,
                "offset": 1001.084,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "лет",
                "phrase_id": 1001.079,
                "offset": 1001.085,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Бронь",
                "phrase_id": 1001.079,
                "offset": 1001.086,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "LBKN87",
                "phrase_id": 1001.079,
                "offset": 1001.087,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "где",
                "phrase_id": 1001.079,
                "offset": 1001.088,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "вы",
                "phrase_id": 1001.079,
                "offset": 1001.089,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "оформлены",
                "phrase_id": 1001.079,
                "offset": 1001.09,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "отмечена",
                "phrase_id": 1001.079,
                "offset": 1001.091,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "как",
                "phrase_id": 1001.079,
                "offset": 1001.092,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "сопровождающий",
                "phrase_id": 1001.079,
                "offset": 1001.093,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Следовательно",
                "phrase_id": 1001.079,
                "offset": 1001.094,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "в",
                "phrase_id": 1001.079,
                "offset": 1001.095,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "вашем",
                "phrase_id": 1001.079,
                "offset": 1001.096,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронировании",
                "phrase_id": 1001.079,
                "offset": 1001.097,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "можно",
                "phrase_id": 1001.079,
                "offset": 1001.098,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "выбирать",
                "phrase_id": 1001.079,
                "offset": 1001.099,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "любое",
                "phrase_id": 1001.079,
                "offset": 1001.1,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "место",
                "phrase_id": 1001.079,
                "offset": 1001.101,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "В",
                "phrase_id": 1001.079,
                "offset": 1001.102,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронировании",
                "phrase_id": 1001.079,
                "offset": 1001.103,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "только",
                "phrase_id": 1001.079,
                "offset": 1001.104,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "во",
                "phrase_id": 1001.079,
                "offset": 1001.105,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "второй",
                "phrase_id": 1001.079,
                "offset": 1001.106,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "части",
                "phrase_id": 1001.079,
                "offset": 1001.107,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "салона",
                "phrase_id": 1001.079,
                "offset": 1001.108,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "кроме",
                "phrase_id": 1001.079,
                "offset": 1001.109,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "мест",
                "phrase_id": 1001.079,
                "offset": 1001.11,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "у",
                "phrase_id": 1001.079,
                "offset": 1001.111,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "аварийных",
                "phrase_id": 1001.079,
                "offset": 1001.112,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "выходов",
                "phrase_id": 1001.079,
                "offset": 1001.113,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "и",
                "phrase_id": 1001.079,
                "offset": 1001.114,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Extra",
                "phrase_id": 1001.079,
                "offset": 1001.115,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "space",
                "phrase_id": 1001.079,
                "offset": 1001.116,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "В",
                "phrase_id": 1339.56,
                "offset": 1339.56,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронировании",
                "phrase_id": 1339.56,
                "offset": 1339.561,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "LBKK5I",
                "phrase_id": 1339.56,
                "offset": 1339.562,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "выбор",
                "phrase_id": 1339.56,
                "offset": 1339.563,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "мест",
                "phrase_id": 1339.56,
                "offset": 1339.564,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "платный",
                "phrase_id": 1339.56,
                "offset": 1339.565,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "В",
                "phrase_id": 1339.56,
                "offset": 1339.566,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронировании",
                "phrase_id": 1339.56,
                "offset": 1339.567,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "LEGIYT",
                "phrase_id": 1339.56,
                "offset": 1339.568,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бесплатный",
                "phrase_id": 1339.56,
                "offset": 1339.569,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "для",
                "phrase_id": 1339.56,
                "offset": 1339.57,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "обоих",
                "phrase_id": 1339.56,
                "offset": 1339.571,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "пассажиров",
                "phrase_id": 1339.56,
                "offset": 1339.572,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Потому",
                "phrase_id": 1453.434,
                "offset": 1453.434,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "что",
                "phrase_id": 1453.434,
                "offset": 1453.435,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "пассажиру",
                "phrase_id": 1453.434,
                "offset": 1453.436,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "больше",
                "phrase_id": 1453.434,
                "offset": 1453.437,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "12",
                "phrase_id": 1453.434,
                "offset": 1453.438,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "лет",
                "phrase_id": 1453.434,
                "offset": 1453.439,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "и",
                "phrase_id": 1453.434,
                "offset": 1453.44,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "он",
                "phrase_id": 1453.434,
                "offset": 1453.441,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "оформлен",
                "phrase_id": 1453.434,
                "offset": 1453.442,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "в",
                "phrase_id": 1453.434,
                "offset": 1453.443,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "отдельном",
                "phrase_id": 1453.434,
                "offset": 1453.444,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "от",
                "phrase_id": 1453.434,
                "offset": 1453.445,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "вас",
                "phrase_id": 1453.434,
                "offset": 1453.446,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "бронировании",
                "phrase_id": 1453.434,
                "offset": 1453.447,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Любовь",
                "phrase_id": 1539.018,
                "offset": 1539.018,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "благодарим",
                "phrase_id": 1539.018,
                "offset": 1539.019,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "вас",
                "phrase_id": 1539.018,
                "offset": 1539.02,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "за",
                "phrase_id": 1539.018,
                "offset": 1539.021,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "обращение",
                "phrase_id": 1539.018,
                "offset": 1539.022,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Если",
                "phrase_id": 1539.018,
                "offset": 1539.023,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "у",
                "phrase_id": 1539.018,
                "offset": 1539.024,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "вас",
                "phrase_id": 1539.018,
                "offset": 1539.025,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "появятся",
                "phrase_id": 1539.018,
                "offset": 1539.026,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "дополнительные",
                "phrase_id": 1539.018,
                "offset": 1539.027,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "вопросы",
                "phrase_id": 1539.018,
                "offset": 1539.028,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "пожалуйста",
                "phrase_id": 1539.018,
                "offset": 1539.029,
                "length": 0,
                "entity_ids": [
                    2,
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "пишите",
                "phrase_id": 1539.018,
                "offset": 1539.03,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Всего",
                "phrase_id": 1539.018,
                "offset": 1539.031,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "доброго",
                "phrase_id": 1539.018,
                "offset": 1539.032,
                "length": 0,
                "entity_ids": [
                    3
                ],
                "confidence": 0,
                "loudness": 0,
                "username": "agent"
            },
            {
                "value": "Оператор",
                "phrase_id": 1540.713,
                "offset": 1540.713,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Вячеслав",
                "phrase_id": 1540.713,
                "offset": 1540.714,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "Т",
                "phrase_id": 1540.713,
                "offset": 1540.715,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "покинул(а",
                "phrase_id": 1540.713,
                "offset": 1540.716,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            },
            {
                "value": "диалог",
                "phrase_id": 1540.713,
                "offset": 1540.717,
                "length": 0,
                "entity_ids": [],
                "confidence": 0,
                "loudness": 0,
                "username": "system"
            }
        ],
        "operator_phrases": [
            {
                "phrase_id": 0,
                "offset": 4.149,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"4149\"><span data-ids=\"|0:|\" time=\"4149\">Здравствуйте</span>, <span time=\"4150\">Любовь</span>. <span time=\"4151\">Я</span> <span time=\"4152\">-</span> <span time=\"4153\">помощник</span> <span time=\"4154\">S7</span> <span time=\"4155\">Airlines</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 4.151,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"4151\"><span time=\"4151\">Вы</span> <span time=\"4152\">хотите</span> <span time=\"4153\">выбрать</span> <span time=\"4154\">место</span> <span time=\"4155\">на</span> <span time=\"4156\">рейсе</span> <span time=\"4157\">S7</span> <span time=\"4158\">3062</span>, <span time=\"4159\">BQS</span> <span time=\"4160\">-</span> <span time=\"4161\">DME</span>, <span time=\"4162\">верно</span>?</p>"
            },
            {
                "phrase_id": 0,
                "offset": 4.153,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"4153\"><br> <span time=\"4153\">Введите</span> <span time=\"4154\">один</span> <span time=\"4155\">из</span> <span time=\"4156\">вариантов</span>:<br> <span time=\"4157\">-</span> <span time=\"4158\">Да</span><br> <span time=\"4159\">-</span> <span time=\"4160\">Нет</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 20.84,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"20840\"><span time=\"20840\">Сейчас</span> <span time=\"20841\">сделаем</span>! <span time=\"20842\">Только</span> <span time=\"20843\">сначала</span> <span time=\"20844\">определитесь</span>:</p>"
            },
            {
                "phrase_id": 0,
                "offset": 20.842,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"20842\"><br> <span time=\"20842\">Введите</span> <span time=\"20843\">один</span> <span time=\"20844\">из</span> <span time=\"20845\">вариантов</span>:<br> <span time=\"20846\">-</span> <span data-ids=\"|1:|\" time=\"20847\">Я</span> <span data-ids=\"|1:|4:|\" time=\"20848\">не</span> <span data-ids=\"|1:|4:|\" time=\"20849\">знаю</span> <span time=\"20850\">—</span> <span time=\"20851\">давай</span> <span time=\"20852\">на</span> <span time=\"20853\">свой</span> <span time=\"20854\">вкус</span><br> <span time=\"20855\">-</span> <span time=\"20856\">Я</span> <span time=\"20857\">знаю</span>, <span time=\"20858\">где</span> <span time=\"20859\">хочу</span> <span time=\"20860\">сидеть</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 33.252,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"33252\"><span time=\"33252\">Здорово</span>, <span time=\"33253\">что</span> <span time=\"33254\">у</span> <span time=\"33255\">вас</span> <span time=\"33256\">есть</span> <span time=\"33257\">любимое</span> <span time=\"33258\">место</span>! <span time=\"33259\">Напишите</span> <span time=\"33260\">его</span> <span time=\"33261\">номер</span>, <span time=\"33262\">например</span>, <span time=\"33263\">13F</span>:</p>"
            },
            {
                "phrase_id": 0,
                "offset": 168.659,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"168659\"><span time=\"168659\">Напоминаю</span>: <span time=\"168660\">ваш</span> <span time=\"168661\">тариф</span> <span time=\"168662\">Эконом</span> <span time=\"168663\">Standard</span> <span time=\"168664\">—</span> <span time=\"168665\">выбрать</span> <span time=\"168666\">место</span> <span time=\"168667\">можно</span> <span time=\"168668\">бесплатно</span>, <span time=\"168669\">если</span> <span time=\"168670\">уже</span> <span time=\"168671\">открыта</span> <span time=\"168672\">онлайн-регистрация</span>. <span time=\"168673\">Если</span> <span time=\"168674\">нет</span>, <span time=\"168675\">услуга</span> <span time=\"168676\">будет</span> <span time=\"168677\">платной</span>.<br> <span time=\"168678\">Итак</span>! <span time=\"168679\">На</span> <span time=\"168680\">рейсе</span> <span time=\"168681\">S7</span> <span time=\"168682\">3062</span> <span time=\"168683\">по</span> <span time=\"168684\">маршруту</span> <span time=\"168685\">BQS-DME</span> <span time=\"168686\">я</span> <span time=\"168687\">подобрал</span> <span time=\"168688\">для</span> <span time=\"168689\">вас</span> <span time=\"168690\">место</span>:<br> <br> <span time=\"168691\">8C</span> <span time=\"168692\">у</span> <span time=\"168693\">прохода</span>.<br> <span time=\"168694\">Стоит-</span> <span time=\"168695\">700</span> <span time=\"168696\">р</span>.<br> <br> <span time=\"168697\">Хотите</span> <span time=\"168698\">занять</span> <span time=\"168699\">и</span> <span time=\"168700\">оплатить</span> <span time=\"168701\">это</span> <span time=\"168702\">место</span>?</p>"
            },
            {
                "phrase_id": 0,
                "offset": 168.661,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"168661\"><br> <span time=\"168661\">Введите</span> <span time=\"168662\">один</span> <span time=\"168663\">из</span> <span time=\"168664\">вариантов</span>:<br> <span time=\"168665\">-</span> <span time=\"168666\">Не</span>, <span time=\"168667\">подожду</span> <span time=\"168668\">регистрацию</span><br> <span time=\"168669\">-</span> <span time=\"168670\">Да</span>, <span time=\"168671\">мне</span> <span time=\"168672\">нравится</span>!</p>"
            },
            {
                "phrase_id": 0,
                "offset": 216.954,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"216954\"><span time=\"216954\">Простите</span>, <span time=\"216955\">я</span> <span time=\"216956\">вас</span> <span time=\"216957\">не</span> <span time=\"216958\">понял</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 216.956,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"216956\"><span time=\"216956\">Напоминаю</span>: <span time=\"216957\">ваш</span> <span time=\"216958\">тариф</span> <span time=\"216959\">Эконом</span> <span time=\"216960\">Standard</span> <span time=\"216961\">—</span> <span time=\"216962\">выбрать</span> <span time=\"216963\">место</span> <span time=\"216964\">можно</span> <span time=\"216965\">бесплатно</span>, <span time=\"216966\">если</span> <span time=\"216967\">уже</span> <span time=\"216968\">открыта</span> <span time=\"216969\">онлайн-регистрация</span>. <span time=\"216970\">Если</span> <span time=\"216971\">нет</span>, <span time=\"216972\">услуга</span> <span time=\"216973\">будет</span> <span time=\"216974\">платной</span>.<br> <span time=\"216975\">Итак</span>! <span time=\"216976\">На</span> <span time=\"216977\">рейсе</span> <span time=\"216978\">S7</span> <span time=\"216979\">3062</span> <span time=\"216980\">по</span> <span time=\"216981\">маршруту</span> <span time=\"216982\">BQS-DME</span> <span time=\"216983\">я</span> <span time=\"216984\">подобрал</span> <span time=\"216985\">для</span> <span time=\"216986\">вас</span> <span time=\"216987\">место</span>:<br> <br> <span time=\"216988\">8C</span> <span time=\"216989\">у</span> <span time=\"216990\">прохода</span>.<br> <span time=\"216991\">Стоит-</span> <span time=\"216992\">700</span> <span time=\"216993\">р</span>.<br> <br> <span time=\"216994\">Хотите</span> <span time=\"216995\">занять</span> <span time=\"216996\">и</span> <span time=\"216997\">оплатить</span> <span time=\"216998\">это</span> <span time=\"216999\">место</span>?</p>"
            },
            {
                "phrase_id": 0,
                "offset": 216.957,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"216957\"><br> <span time=\"216957\">Введите</span> <span time=\"216958\">один</span> <span time=\"216959\">из</span> <span time=\"216960\">вариантов</span>:<br> <span time=\"216961\">-</span> <span time=\"216962\">Не</span>, <span time=\"216963\">подожду</span> <span time=\"216964\">регистрацию</span><br> <span time=\"216965\">-</span> <span time=\"216966\">Да</span>, <span time=\"216967\">мне</span> <span time=\"216968\">нравится</span>!</p>"
            },
            {
                "phrase_id": 0,
                "offset": 261.296,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"261296\"><span time=\"261296\">Простите</span>, <span time=\"261297\">я</span> <span time=\"261298\">вас</span> <span time=\"261299\">не</span> <span time=\"261300\">понял</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 261.297,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"261297\"><span time=\"261297\">Напоминаю</span>: <span time=\"261298\">ваш</span> <span time=\"261299\">тариф</span> <span time=\"261300\">Эконом</span> <span time=\"261301\">Standard</span> <span time=\"261302\">—</span> <span time=\"261303\">выбрать</span> <span time=\"261304\">место</span> <span time=\"261305\">можно</span> <span time=\"261306\">бесплатно</span>, <span time=\"261307\">если</span> <span time=\"261308\">уже</span> <span time=\"261309\">открыта</span> <span time=\"261310\">онлайн-регистрация</span>. <span time=\"261311\">Если</span> <span time=\"261312\">нет</span>, <span time=\"261313\">услуга</span> <span time=\"261314\">будет</span> <span time=\"261315\">платной</span>.<br> <span time=\"261316\">Итак</span>! <span time=\"261317\">На</span> <span time=\"261318\">рейсе</span> <span time=\"261319\">S7</span> <span time=\"261320\">3062</span> <span time=\"261321\">по</span> <span time=\"261322\">маршруту</span> <span time=\"261323\">BQS-DME</span> <span time=\"261324\">я</span> <span time=\"261325\">подобрал</span> <span time=\"261326\">для</span> <span time=\"261327\">вас</span> <span time=\"261328\">место</span>:<br> <br> <span time=\"261329\">8C</span> <span time=\"261330\">у</span> <span time=\"261331\">прохода</span>.<br> <span time=\"261332\">Стоит-</span> <span time=\"261333\">700</span> <span time=\"261334\">р</span>.<br> <br> <span time=\"261335\">Хотите</span> <span time=\"261336\">занять</span> <span time=\"261337\">и</span> <span time=\"261338\">оплатить</span> <span time=\"261339\">это</span> <span time=\"261340\">место</span>?</p>"
            },
            {
                "phrase_id": 0,
                "offset": 261.299,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"261299\"><br> <span time=\"261299\">Введите</span> <span time=\"261300\">один</span> <span time=\"261301\">из</span> <span time=\"261302\">вариантов</span>:<br> <span time=\"261303\">-</span> <span time=\"261304\">Не</span>, <span time=\"261305\">подожду</span> <span time=\"261306\">регистрацию</span><br> <span time=\"261307\">-</span> <span time=\"261308\">Да</span>, <span time=\"261309\">мне</span> <span time=\"261310\">нравится</span>!</p>"
            },
            {
                "phrase_id": 0,
                "offset": 397.4,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"397400\"><span time=\"397400\">Извините</span>, <span time=\"397401\">мне</span> <span time=\"397402\">не</span> <span time=\"397403\">удалось</span> <span time=\"397404\">распознать</span> <span time=\"397405\">ваш</span> <span time=\"397406\">ответ</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 397.402,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "bot",
                "raw_html": "<p userid=\"bot\" name=\"Помощник S7 Airlines\" username=\"bot\" time=\"397402\"><span time=\"397402\">Перевожу</span> <span time=\"397403\">вас</span> <span time=\"397404\">на</span> <span time=\"397405\">оператора</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 397.417,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "system",
                "raw_html": "<p userid=\"system\" name=\"Система\" username=\"system\" time=\"397417\"><span time=\"397417\">Оператор</span> <span time=\"397418\">ответит</span> <span time=\"397419\">вам</span> <span time=\"397420\">в</span> <span time=\"397421\">течение</span> <span time=\"397422\">минуты</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 398.142,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "system",
                "raw_html": "<p userid=\"system\" name=\"Система\" username=\"system\" time=\"398142\"><span time=\"398142\">Диалог</span> <span time=\"398143\">назначен</span> <span time=\"398144\">на</span> <span time=\"398145\">оператора</span>: <span time=\"398146\">Вячеслав</span> <span time=\"398147\">Тарасов</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 424.952,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "system",
                "raw_html": "<p userid=\"system\" name=\"Система\" username=\"system\" time=\"424952\"><span time=\"424952\">Оператор</span> <span time=\"424953\">Вячеслав</span> <span time=\"424954\">Т</span>. <span time=\"424955\">присоединился</span> <span time=\"424956\">к</span> <span time=\"424957\">диалогу</span></p>"
            },
            {
                "phrase_id": 0,
                "offset": 428.578,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"428578\"><span data-ids=\"|0:|\" time=\"428578\">Здравствуйте</span>, <span time=\"428579\">Любовь</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 479.234,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"479234\"><span time=\"479234\">Верно</span>. <span time=\"479235\">Привилегии</span> <span time=\"479236\">статуса</span> <span time=\"479237\">silver</span> <span time=\"479238\">предполагают</span> <span time=\"479239\">бесплатный</span> <span time=\"479240\">выбор</span> <span time=\"479241\">места</span>, <span time=\"479242\">в</span> <span time=\"479243\">том</span> <span time=\"479244\">числе</span> <span time=\"479245\">и</span> <span time=\"479246\">EXTRA</span> <span time=\"479247\">SPACE</span>. <span time=\"479248\">Бесплатный</span> <span time=\"479249\">выбор</span> <span time=\"479250\">места</span> <span time=\"479251\">в</span> <span time=\"479252\">салоне</span> <span time=\"479253\">после</span> <span time=\"479254\">покупки</span> <span time=\"479255\">билета</span> <span time=\"479256\">из</span> <span time=\"479257\">числа</span> <span time=\"479258\">доступных</span> <span time=\"479259\">на</span> <span time=\"479260\">момент</span> <span time=\"479261\">обращения</span>, <span time=\"479262\">в</span> <span time=\"479263\">том</span> <span time=\"479264\">числе</span> <span time=\"479265\">для</span> <span time=\"479266\">2</span> <span time=\"479267\">попутчиков</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 574.003,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"574003\"><span time=\"574003\">Любовь</span>, <span time=\"574004\">уточните</span>, <span data-ids=\"|2:|\" time=\"574005\">пожалуйста</span>, <span time=\"574006\">номер</span> <span time=\"574007\">билета</span> <span time=\"574008\">или</span> <span time=\"574009\">бронирования</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 1001.079,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"1001079\"><span time=\"1001079\">В</span> <span time=\"1001080\">бронировании</span> <span time=\"1001081\">LBKNTE</span> <span time=\"1001082\">оформлен</span> <span time=\"1001083\">пассажир</span> <span time=\"1001084\">до</span> <span time=\"1001085\">лет</span>. <span time=\"1001086\">Бронь</span> <span time=\"1001087\">LBKN87</span>, <span time=\"1001088\">где</span> <span time=\"1001089\">вы</span> <span time=\"1001090\">оформлены</span> <span time=\"1001091\">отмечена</span> <span time=\"1001092\">как</span> <span time=\"1001093\">сопровождающий</span>. <span time=\"1001094\">Следовательно</span> <span time=\"1001095\">в</span> <span time=\"1001096\">вашем</span> <span time=\"1001097\">бронировании</span> <span time=\"1001098\">можно</span> <span time=\"1001099\">выбирать</span> <span time=\"1001100\">любое</span> <span time=\"1001101\">место</span>. <span time=\"1001102\">В</span> <span time=\"1001103\">бронировании</span> <span time=\"1001104\">только</span> <span time=\"1001105\">во</span> <span time=\"1001106\">второй</span> <span time=\"1001107\">части</span> <span time=\"1001108\">салона</span>, <span time=\"1001109\">кроме</span> <span time=\"1001110\">мест</span> <span time=\"1001111\">у</span> <span time=\"1001112\">аварийных</span> <span time=\"1001113\">выходов</span> <span time=\"1001114\">и</span> <span time=\"1001115\">Extra</span> <span time=\"1001116\">space</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 1339.56,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"1339560\"><span time=\"1339560\">В</span> <span time=\"1339561\">бронировании</span> <span time=\"1339562\">LBKK5I</span> <span time=\"1339563\">выбор</span> <span time=\"1339564\">мест</span> <span time=\"1339565\">платный</span>. <span time=\"1339566\">В</span> <span time=\"1339567\">бронировании</span> <span time=\"1339568\">LEGIYT</span> <span time=\"1339569\">бесплатный</span> <span time=\"1339570\">для</span> <span time=\"1339571\">обоих</span> <span time=\"1339572\">пассажиров</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 1453.434,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"1453434\"><span time=\"1453434\">Потому</span> <span time=\"1453435\">что</span> <span time=\"1453436\">пассажиру</span> <span time=\"1453437\">больше</span> <span time=\"1453438\">12</span> <span time=\"1453439\">лет</span> <span time=\"1453440\">и</span> <span time=\"1453441\">он</span> <span time=\"1453442\">оформлен</span> <span time=\"1453443\">в</span> <span time=\"1453444\">отдельном</span> <span time=\"1453445\">от</span> <span time=\"1453446\">вас</span> <span time=\"1453447\">бронировании</span>.</p>"
            },
            {
                "phrase_id": 0,
                "offset": 1539.018,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "agent",
                "raw_html": "<p userid=\"agent\" name=\"Вячеслав Т.\" username=\"agent\" time=\"1539018\"><span time=\"1539018\">Любовь</span>, <span data-ids=\"|3:|\" time=\"1539019\">благодарим</span> <span time=\"1539020\">вас</span> <span data-ids=\"|3:|\" time=\"1539021\">за</span> <span data-ids=\"|3:|\" time=\"1539022\">обращение</span>.<br> <span data-ids=\"|3:|\" time=\"1539023\">Если</span> <span data-ids=\"|3:|\" time=\"1539024\">у</span> <span data-ids=\"|3:|\" time=\"1539025\">вас</span> <span data-ids=\"|3:|\" time=\"1539026\">появятся</span> <span time=\"1539027\">дополнительные</span> <span data-ids=\"|3:|\" time=\"1539028\">вопросы</span>, <span data-ids=\"|2:|3:|\" time=\"1539029\">пожалуйста</span>, <span data-ids=\"|3:|\" time=\"1539030\">пишите</span>. <br> <span data-ids=\"|3:|\" time=\"1539031\">Всего</span> <span data-ids=\"|3:|\" time=\"1539032\">доброго</span>!</p>"
            },
            {
                "phrase_id": 0,
                "offset": 1540.713,
                "length": 0,
                "confidence": 0,
                "loudness": 0,
                "username": "system",
                "raw_html": "<p userid=\"system\" name=\"Система\" username=\"system\" time=\"1540713\"><span time=\"1540713\">Оператор</span> <span time=\"1540714\">Вячеслав</span> <span time=\"1540715\">Т</span>. <span time=\"1540716\">покинул(а</span>) <span time=\"1540717\">диалог</span></p>"
            }
        ]
    },
    "is_valid": true,
    "username": "v.tarasov"
}


