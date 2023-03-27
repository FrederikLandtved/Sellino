const baseApi = 'http://192.168.87.56:5000';

export const authorizedPostFetch = async(apiResource, body) => {
    if(!apiResource)
        return console.log("Please add an API resource to the endpoint.");
				
		try {
			const response = await fetch(baseApi + '/' + apiResource, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    
    const json = await response.json();

    return json;

		} catch(err) {
			console.log(err);
			return err;
		}
}