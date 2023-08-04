export const getProducts = `*[_type == 'product']`

export const getBaners = `*[_type == 'banner']`

export const getProduct = (slug: string) => {
    const query = `*[_type == "product" && slug.current == '${slug}']`;
    return query;
};
