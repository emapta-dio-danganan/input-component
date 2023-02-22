import React from 'react';
import '../scss/styles.scss';
interface IProps {
    config: {
        id: string;
        type: string;
        placeholder?: string;
        label?: string;
        selected?: any;
        accept?: string;
        disabled?: boolean;
        multiple?: boolean;
    };
    hasChips: boolean;
    customClass?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data?: string) => void;
    onRemoved?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
declare const File: React.FC<IProps>;
export default File;
