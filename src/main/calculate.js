import operate from './operate';
import isNumber from './isNumber';
import Big from 'big.js';
export default function calculate(obj, buttonName) {
    if(buttonName === 'C') {
            return {
                total: null,
                next: null,
                operation: null
            }
        }

        if(isNumber(buttonName)){
            if(buttonName === '0' && obj.next === '0'){
                return {}
            }
            //UPDATING NEXT, IF ANY OPERATION
            if(obj.operation){
                if(obj.next){
                    return {
                        next: obj.next + buttonName
                    }
                }
                return {
                    next: buttonName
                }
            }
            //IF THERE IS NO OPERATION, UPDATE NEXT AND CLEAR VALUE
            if(obj.next){
                const next = obj.next === '0' ? buttonName : obj.next + buttonName
                return {
                    next, 
                    total: null
                }
            }
            return {
                next: buttonName,
                total:null
            }
        }

        if(buttonName === '='){
            if(obj.next && obj.operation){
                return {
                    total: operate(obj.total, obj.next, obj.operation),
                    next: null,
                    operation: null
                }
            }else {
                //'=' WITH NO OPERATION,NOTHING TO DO
                return {}
            }
        }

        if(buttonName === '+/-'){
            if(obj.next){
                return {
                    next: (-1 * parseFloat(obj.next).toString())
                }
            }
            if(obj.total){
                return {
                    total: (-1 * parseFloat(obj.total).toString())
                }
            }
            return {}
        }

        // if(buttonName === '√'){
        //     if(obj.next){
        //         return {
        //             next: (Math.sqrt(parseFloat(obj.next)).toString())
        //         }
        //     }
        //     if(obj.total){
        //         return{
        //             total:  (Math.sqrt(parseFloat(obj.total)).toString())
        //         }
        //     }
        //     return {}
        // }


        // if(buttonName === '²'){
        //     if(obj.next){
        //         return {
        //             next: (parseFloat(obj.next).toString() *parseFloat(obj.next).toString())
        //         }
        //     }
        //     if(obj.total){
        //         return{
        //             total:  (parseFloat(obj.total).toString() * parseFloat(obj.total).toString())
        //         }
        //     }
        //     return {}
        // }


    //USER PRESSED AN OPERATION BUTTON BUT THERE IS AN EXISTING OPERATION
    if(obj.operation){
        return {
            total : operate(obj.total, obj.next, obj.operation),
            next:null,
            operation: buttonName
        }
    }

    //USER HASN'T TYPED A NUMBER, BUT HAS TYPED AN OPRATION, SAVE THE OPERATION
    if(!obj.next){
        return {
            operation: buttonName
        }
    }

    //SAVE OPERATION AND SHIFT 'NEXT' INTO 'TOTAL'
    return {
        total: obj.next,
        next: null,
        operation: buttonName
    }
}