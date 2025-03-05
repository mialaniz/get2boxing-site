async function ProductPage({params}: {params: Promise<{slug: string}>}){
    const {slug} = await params;
    

    return <div>ProductPage</div>


}

export default ProductPage;