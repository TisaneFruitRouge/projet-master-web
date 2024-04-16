
export default async function PropertyPage({ params }: { params: { id: string } }) {
    
    const {id} = params;

    return (
        <h1>Property: {id}</h1>
    )
}