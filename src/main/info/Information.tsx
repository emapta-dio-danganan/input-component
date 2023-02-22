
import React, { useState } from 'react';
import {SVG_ARROW_UP, SVG_ARROWDOWN, SVG_CLOSE_GRAY} from "../../assets/Assets";

interface IInformationProps {
    items: any,
    listRow: Array<string | object>,
    desc: boolean,
    title?: string
    hide: (event: React.DOMAttributes<HTMLDivElement> | React.MouseEventHandler<HTMLDivElement> | undefined | any) => void


}



const Information: React.FunctionComponent<IInformationProps> = ({ items, listRow, desc, title, hide }) => {

    let [rowAnchorEl, setRowAnchorEl] = useState<number | null>(null);


    const renderHtml = (html: any) => {

        return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }


    const showRowDetails = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
        e && e.preventDefault();

        if (rowAnchorEl === idx) {
            rowAnchorEl = null
        } else {
            rowAnchorEl = idx
        }

        setRowAnchorEl(rowAnchorEl)
    }

  


    const View = () => {
        return <React.Fragment>
           {
                typeof desc != 'undefined' && desc ? (
                    <div className="em-popover-i-content">
                        <div className="em-popover-i-title">
                            <h6>{title}</h6>
                            <div className="em-close" onClick={hide}>{SVG_CLOSE_GRAY}</div>
                        </div>
                        <div>{typeof items != 'undefined' && items ? renderHtml(items) : ''}
                        </div>
                    </div>
                ) : (
                    <div className="em-popover-i-content">
                        <div className="em-popover-i-title">
                            <h6>{title}</h6>
                            <div className="em-close" onClick={hide}>{SVG_CLOSE_GRAY}</div>
                        </div>
                        {listRow ? (
                            listRow.length >= 1 ? (
                                listRow.map((item: any, key) => (

                                    <React.Fragment key={key}>
                                        <div className="em-popover-i-category" onClick={(event) => showRowDetails(event, key)}>
                                            <div>
                                                <h6>{item}</h6>
                                            </div>

                                            {
                                                rowAnchorEl === key ? (SVG_ARROW_UP) : (SVG_ARROWDOWN)
                                            }
                                        </div>
                                        {
                                            rowAnchorEl === key ? (
                                                <div className="em-popover-i-details">
                                                    {item === 'COMPANY POLICY' ? (
                                                        typeof items != 'undefined' && typeof items.companyPolicy != 'undefined' && items.companyPolicy ? renderHtml(items.companyPolicy) : '') :
                                                        (item === 'SYSTEM POLICY' ? (typeof items != 'undefined' && typeof items.systemPolicy != 'undefined' && items.systemPolicy ? renderHtml(items.systemPolicy) : '') :
                                                            (typeof items != 'undefined' && typeof items.instruction != 'undefined' && items.instruction ? renderHtml(items.instruction) : '')
                                                        )
                                                    }
                                                </div>
                                            ) : null
                                        }
                                    </React.Fragment>
                                )

                                )
                            ) : null
                        ) : null


                        }
                    </div>
                )
            }
        </React.Fragment>
    }


    return View();
};

export default Information;



