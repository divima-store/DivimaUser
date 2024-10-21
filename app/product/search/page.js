import CardsContainer from '@/app/_components/CardsContainer';
import { supabase } from '@/app/_lib/supabase';

export default async function SearchPage({ searchParams }) {
    const { s } = searchParams;
    let products = [];
    if (s) {
        const searchTerms = s.split(' ').map(term => term.trim()).filter(term => term);
        const searchConditions = searchTerms.map(term =>
            `name.ilike.%${term}%,description.ilike.%${term}%,category.ilike.%${term}%`
        ).join(',');
        const { data, error } = await supabase
            .from('products').select('*')
            .or(searchConditions);

        if (data) {
            products = data;
        } else {
            console.error(error);
        }
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Search Results : "{ s }"</h1>
            <div>
                {products.length > 0 ? (
                    <CardsContainer products={products} />
                ) : (
                    <p>No products found for <span style={{ whiteSpace: 'pre-wrap' }}>"{s}"</span></p>
                )}
            </div>
        </div>
    );
};


