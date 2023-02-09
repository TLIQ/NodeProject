export const processesCall = {
    "_id": "5ea2bafb342462ee11f9838f",
    "processes": {
        "consultation": {
            "name": "consultation",
            "screen_name": "консультация",
            "short_name": "консульт.",
            "type": "consultations"
        },
        "outgoing": {
            "name": "outgoing",
            "screen_name": "исходящие",
            "short_name": "ИСХ",
            "type": "consultations",
            "ref": [
                {
                    "direction": "OUTGOING"
                }
            ]
        },
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
        "subsidized_ivr": {
            "name": "subsidized_ivr",
            "screen_name": "субсид. билета, IVR",
            "short_name": "СУБС IVR",
            "type": "sales",
            "kw": [
                "126091462092791808",
                "125956130688999424",
                "183964644610678784"
            ]
        },
        "subsidized_office": {
            "name": "subsidized_office",
            "screen_name": "субсид. билета, офис",
            "short_name": "СУБС ОФИС",
            "description": "Продажа субсидии, оформление которой возможно только в офисе",
            "type": "sales",
            "kw": [
                "154227342850400256",
                "124186483706830848",
                "183964644610678784"
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
        },
        "c_order_status": {
            "name": "c_order_status",
            "screen_name": "статус заявки",
            "short_name": "СТАТУС ЗАЯВ",
            "type": "consultations",
            "kw": [
                "177468139334803456",
                "177472180664147968"
            ]
        },
        "miles_and_cash": {
            "name": "miles_and_cash",
            "screen_name": "продажа ПАБ",
            "short_name": "ОФ МИЛИ",
            "description": "Продажа премиального авиабилета",
            "type": "sales",
            "kw": [
                "144500886868074496",
                "183964644610678784"
            ]
        },
        "add_services_ivr": {
            "name": "add_services_ivr",
            "screen_name": "доп. услуги",
            "short_name": "ДОП УСЛ IVR",
            "type": "sales",
            "kw": [
                "176419787709095936",
                "125956130688999424",
                "183964644610678784"
            ]
        },
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
    }
}

export const processesChat = {
    "_id":  "5ea2bafb342462ee11f9838f",
    "processes": {
        "consultation": {
            "name": "consultation",
            "screen_name": "прочее",
            "short_name": "ПРОЧЕЕ",
            "type": "consultations"
        },
        "outgoing": {
            "name": "outgoing",
            "screen_name": "исходящие",
            "short_name": "ИСХ",
            "type": "consultations",
            "ref": [
                {
                    "direction": "OUTGOING"
                }
            ]
        },
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
        "subsidized_ivr": {
            "name": "subsidized_ivr",
            "screen_name": "субсид. билета, IVR",
            "short_name": "СУБС IVR",
            "type": "sales",
            "kw": [
                "126091462092791808",
                "125956130688999424",
                "183964644610678784"
            ]
        },
        "miles_and_cash": {
            "name": "miles_and_cash",
            "screen_name": "продажа ПАБ",
            "short_name": "ОФ МИЛИ",
            "description": "Продажа премиального авиабилета",
            "type": "sales",
            "kw": [
                "144500886868074496",
                "183964644610678784"
            ]
        },
        "subsidized_office": {
            "name": "subsidized_office",
            "screen_name": "субсид. билета, офис",
            "short_name": "СУБС ОФИС",
            "description": "Продажа субсидии, оформление которой возможно только в офисе",
            "type": "sales",
            "kw": [
                "154227342850400256",
                "124186483706830848",
                "183964644610678784"
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
        },
        "add_services_ivr": {
            "name": "add_services_ivr",
            "screen_name": "доп. услуги",
            "short_name": "ДОП УСЛ IVR",
            "type": "sales",
            "kw": [
                "176419787709095936",
                "125956130688999424",
                "183964644610678784"
            ]
        },
        "c_order_status": {
            "name": "c_order_status",
            "screen_name": "статус заявки",
            "short_name": "СТАТУС ЗАЯВ",
            "type": "consultations",
            "kw": [
                "177468139334803456",
                "177472180664147968"
            ]
        },
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
        },
        "return": {
            "name": "return",
            "screen_name": "Возврат",
            "short_name": "Возврат",
            "description": "",
            "type": "consultations",
            "kw": [
                "255025208870576128"
            ]
        }
    }
}