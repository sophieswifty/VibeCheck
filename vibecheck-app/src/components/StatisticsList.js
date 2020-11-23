import React from 'react';

export default function StatisticsList(props) {
    const items = props.items

    function createList(items) {
        items.map( (s, i) => {
            return <div>s</div>
        })
    }
    return (
        <div>{console.log(items)}</div>
    )
}