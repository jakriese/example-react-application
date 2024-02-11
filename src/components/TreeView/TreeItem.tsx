import { useState } from "react"
import { TreeModel } from '../../types/dogs';
import './tree-item.scss';

export default function TreeItem (
    {  name, value, children, onClick }:
    { name: string, value: any, children: TreeModel[], onClick: (val: string[]) => void }
) {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        if (children.length) {
            setExpanded(!expanded);
        } else {
            onClick(value);
        }
    }

    // TODO: better key would be unique id
    const childrenList = (
        <div className={`wf-tree-item__children ${expanded ? 'wf-tree-item_children--expanded' : ''}`}>
            {
                children.map((child) => {
                    return <TreeItem name={child.name} value={child.value} children={child.children || []} onClick={onClick} />
                })
            }
        </div>
    );


    return (
        <div className="wf-tree-item">
            <button className="wf-tree-item__button" onClick={handleClick}>
                {name}
            </button>
            {
                children.length
                ? childrenList
                : ''
            }
        </div>
    )
}