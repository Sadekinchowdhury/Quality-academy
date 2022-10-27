import React from 'react';

const Dark = () => {
    return (
        <div>
            <div data-theme="dark">
                <div data-theme="light">
                    This div will always use light theme
                    <span data-theme="retro">This span will always use retro theme!</span>
                </div>
            </div>
        </div>
    );
};

export default Dark;