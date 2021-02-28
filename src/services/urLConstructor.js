export default function urlConstructor(values) {
    const { keyword, location, jobtype } = values;
    const baseUrl = `https://github-api-next.vercel.app/api/positions?description=${keyword}`;
    let url;

    if (location && jobtype) {
        const _jobtype =
            jobtype === "FullTime" ? "&full_time=true" : "&part_time=true";
        url = baseUrl + _jobtype + `&location=${location}`;
    } else if (location) {
        url = baseUrl + `&location=${location}`;
    } else if (jobtype) {
        const _jobtype =
            jobtype === "FullTime" ? "&full_time=true" : "&part_time=true";
        url = baseUrl + _jobtype;
    } else {
        url = baseUrl;
    }

    return url;
}