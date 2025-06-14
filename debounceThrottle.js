/**
 * Simple debounce function
 * @param {Function} fn - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function}
 */
function debounce(fn, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
    };
}

/**
 * Simple throttle function
 * @param {Function} fn - Function to throttle
 * @param {number} wait - Delay in milliseconds
 * @returns {Function}
 */
function throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

module.exports = { debounce, throttle };
