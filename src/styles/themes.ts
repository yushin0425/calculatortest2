interface Theme {
    background: string;
    text: string;
    buttonBackground: string;
    buttonText: string;
    operatorBackground: string;
}

export const themes: Theme[] = [
    {
        // Default Theme
        background: '#22252D',
        text: '#ffffff',
        buttonBackground: '#2a2d37',
        buttonText: '#ffffff',
        operatorBackground: '#272B33'
    },
    {
        // Purple Theme
        background: '#461873',
        text: '#ffffff',
        buttonBackground: '#6929A5',
        buttonText: '#ffffff',
        operatorBackground: '#9762CF'
    },
    {
        // Ocean Theme
        background: '#1B4965',
        text: '#ffffff',
        buttonBackground: '#5FA8D3',
        buttonText: '#ffffff',
        operatorBackground: '#62B6CB'
    },
    {
        // Sunset Theme
        background: '#FE6D73',
        text: '#ffffff',
        buttonBackground: '#FFCB77',
        buttonText: '#2B2B2B',
        operatorBackground: '#17C3B2'
    }
]; 