const productService = {

    retrieve: async () => {
        const response = await fetch("http://localhost:3000/api/v1/product/retrieve", {
            method: "GET"
        })
        if (!response.ok) {
            throw new Error("can't retrieve product");
        }
        return await response.json();
    }

}

export default productService;