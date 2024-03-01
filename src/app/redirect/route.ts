export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export function GET(request: Request) {
    const url = new URL(request.url);

    // Extract the 'redirects' query parameter
    const redirectsParam = url.searchParams.get("options");

    // Split the 'redirects' parameter into an array of strings if it exists
    // If 'redirects' is not provided, default to an empty array
    const redirects = redirectsParam ? redirectsParam.split(",") : [];

    const randomChoice = redirects.length > 0 ? redirects[Math.floor(Math.random() * redirects.length)] : null;

    // Return the list of redirects as a JSON response
    return new Response(JSON.stringify(redirects), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}