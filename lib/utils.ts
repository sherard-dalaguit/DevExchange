import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string"
import { BADGE_CRITERIA } from "@/constants";
import { BadgeCounts } from "@/types";

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

interface UrlQueryParams {
    params: string;
    key: string;
    value: string | null;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
    const currentUrl = qs.parse(params);

    currentUrl[key] = value;

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl
    },
    { skipNull: true })
}

interface RemoveUrlQueryParams {
    params: string;
    keysToRemove: string[];
}

export const removeKeysFromQuery = ({ params, keysToRemove }: RemoveUrlQueryParams) => {
    const currentUrl = qs.parse(params);

    keysToRemove.forEach((key) => {
        delete currentUrl[key]
    })

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl
    },
    { skipNull: true })
}

interface BadgeParam {
    criteria: {
        type: keyof typeof BADGE_CRITERIA;
        count: number;
    }[]
}

export const assignBadges = (params: BadgeParam) => {
    const badgeCounts: BadgeCounts = {
        GOLD: 0,
        SILVER: 0,
        BRONZE: 0,
    }

    const { criteria } = params;

    criteria.forEach((item) => {
        const { type, count } = item;
        const badgeLevels: any = BADGE_CRITERIA[type]

        Object.keys(badgeLevels).forEach((level: any) => {
            if (count >= badgeLevels[level]) {
                badgeCounts[level as keyof BadgeCounts] += 1
            }
        })
    })

    return badgeCounts
}