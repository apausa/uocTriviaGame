// parses to cookie format
export default function setCookie(name, value) {
    const date = new Date();

    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};
