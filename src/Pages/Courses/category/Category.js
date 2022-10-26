import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData()
    console.log(category)
    // const [category, setCategory] = useState()
    // useEffect(() => {
    //     fetch('http://localhost:5000/category')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <div>
            {category?.map(cat =>
                <li>
                    <Link to={`/course/${cat._id}`} key={cat.id}
                        cat={cat}
                    >
                        {cat.name}
                    </Link>

                </li>
            )}
        </div>
    );
};

export default Category;