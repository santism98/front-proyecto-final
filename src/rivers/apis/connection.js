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

