import { useState, ReactNode } from "react";
import './toggle.scss'

export default function Toggle({ children, onToggle }: { children?: ReactNode, onToggle: (val: boolean) => void }) {
    const [value, setValue] = useState(false);

    function handleInput(e) {
        setValue(e.target.checked);
        onToggle(e.target.checked);
    }

    return (
        <label className="wf-toggle">
            <input className="wf-toggle__input" type="checkbox" onInput={handleInput} />
            <div className={`wf-toggle__control ${value ? `wf-toggle__control--active` : ''}`}>
                <div className={`wf-toggle__knob ${value ? `wf-toggle__knob--active` : ''}`} />
            </div>
            <div className="wf-toggle__label">
                { children }
            </div>
        </label>
    )
}