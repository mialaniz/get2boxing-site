import { BasketIcon } from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from 'sanity';

export const orderType = defineType({

    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields:[

        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'stripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'stripeCustomerId',
            title: 'Stripe Customer ID',
            type: 'string',
            validation: (Rule) => Rule.required()

        }),
        defineField({
            name: 'email',
            title: 'Customer Email',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'stripePaymentIntentId',
            title: 'Stripe Payment Intent ID',
            type: 'string',
            validation: (Rule) => Rule.required()

        }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
            validation: (Rule) => Rule.required() 

        })
    ],
});