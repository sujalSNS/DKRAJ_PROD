import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const Shop = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // Filters state
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);

    const categories = [
        { value: "Bangles", label: "Bangles" },
        { value: "bracelets", label: "Bracelet" },
        { value: "headJewelleries", label: "Head Jewelry" },
        { value: "earring", label: "Earring" },
        { value: "bridalSets", label: "Bridal Sets" },
        { value: "rings", label: "Rings" },
        { value: "mangalsutra", label: "Mangalsutra" },
        { value: "necklace", label: "Necklace" },
        { value: "nosePins", label: "Nose pins" },
        { value: "pendants", label: "Pendants" },
    ];

    const genderOptions = [
        { value: "men", label: "Men" },
        { value: "women", label: "Women" },
        { value: "kids", label: "Kids" },
    ];

    const priceRanges = [
        { value: "10000", label: "Below Rs. 10,000" },
        { value: "10000-20000", label: "Rs. 10,000 - Rs. 20,000" },
        { value: "20000-30000", label: "Rs. 20,000 - Rs. 30,000" },
        { value: "30000-40000", label: "Rs. 30,000 - Rs. 40,000" },
        { value: "40000-1000000", label: "Rs. 40,000 and above" },
    ];

    const fetchProducts = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const query = new URLSearchParams({
                page,
                limit: 10,
                price: selectedPrice.join(','),
                category: selectedCategory.join(','),
                gender: selectedGender.join(',')
            });

            const response = await fetch(
                `http://localhost:5000/api/products?${query.toString()}`
            );
            const data = await response.json();

            if (data.success) {
                setProducts((prevProducts) => page === 1 ? data.products : [...prevProducts, ...data.products]);
                setHasMore(data.pagination.page < data.pagination.pages); 
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [page, selectedPrice, selectedCategory, selectedGender]);

    const handleFilterChange = (filterType, value) => {
        const updateFilter = (currentFilter) => {
            return currentFilter.includes(value)
                ? currentFilter.filter(item => item !== value)
                : [...currentFilter, value];
        };

        switch (filterType) {
            case 'price':
                setSelectedPrice(updateFilter(selectedPrice));
                break;
            case 'category':
                setSelectedCategory(updateFilter(selectedCategory));
                break;
            case 'gender':
                setSelectedGender(updateFilter(selectedGender));
                break;
            default:
                break;
        }

        setPage(1); // Reset page to 1 when filters change
    };

    return (
        <div className="min-h-screen pt-32 pb-24 flex flex-col">
            <div className="flex-grow flex">
                <div className="w-1/4 py-5 h-full md:flex flex-col hidden">
                    <div className="bg-gray-300 font-bold px-4 py-3 text-2xl rounded-t-lg">
                        Filters
                    </div>
                    <div
                        className="sticky md:flex hidden flex-col top-32 bg-gray-100 rounded-lg overflow-y-auto"
                        style={{ maxHeight: "calc(90vh - 8rem)" }}
                    >
                        <div className="py-4 px-5 space-y-4">
                            <div>
                                <p className="font-semibold text-lg">Price</p>
                                <div className="flex flex-col space-y-1">
                                    {priceRanges.map((e) => (
                                        <label key={e.value} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-blue-500 rounded"
                                                onChange={() => handleFilterChange('price', e.value)}
                                                checked={selectedPrice.includes(e.value)}
                                            />
                                            <span className="ml-2">{e.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Category</p>
                                <div className="flex flex-col space-y-1">
                                    {categories.map((e) => (
                                        <label key={e.value} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-blue-500 rounded"
                                                onChange={() => handleFilterChange('category', e.value)}
                                                checked={selectedCategory.includes(e.value)}
                                            />
                                            <span className="ml-2">{e.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Gender</p>
                                <div className="flex flex-col space-y-1">
                                    {genderOptions.map((e) => (
                                        <label key={e.value} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-blue-500 rounded"
                                                onChange={() => handleFilterChange('gender', e.value)}
                                                checked={selectedGender.includes(e.value)}
                                            />
                                            <span className="ml-2">{e.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 md:pl-8 h-full pt-5">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
                        {products.map(product => (
                            <ProductCard key={product.productID} product={product} />
                        ))}
                    </div>
                    {hasMore && (
                        <div className="text-center">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => setPage(page + 1)}
                                disabled={loading}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                    {!hasMore && (
                        <div className="text-center py-6">
                            <p>No more products to show.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
