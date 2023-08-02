import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'cuj8yrfw',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: true,
    token: process.env.NEXT_PUBCLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);