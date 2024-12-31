

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReadMore = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="p-4">
            <div>
                {data.image && (
                    <img
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                        src={data.image}
                        alt={data.title || "News Image"}
                    />
                )}
                <h1 className="text-2xl font-bold text-gray-800 mt-4">{data.title}</h1>
                <div
                    className="text-gray-700 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: data.newsContent || "" }}
                />
            </div>
        </div>
    );
};

export default ReadMore;
