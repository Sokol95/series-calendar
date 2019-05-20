import { SCHEDULE_URL } from ".";

export const api = {
    async fetchSchedule (showDay, country) {
        const URL = `${SCHEDULE_URL}?${country?`country=${country}&`:''}date=${showDay}`;

        const response = await fetch(URL, {
            method: "GET",
        });

        if (response.status !== 200) {
            throw new Error("Schedule not loaded");
        }
        const schedule  = await response.json();

        return schedule;
    },
};
