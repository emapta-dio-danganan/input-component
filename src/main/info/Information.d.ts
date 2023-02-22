import React from 'react';
interface IInformationProps {
    items: any;
    listRow: Array<string | object>;
    desc: boolean;
    title?: string;
    hide: (event: React.DOMAttributes<HTMLDivElement> | React.MouseEventHandler<HTMLDivElement> | undefined | any) => void;
}
declare const Information: React.FunctionComponent<IInformationProps>;
export default Information;
