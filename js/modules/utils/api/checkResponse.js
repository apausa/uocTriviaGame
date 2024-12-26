// throws error if response code is not 0
export default function checkResponse (code) {
    switch (code) {
        case 1: throw new Error('No Results');
        case 2: throw new Error('Invalid Parameter');
        case 3: throw new Error('Token Not Found');
        case 4: throw new Error('Token Empty');
        case 5: throw new Error('Rate Limit');
        default: break;
    }
}
