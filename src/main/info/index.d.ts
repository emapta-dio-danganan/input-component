import React from 'react';
interface IInfoProps {
    config: {
        title: string;
        info: any;
        icon?: any;
    };
}
declare const Info: React.FunctionComponent<IInfoProps>;
export default Info;
