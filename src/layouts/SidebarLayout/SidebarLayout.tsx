import { useState, ReactNode } from "react";
import './sidebar-layout.scss';

export default function SidebarLayout({ content, sidebar, sidebarBottom } : { content: ReactNode, sidebar: ReactNode, sidebarBottom: ReactNode }) {
    // TODO: set as false by default for mobile
    const [expanded, setExpanded] = useState(true)

    return (
        <div className="wf-sidebar-layout">
            { /* skip to main here */ }
            <aside className="wf-sidebar-layout__sidebar">
                <div className="wf-sidebar-layout__sidebar-top">
                    <div className="wf-sidebar-layout__logo-container">
                        <img src="woofer.svg" className="wf-sidebar-layout__logo" alt="logo" />
                        <span>Woofer</span>
                    </div>
                </div>
                <div className="wf-sidebar-layout__sidebar-content">
                    { sidebar }
                </div>
                <div className="wf-sidebar-layout__sidebar-bottom">
                    { sidebarBottom }
                </div>
            </aside>
            <main id="main" className="wf-sidebar-layout__main">
                <div className="wf-sidebar-layout__content">
                    { content }
                </div>
            </main>
        </div>  
    );
}