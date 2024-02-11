import { useState } from "react"
import { TreeModel } from '../../types/dogs';
import './tree-item.scss';

export default function TreeItem (
    { name, value, icon, children, onClick }:
    { name: string, value: any, icon?: string, children: TreeModel[], onClick: (val: string[]) => void }
) {
    const [expanded, setExpanded] = useState(false);
    const [animationClasses, setAnimationClasses] = useState('');

    function animateExpand(expanded) {
        if (expanded) {
            // open up
            // before enter classes (hidden full height)
            setAnimationClasses('wf-tree-item__children--expanded');
        } else {
            // close
            setAnimationClasses('');
        }
    }

    function handleClick() {
        if (children.length) {
            animateExpand(!expanded);
            setExpanded(!expanded);
        } else {
            onClick(value);
        }
    }

    // TODO: better key would be unique id
    const childrenList = (
        <div className={`wf-tree-item__children ${animationClasses}`}>
            {
                children.map((child) => {
                    return <TreeItem name={child.name} value={child.value} children={child.children || []} icon={child.icon} onClick={onClick} />
                })
            }
        </div>
    );

    const iconEl = icon ? <img className="wf-tree-item__icon" src={icon} /> : <div className="wf-tree-item__spacer" /> ;


    return (
        <div className="wf-tree-item">
            <button className="wf-tree-item__button" onClick={handleClick}>
                {iconEl}
                <div>{name}</div>
                { children.length ? <img className={`wf-tree-item__chevron ${expanded ? 'wf-tree-item__chevron--expanded' : ''}`} src="chevron.svg" /> : '' }
            </button>
            {
                children.length
                ? childrenList
                : ''
            }
        </div>
    )
}