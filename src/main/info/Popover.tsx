import  React,{createRef, forwardRef, Fragment, useEffect, useRef} from 'react';

interface IPropsPopover{
    id:String,
    className:String
    open: Boolean,
    origin?:String,
    ref?:any,
   
    onClick:(event:React.MouseEvent<HTMLDivElement, MouseEvent>, type?:any) => void,
}


const Popover: React.FC<IPropsPopover> = ({ open, origin,  children, onClick }) => {
    const ref = useRef(null);
    
    const handleClickOutside = (e:any) =>{
        if(e && e.target && e.target.className && e.target.className.indexOf && e.target.className.indexOf('em-popover') > -1){
          
        }else{
            document.removeEventListener('click', handleClickOutside, true);
            return onClick(e, 'close')
        }
    }


    document.addEventListener('click', handleClickOutside, true);

    return (
        <Fragment>
            {
                open &&
                <Fragment >
                    <div className="em-overlay" onClick={e=>onClick(e)} >
                    </div>
                    <div className="em-popover" style={origin !== undefined && origin === "right" ? { right: 200 + 'px' } : { left: 0 + 'px' }} ref={ref}>
                        {children}
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

export default Popover
