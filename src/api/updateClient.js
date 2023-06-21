export async function updateClient(userId){
    try {
        const response = await fetch('https://apps-ws.spot1.mx/updateClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                lastname,
                email,
                cellphone,
                password
            })
        }) 
        return response.json()
    } catch (error) {
        console.log(error)
        return error;
    }
}