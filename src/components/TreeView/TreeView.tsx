import TreeItem from './TreeItem';
import { TreeModel } from '../../types/dogs';

export default function TreeView({ items, onClick }: { items: TreeModel[], onClick: (val: any) => void }) {

    // TODO: better key would be unique id
    console.log(items);
    const treeItems = items.map(({ name, value, children = [] }) => {
        return <TreeItem name={name} value={value} children={children} onClick={onClick} />
    })

    return (
        <div className='wf-tree-view'>
            {treeItems}
        </div>
    )
};
