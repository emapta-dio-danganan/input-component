import React from 'react';
interface IPropsPopover {
    id: String;
    className: String;
    open: Boolean;
    origin?: String;
    ref?: any;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, type?: any) => void;
}
declare const Popover: React.FC<IPropsPopover>;
export default Popover;
