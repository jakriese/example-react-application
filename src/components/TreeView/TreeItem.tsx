import { useState, useRef } from "react"
import { TreeModel } from '../../types/dogs';
import './tree-item.scss';

export default function TreeItem (
    { name, value, icon, children, onClick }:
    { name: string, value: any, icon?: string, children: TreeModel[], onClick: (val: string[]) => void }
) {
    const [expanded, setExpanded] = useState(false);
    const [animationClasses, setAnimationClasses] = useState('');
    const childContainer = useRef<HTMLDivElement>(null);

    function animateExpand(expanded) {
        if (expanded) {
            expandSection();
        } else {
            collapseChildren();
        }
    }

    function collapseChildren() {
        const height: number = childContainer.current.scrollHeight;
        
        childContainer.current.style.transition = '';
        
        requestAnimationFrame(function() {
            childContainer.current.style.height = `${height}px`;
            childContainer.current.style.transition = null;
          
            requestAnimationFrame(function() {
                childContainer.current.style.height = 0 + 'px';
            });
        });
        
        setAnimationClasses('');
    }
    
    function expandSection() {
        const height: number = childContainer.current.scrollHeight;

        function removeSetStyles() {
            childContainer.current.removeEventListener('transitionend', removeSetStyles);
            childContainer.current.style.height = null;
            childContainer.current.style.overflow = null;
        }
        
        childContainer.current.style.height = height + 'px';
        childContainer.current.style.overflow = 'hidden';
        childContainer.current.addEventListener('transitionend', removeSetStyles);
        setAnimationClasses('wf-tree-item__children--expanded');
    }

    function handleClick() {
        if (children.length) {
            animateExpand(!expanded);
            setExpanded(!expanded);
        } else {
            onClick(value);
        }
    }

    const childrenList = (
        <div ref={childContainer} className={`wf-tree-item__children ${animationClasses}`} {...(!expanded ? { inert: 'true'} : {})}>
            {
                children.map((child) => {
                    return <TreeItem key={child.name} name={child.name} value={child.value} children={child.children || []} icon={child.icon} onClick={onClick} />
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