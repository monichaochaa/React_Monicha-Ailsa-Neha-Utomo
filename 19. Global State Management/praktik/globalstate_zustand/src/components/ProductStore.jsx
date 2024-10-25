import { create } from 'zustand';

const useProductStore = create((set) => ({
    products: [
        {
            id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCategory: "Doe",
            productFreshness: "Doe",
            productPrice: "Doe",
            image: "Doe",
            additionalDescription: "Doe",
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