import React, { useState } from 'react';

const HorizontalTouchScroll = ({ children_list, onScrollChange }) => {

    const [scrollIndex, setScrollIndex] = useState(0);

    const onScroll = (e) => {
        let new_scroll_index = Math.round(e.target.scrollLeft / e.target.clientWidth);
        if (new_scroll_index !== scrollIndex) {
            setScrollIndex(new_scroll_index);
            onScrollChange(new_scroll_index);
        }
    }

    return (
        <div className="flex w-full h-full overflow-y-hidden overflow-x-auto snap-type-mandatory snap-x snap-start"
        onScroll={onScroll}>
            {children_list.map((child, index) => (
                <section key={index} className="items-center min-w-full h-full bg-yellow-200 p-2 flex-shrink-0 snap-center">
                    {child}
                </section>
            ))}
        </div>
    );
}

export default HorizontalTouchScroll;