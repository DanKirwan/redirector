export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export function GET(request: Request) {
    const url = new URL(request.url);

    // Extract the 'redirects' query parameter
    const redirectsParam = url.searchParams.get("options");

    // Split the 'redirects' parameter into an array of strings if it exists
    // If 'redirects' is not provided, default to an empty array
    const redirects = redirectsParam ? redirectsParam.split(",") : [];
    const randomIndex = redirects.length > 0 ? Math.floor(Math.random() * redirects.length) : -1;

    if (randomIndex === -1) {
        // If there are no redirects, return a message or handle as needed
        return new Response("No redirect URLs provided", {
            status: 400, // Bad Request
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    } else {
        const selectedRedirectUrl = decodeURIComponent(redirects[randomIndex]);

        return Response.redirect(selectedRedirectUrl, 302); // Use a 302 Found status code for temporary redirection
    }
}