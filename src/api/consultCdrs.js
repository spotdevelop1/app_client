export async function consultCdrs(type, phone, dateStart, dateEnd){
    let url = 'https://apps-ws-test.spot1.mx/consultCdrs?' + new URLSearchParams({
        type,
        phone,
        dateStart,
        dateEnd,
    })
    try {
        const response = await (await fetch(url)).json();
        return response
    } catch (error) {
        return console.log(error)
    }

}

