import {TrolleyIcon} from '@sanity/icons';
import {defineField, defineType} from 'sanity';

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: TrolleyIcon,
    fields:[
        defineField({
            name:'name',
            title: 'Product Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        }),
        defineField({
            name: 'image',
            type: 'image',
            options:{
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(1)
        })
    ],
    preview: {

        select: {
            title:'name',
            media: 'image',
            price: 'price',
        },
        prepare(select){
            return{
                title: select.title,
                media: select.media,
                subtitle: `$${select.price}`
            }
        }
    },
});