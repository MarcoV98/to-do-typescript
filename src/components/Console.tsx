import React, { useState } from 'react';
import Table from './Table';
import { data, Itag } from '../utils/data';

const Console: React.FC = () => {
    const title1 = 'Categorie';
    const title2 = 'Tag';
    const [selectedTag, setSelectedTag] = useState<Itag[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
    const [localData, setLocalData] = useState(data)

    const categoryItems = localData.map(({ id, name }) => ({ id, name }));

    const handleClick = (category: { id: number; name: string }) => {
        const selectedItem = localData.find((cat) => cat.id === category.id);
        if (selectedItem) {
            setSelectedTag(selectedItem.tags);
            setSelectedCategoryId(category.id);
        }
    };

    const handleDeleteCategory = (id: number) => {
        setLocalData(localData.filter((category) => category.id !== id));
        
        if (id === selectedCategoryId) {
            setSelectedTag([]);
            setSelectedCategoryId(null);
        }
    };

    const handleDeleteTag = (id: number) => {
        setSelectedTag(selectedTag.filter((tag) => tag.id !== id));
    };

    return (
        <section>
            <Table
                tableTitle={title1}
                items={categoryItems}
                handleClick={handleClick}
                handleDelete={handleDeleteCategory}
            />

            <Table
                tableTitle={title2}
                items={selectedTag}
                handleClick={() => {}} 
                handleDelete={handleDeleteTag}
            />
        </section>
    );
};

export default Console;