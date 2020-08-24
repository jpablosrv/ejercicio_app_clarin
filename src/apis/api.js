export const API_CLARIN = 'http://api-editoriales.clarin.com/api/mobile/v2/oletv';

export const getHome = async () => {
    const query = await fetch(`${API_CLARIN}/home?offset=0&limit=10`);
    const responseData  = await query.json();
    //const { items } = responseData;
    //console.log('Get Home Res : ', responseData);
    return responseData;
};

export const getNext = async (limit = 10, offset = 0) => {
    const query = await fetch(`${API_CLARIN}/home?offset=${offset}&limit=${limit}`);
    const responseData  = await query.json();
    //const { items } = responseData; 
    return responseData;
//    return items;

}

export const getList = async (id) => {
    const query = await fetch(`${API_CLARIN}/lists?id=${id}`);
    const {items} = await query.json();
    return items;
}

export const getListById = async (id, offset, limit) => {
    const urlReq = `${API_CLARIN}/lists/${id}?offset=${offset}&limit=${limit}`;
    console.log('Url Get ', urlReq);
    const query = await fetch(urlReq);
    const responseData = await query.json();
    return responseData;
}