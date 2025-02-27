const categoryService = {
    retrieve: async () => {
        const response = await fetch('http://localhost:3000/api/v1/category/retrieve',{
            method: 'GET'
        });
        if(!response.ok){
            throw new Error("can't retrieve category")
        }
        return await response.json();
    }
}

export default categoryService;