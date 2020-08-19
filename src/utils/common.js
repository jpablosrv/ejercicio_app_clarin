export const getUriImage = (uriArray) => {
    let salida ='../images/technical_difficulties.jpg';
    for(let i = 0; i < uriArray.length; i++ ) {
        if(uriArray[i].url) {
            let urlSplit = uriArray[i].url.split('/');
            urlSplit[1] = urlSplit[1].split('_').join('.')
            salida = urlSplit.join('/');
            break;
        }
    }
    return 'https:/' + salida;
}