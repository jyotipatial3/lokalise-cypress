export class RandomNumberGenerator {
    randomNumberGenerator(int) {
        let text = "";
        const possible = "0123456789";

        for (let i = 0; i < int; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}