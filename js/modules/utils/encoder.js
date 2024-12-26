class Encoder {
    static htmlEntitiesEncode(rawStr) {
        return rawStr.replace(/[\u00A0-\u9999<>\&]/g, i => '&#'+i.charCodeAt(0)+';');
    }

    static htmlEntitiesDecode(rawStr) {
        const txt = document.createElement('textarea');
        txt.innerHTML = rawStr;
        return txt.value;
    }
}

export { Encoder };
