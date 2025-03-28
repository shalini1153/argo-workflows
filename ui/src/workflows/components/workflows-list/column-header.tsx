import React from 'react';

interface ColumnHeaderProps {
    sortBy?: string;
    orderBy?: string;
    setSortBy: (sortBy: string) => void;
    setOrderBy: (orderBy: string) => void;
    item: string;
    children: React.ReactNode;
}

export const ColumnHeader = ({sortBy, orderBy, setSortBy, setOrderBy, item, children}: ColumnHeaderProps) => {
    const handleOnClick = () => {
        setSortBy(item);
        setOrderBy(sortBy === item && orderBy === 'asc' ? 'desc' : 'asc');
    };

    return (
        <span
            style={{
                cursor: 'pointer'
            }}
            onClick={() => handleOnClick()}>
            {children}
            <span style={{marginLeft: '5px'}}>
                {sortBy !== item && <i className='fa fa-sort' />}
                {sortBy === item && orderBy === 'asc' && <i className='fa fa-sort-asc' />}
                {sortBy === item && orderBy === 'desc' && <i className='fa fa-sort-desc' />}
            </span>
        </span>
    );
};
