import Api from './Api'

export const verifyToken = async () => {
    const response = await Api.post('verifytoken/')
    return response;
};

export const getDataApi = async (id, page) => {
    const response = await Api.post(`fetch/${page}`, { orderId: id })
    return response;
};

export const getPreviewDataApi = async (id,page) => {
    const response = await Api.post(`fetch/${page}`, { previewString: id })
    return response;
};

export const addDataApi = async (id, pageId, data) => {
    const response = await Api.post('upload/', { orderId: id, pageId, customString: data })
    return response;
};