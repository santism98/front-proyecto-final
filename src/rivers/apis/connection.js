/**

Async function to connect to a specified URL and retrieve data from it.
@param {string} url - URL to connect to.
@returns {Promise<Object>} - Promise object representing the connection status and the retrieved data or error.
*/

export const connection = async (url) => {

    try {

        let request = await fetch(url);

        if (request.ok) {
            let river = await request.json();

            return { ok: true, river };
        } else {
            throw new Error({
                ok: false,
                msg: "Unable to retrieve river"
            });
        }
    }
    catch (error) {
        return error;
    }

}

