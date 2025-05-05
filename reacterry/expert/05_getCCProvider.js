const providers = {
    'amex': 3,
    'visa': 4,
    'mastercard': 5,
    'discover': 6
};

export const getCreditCardProvider = (cardNumber) => {  
    // Write your code here
    let provider = ''
    if(cardNumber.length === 15 || 16){
        let carr = cardNumber.split('')
        let int = parseInt(cardNumber)
        console.log(int)
        if(int >= 100000000000000 && int<= 9999999999999999){
            let cardInt = carr.map((e)=>parseInt(e))
            if(cardInt[0] === providers.amex){
                provider = 'amex'
                return provider
            }else if(cardInt[0] === providers.discover){
                provider = 'discover'
                return provider
            }else if(cardInt[0] === providers.mastercard){
                provider = 'mastercard'
                return provider
            }else if(cardInt[0] === providers.visa){
                provider = 'visa'
                return provider
            }else{
                provider = 'Invalid Card Number'
                return provider
            }
        }
        else{
            provider = 'Invalid Card Number'
            return provider
        }
    }
    else{
        provider = 'Invalid Card Number'
        return provider
    }
}