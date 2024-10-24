import { create } from 'zustand';

const useProductStore = create((set) => ({
    products: [
        {
            id: "1,001",
            name: 'Lorem',
            category: 'ipsum',
            price: 1,
            freshness: 'Brand New',
            description: 'adipisicing',
        },
        {
            id: "1,002",
            name: 'Lorem',
            category: 'ipsum',
            price: 9,
            freshness: 'Second Hand',
            description: 'adipisicing',
        },
        {   id: "1,003",
            name: 'Lorem', 
            category: 'ipsum', 
            price: 20, 
            freshness: 'Brand New', 
            description: 'adipisicing' 
        },
        {   id: "1,004", 
            name: 'Lorem', 
            category: 'ipsum', 
            price: 9, 
            freshness: 'Refused', 
            description: 'adipisicing' 
        },
    ],
    deleteProduct: (id) => set((state) => ({
        products: state.products.filter((product) => product.id !== id)
    })),
    editProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map((product) => 
            product.id === id ? { ...product, ...updatedProduct } : product
        )
    })),
}));

export default useProductStore;