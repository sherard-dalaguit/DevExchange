import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
    const now = new Date();
    const diff = now.getTime() - createdAt.getTime(); // difference in milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // Approximate month calculation
    const years = Math.floor(days / 365); // Approximate year calculation

    if (seconds < 60) {
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    } else if (minutes < 60) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (days < 7) {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (weeks < 5) {
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (months < 12) {
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else {
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
};
  
export const formatBigNumber = (num: number): string => {
    if (num === undefined || num === null) {
        return '0';
    }

    if (num >= 1_000_000) {
        return `${(num / 1_000_000).toFixed(1)}M`; // Convert to millions
    } else if (num >= 1_000) {
        return `${(num / 1_000).toFixed(1)}K`; // Convert to thousands
    } else {
        return num.toString(); // Return the number as is if it's less than 1000
    }
};  

export function getJoinedDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}