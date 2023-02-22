
import React, { Fragment, useState } from 'react';
import Popover from './Popover';
import Information from './Information';
import { SVG_STATUS_INFO } from '../../assets/Assets';


interface IInfoProps {
    config: {
        title: string,
        info: any
        icon?: any
    },
    
}



const Info: React.FunctionComponent<IInfoProps> = ({ config }) => {


    let [showInfo, setShowInfo] = useState(null)
    let [infoPopover, setInfoPopover] = useState(false)
   


    /**
    * handleDisplayInfo
    * handle the information popover per statistic
    * return null
    */
    const handleDisplayInfo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent> | (EventTarget & HTMLAnchorElement) | any, type = '') => {
        // e.preventDefault();

        if (type === 'close') {
            setShowInfo(null);
            setInfoPopover(false)

        } else {
            setInfoPopover(!infoPopover)
            if (showInfo) {
                setShowInfo(null);
            } else {
                setShowInfo(e.currentTarget);

            }
        }


    }



    return (
        <Fragment>
            {
                config.info ? (
                    <Fragment>
                        <div className="em-info">
                            {/* <a href="info_icon" className="em-info-icon" onClick={event => handleDisplayInfo(event)}>
                                {config.icon ? config.icon : SVG_STATUS_INFO}
                            </a> */}

                            <span  className="em-info-icon" onClick={event => handleDisplayInfo(event)}>
                                {config.icon ? config.icon : SVG_STATUS_INFO}
                            </span>
                            <Popover
                                id="InfoPopOver"
                                open={Boolean(infoPopover)}
                                className={Boolean(infoPopover) ? 'open-popover' : ''}
                                onClick={(event, type) => handleDisplayInfo(event, type)}
                                
                            >

                                <Information
                                    items={config.info && config.info.infoDetails ? config.info.infoDetails : config.info}
                                    listRow={config.info && config.info.listRow ? config.info.listRow : []}
                                    desc={config.info && config.info.listRow && config.info.listRow.length > 0 ? false : true}
                                    title={config && config.title ? config.title.toUpperCase() : ''}
                                    hide={event => handleDisplayInfo(event)}
                                />

                            </Popover>
                        </div>
                    </Fragment>
                ) : null
            }
        </Fragment>
    );
}

export default Info