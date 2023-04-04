const baseApi = 'http://192.168.87.66:5000';

// Add token interceptor in this function
export const authorizedPost = async(apiResource, body) => {
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
        console.log("failed!", err);
        return err;
    }
}

export const unauthorizedPost = async(apiResource, body) => {
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
			console.log("failed!", err);
			return err;
	}
}