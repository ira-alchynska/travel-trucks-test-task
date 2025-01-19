export function reverseLocation(location) {
    const parts = location.split(',').map(part => part.trim());
    return parts.reverse().join(', ');
}

export const trimDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }

    let trimmedText = text.substr(0, maxLength);
    let lastSpaceIndex = trimmedText.lastIndexOf(' ');

    if (lastSpaceIndex > -1) {
        trimmedText = trimmedText.substr(0, lastSpaceIndex);
    }

    return trimmedText + '...';
};

export const addSpace = (str) => {
    return str.replace(/([0-9.]+)([a-zA-Z]+)/, '$1 $2');
}