

export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
}

export interface Cart {
    items: Array<CartItem>;
}