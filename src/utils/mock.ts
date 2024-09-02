// API mock
// Could use faker.js , but chose to stay more close to vanilla

import { TimeItem } from "./types";

interface IData {
    [key: string]: TimeItem[];
}

/**
 * Object holding mock data
 */
export const currentRandomData: IData = {};

async function wait(delayInMs: number) {
    return new Promise<null>((resolve) => {
        setTimeout(() => resolve(null), delayInMs);
    });
}

function randomNum(start: number, end: number) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

/**
 * Mock POST edit function
 * @param date Serves as key
 * @param id Serves as index to accecs corrent data in array
 * @param payload Field to update
 * @returns updated value based on provided paylaod
 */
export async function editRandomData(
    date: Date,
    id: number,
    payload: Partial<TimeItem>
) {
    const key = date.toISOString();
    if (Object.keys(currentRandomData[key][id]).length === 0) throw new Error("Invalid ID.");
    //Random delay to "mock" API call
    const randomDelay = randomNum(300, 500);
    await wait(randomDelay);

    const currentValue: TimeItem = currentRandomData[key][id];
    const updatedValue = { ...currentValue, ...payload };
    currentRandomData[key][id] = updatedValue;
    return updatedValue;
}

/**
 * Mock GET function
 * @param date Serves as key for random data and persistance
 * @returns current random data for provided date
 */
export async function getRandomData(date: Date) {
    const key = date.toISOString();
    if (currentRandomData[key]) return currentRandomData[key];

    //Random delay to "mock" API call
    const randomDelay = randomNum(500, 900);
    await wait(randomDelay);

    let randomTimeStart = 8;
    const randomItemCount = randomNum(0, 10);
    const randomTimes = [...Array(randomItemCount)]
        .map(() => {
            const randomTime = randomNum(randomTimeStart, 20);
            randomTimeStart += 1;
            return randomTime;
        })
        .sort((a, b) => a - b);

    const items = [...Array(randomItemCount)].map((_, index): TimeItem => {
        const originalCapacity = randomNum(1, 5);
        return {
            time: `${randomTimes[index]}:00`,
            capacity: randomNum(1, originalCapacity),
            originalCapacity: originalCapacity,
        };
    });

    currentRandomData[key] = items;

    return currentRandomData[key];
}
