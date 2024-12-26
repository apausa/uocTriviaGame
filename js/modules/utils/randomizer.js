class Randomizer {
    static randomizeArray(a) {
        const copy = a.slice();

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    }
}

export { Randomizer };
