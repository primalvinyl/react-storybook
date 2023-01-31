export default async function(endpoint: string, options: Record<string, any> = {}) {
    const { timeout = 5000 } = options;
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(endpoint, {
        ...options,
        signal: controller.signal  
    });

    const result = await response.json();

    clearTimeout(timerId);
    return result;
};
