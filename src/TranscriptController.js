import _ from "lodash";
import { blocksChat, blocksCalls, stepsCalls, stepsChat, processesCall,
processesChat, scriptParametersCalls, scriptParametersChat} from "../data/index.js"
import { DateTime } from 'luxon'

export const getTranscript = (order, mode) => {

    let scriptId = order.scoring.cid
    let blocks
    // const blocks = await schemaIndex.Script_items.find({parent_id : scriptId})

    if (mode === 'call') {
        blocks = blocksCalls
    } else {
        blocks = blocksChat
    }

    // let blocksIds = []
    // for (const block of blocks) {
    //     blocksIds.push(block._id.toString())
    // }

    let steps
    // const steps = await schemaIndex.Script_items.find({parent_id:{$in:blocksIds}})
    if (mode === 'call') {
        steps = stepsCalls
    } else {
        steps = stepsChat
    }

    let scriptParameters
    // const scriptParameters = (await schemaIndex.Script_parameters.find())[0].parameters
    if (mode === 'call') {
        scriptParameters = scriptParametersCalls.parameters
    } else {
        scriptParameters = scriptParametersChat.parameters
    }

    let processes
    // const processes = (await schemaIndex.Process.find())[0].processes
    if (mode === 'call') {
        processes = processesCall.processes
    } else {
        processes = processesChat.processes
    }

    const orderChecklist = orderScriptItems(order)
    const checkList = orderChecklist.elementsChecklist
    const checkListParametersArray = orderChecklist.params
    const checkListParameters = []

    for (const param of checkListParametersArray) {
        checkListParameters.push({
            name : scriptParameters[param].name,
            short_name : scriptParameters[param].short_name,
            isNegative : scriptParameters[param].is_negative,
            key : param
        })
    }


    const elements = _.sortBy(checkList, "user_code");
    let trans_obj = {};
    let transcript;
    let array_sep = [];
    let sentence = {};


    for (let k = 0; k < order.dialog.operator.length; k++) {
        let obj = {};
        obj.offset = DateTime.fromSeconds(order.dialog.operator[k].offset).toFormat("mm:ss:uu")
        obj.op_word = order.dialog.operator[k].value;
        obj.number = k;
        obj.loudness = order.dialog.operator[k].loudness;
        obj.confidence = order.dialog.operator[k].confidence;
        obj.username = ''
        if (order.dialog.operator[k].entity_ids !== undefined) {
            obj.entity_ids = order.dialog.operator[k].entity_ids;
        }
        if (order.dialog.operator[k].username) {
            obj.username = order.dialog.operator[k].username
        }
        trans_obj[k] = obj;
    }


    let tmp_keys = Object.keys(trans_obj);

    for (const trans in trans_obj) {
        if (order.dialog.client !== undefined) {
            for (let i = 0; i < order.dialog.client.length; i++) {
                let obj = {};

                if (trans_obj[trans].offset === order.dialog.client[i].offset) {
                    obj.cl_word = order.dialog.client[i].value;
                    if (order.dialog.client[i].entity_ids !== undefined) {
                        obj.entity_ids = order.dialog.client[i].entity_ids;
                    }
                    trans_obj[tmp_keys.length + i] = obj;
                } else {
                    obj.offset = DateTime.fromSeconds(order.dialog.client[i].offset).toFormat("mm:ss:uu")
                    obj.cl_word = order.dialog.client[i].value;
                    obj.loudness = order.dialog.client[i].loudness;
                    obj.confidence = order.dialog.client[i].confidence;
                    if (order.dialog.client[i].entity_ids !== undefined) {
                        obj.entity_ids = order.dialog.client[i].entity_ids;
                    }
                    trans_obj[tmp_keys.length + i] = obj;
                }
            }
        }
    }


    for (const trans in trans_obj) {
        if (trans_obj[trans].entity_ids !== undefined) {
            let array_id = [];
            for (let i = 0; i < trans_obj[trans].entity_ids.length; i++) {
                array_id.push(order.extracted[trans_obj[trans].entity_ids]);
            }
            trans_obj[trans].cat_id = array_id;
        }
    }

    for (const trans in trans_obj) {
        let steps = [];
        let steps_id = [];
        let params = [];
        if (trans_obj[trans].number !== undefined) {
            for (const key in elements) {
                for (const feature in elements[key].features) {
                    if (elements[key].features[feature].words !== undefined) {
                        for (let i = 0; i < elements[key].features[feature].words.length; i++) {
                            if (
                                Number(trans_obj[trans].number) ===
                                Number(elements[key].features[feature].words[i])
                            ) {
                                trans_obj[trans].weight = elements[key].features[feature].weight;
                                steps.push(elements[key].step);
                                steps_id.push(elements[key]._id);
                                params.push(feature);
                            }
                        }
                    }
                }
            }
        }
        if (steps.length > 0) {

            trans_obj[trans].steps = Array.from(new Set(steps.map((item) => item)));
            trans_obj[trans].steps_id = Array.from(new Set(steps_id.map((item) => item)));
        }
        if (params.length > 0) {
            trans_obj[trans].params = Array.from(new Set(params.map((item) => item)));

        }
    }

    let params = Object.keys(order.scoring.parameters)

    for (const m in params) {
        if (order.scoring.parameters[params[m]].words){
            for (const i in order.scoring.parameters[params[m]].words) {
                let curr_word = order.scoring.parameters[params[m]].words[i]
                let curr_param = params[m]
                if (trans_obj[curr_word].params){
                    if (!trans_obj[curr_word].params.includes(curr_param)){
                        trans_obj[curr_word].params.push(curr_param)
                    }
                } else {
                    trans_obj[curr_word].params = []
                    trans_obj[curr_word].params.push(curr_param)
                }
            }
        }
    }

    transcript = _.sortBy(trans_obj, "offset");


    for (let i = 0; i < elements.length; i++) {
        let obj = {};
        for (const param in elements[i].features) {
            let array = [];
            for (const key of transcript) {
                if (key.steps_id !== undefined) {
                    if (elements[i].features[param].words !== undefined) {
                        if (elements[i].features[param].words.includes(key.number)) {
                            key.parameter = param;
                            if (elements[i].features[param].weight !== undefined) {
                                key.weigth = elements[i].features[param].weight;
                                key.step = elements[i].id;
                            }
                            let clone = Object.assign({}, key);
                            array.push(clone);
                        }
                    }
                }
            }
            if (array.length > 0) {
                obj[param] = array;
            }
        }
        sentence[elements[i].id] = obj;
    }

    for (const key in sentence) {
        let tmp_keys = Object.keys(sentence[key]);
        if (tmp_keys.length > 1) {
            for (let i = 0; i < tmp_keys.length; i++) {
                let obj = {};
                obj[key] = sentence[key][tmp_keys[i]];
                array_sep.push(obj);
            }
        } else {
            for (let i = 0; i < tmp_keys.length; i++) {
                let obj = {};



                obj[key] = sentence[key][tmp_keys[i]];
                array_sep.push(obj);
            }
        }
    }

    let arrayPhrases = []

    for (const key of array_sep) {
        for (const stepId of Object.keys(key)) {
            let obj = {}
            for (const step of steps) {

                if (step._id.toString() === stepId) {
                    obj.key =  stepId
                    obj.name = step.name
                    obj.short_name = step.short_name
                    obj.offsetArray = []
                    obj.phraseArray = []
                    obj.pointsArray = []
                    obj.paramsArray = []

                    for (const dialog of key[stepId]) {
                        obj.offsetArray.push(dialog.offset)
                        obj.phraseArray.push(dialog.op_word)
                        obj.pointsArray.push(dialog.weight)

                        for (const param of dialog.params) {
                            obj.paramsArray.push(scriptParameters[param].name)
                        }
                    }
                    obj.offset = [obj.offsetArray[0], obj.offsetArray[obj.offsetArray.length - 1]]
                    obj.params = Array.from(new Set(obj.paramsArray.map((item) => item)));
                    obj.points = _.mean(obj.pointsArray)
                    obj.phrase = obj.phraseArray.join(" ")
                }
            }

            arrayPhrases.push(obj)
        }
    }

    let phrasesDialog = []
    let phrasesDialogArray = []

    if (order.dialog.client_phrases
        && order.dialog.operator_phrases
        && order.dialog.client_phrases.length > 0
        && order.dialog.operator_phrases.length > 0) {

        for (const client of order.dialog.client_phrases ) {
            phrasesDialogArray.push(client)
        }

        for (const operator of order.dialog.operator_phrases) {
            phrasesDialogArray.push(operator)
        }
        phrasesDialog = _.sortBy(phrasesDialogArray, 'offset')
    }

    return {
        transcript,
        phrasesDialog,
        arrayPhrases : _.uniqBy(arrayPhrases, 'name'),
    }

}



function orderScriptItems(order) {
    let elementsChecklist = [];
    let script_elements = {};
    let checkLists = Object.keys(order.scoring.checklist);
    let f_array = [];
    for (const checklist of checkLists) {
        order.scoring.checklist[checklist].id = checklist;
        elementsChecklist.push(order.scoring.checklist[checklist]);
    }
    elementsChecklist
        .sort(function(a, b) {
            return a.features.script.ratio - b.features.script.ratio;
        })
        .reverse();

    for (const element of elementsChecklist) {
        let currentElement = element;
        for (const key in element.features) {
            f_array.push(key);
        }
        if (currentElement.block in script_elements) {
            script_elements[currentElement.block].push(currentElement);
        } else {
            let currentArr = [];
            currentArr.push(currentElement);
            script_elements[currentElement.block] = currentArr;
        }
    }


    const uniqueSerials = Array.from(new Set(f_array.map((item) => item)));
    return { elementsChecklist, params: uniqueSerials };
}