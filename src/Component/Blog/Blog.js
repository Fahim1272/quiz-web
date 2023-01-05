import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='bg-blue-500 m-10 p-10'>
            <h1 className='font-bold text-3xl mb-3 text-white'>Blog</h1>
            <div className='blog-item'>
                <h1 className='font-bold text-2xl mb-3'>What is the purpose of react router?</h1>
                <p>
                    To display numerous views in a single page application, React Router is crucial. Multiple views cannot be shown in React apps without React Router. React Router is used by the majority of social media platforms, including Facebook and Instagram, to render multiple views.</p>
            </div>
            <div className='blog-item'>
                <h1 className='font-bold text-2xl mb-3'>How does context api works?</h1>
                <p>
                You only require React.createContext.
The component known as the provider, as its name implies, gives the state to its offspring.
A component that utilizes and consumes the state is known as a consumer.
                </p>
            </div>
            <div className='blog-item'>
                <h1 className='font-bold text-2xl my-3'>how UseRef hook works?</h1>
                <p>
                Between renderings, you can maintain values using the useRef Hook.
It can be used to hold a mutable value that, when altered, doesn't require a new rendering.
It can be applied to directly access a DOM element.
Only one object is returned by useRef(). “It” being a current being called.
                </p>
            </div>
        </div>
    );
};

export default Blog;