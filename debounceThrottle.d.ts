/**
 * Simple debounce function
 * @param fn Function to debounce
 * @param wait Delay in milliseconds
 * @returns Debounced function
 */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, wait: number): (...args: Parameters<T>) => void;

/**
 * Simple throttle function
 * @param fn Function to throttle
 * @param wait Delay in milliseconds
 * @returns Throttled function
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, wait: number): (...args: Parameters<T>) => void;
