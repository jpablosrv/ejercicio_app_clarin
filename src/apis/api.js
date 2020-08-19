export const API_CLARIN = 'http://api-editoriales.clarin.com/api/mobile/v2/oletv';

export const getHome = async () => {
    const query = await fetch(`${API_CLARIN}/home`);
    const responseData  = await query.json();
    const { items } = responseData; 
    console.log('Items getHome : ', {items,responseData});
    return items;
};

export const getList = async (id) => {
    const query = await fetch(`${API_CLARIN}/lists?id=${id}`);
    const {items} = await query.json();
    return items;
}

export const getCategory = async (id) => {
    const query = await fetch(`${API_CLARIN}/lists/${id}`);
    const {items} = await query.json();
    return items;
}